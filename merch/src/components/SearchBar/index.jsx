import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../data/menuData';
import search from '../../assets/img/search.png';

const SearchBar = ({ onClose, isMobile }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem('searchHistory');
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    const updateSearchHistory = (term) => {
        const newHistory = [term, ...searchHistory.filter(item => item !== term)].slice(0, 5);
        setSearchHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    const getSuggestions = (value) => {
        const inputValue = value.toLowerCase();
        const allKeywords = menuItems.flatMap(item => [...item.keywords, item.title]);
        
        const combinedSuggestions = [...new Set([
            ...searchHistory.filter(term => term.toLowerCase().includes(inputValue)),
            ...allKeywords.filter(term => term.toLowerCase().includes(inputValue))
        ])];

        return combinedSuggestions.slice(0, 5);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        
        if (value.trim()) {
            const filteredSuggestions = getSuggestions(value);
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
        performSearch(suggestion);
    };

    const performSearch = (term = searchTerm) => {
        if (term.trim()) {
            const searchValue = term.toLowerCase();
            const foundItem = menuItems.find(item => 
                item.title.toLowerCase().includes(searchValue) ||
                item.keywords.some(keyword => keyword.toLowerCase().includes(searchValue))
            );
            
            if (foundItem) {
                updateSearchHistory(term);
                navigate(foundItem.path);
                setSearchTerm('');
                setShowSuggestions(false);
                if (isMobile && onClose) {
                    onClose();
                }
            }
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            performSearch();
        } else if (event.key === 'Escape' && isMobile) {
            onClose();
        }
    };

    const removeFromHistory = (termToRemove) => {
        const newHistory = searchHistory.filter(term => term !== termToRemove);
        setSearchHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.search-container')) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const shouldShowSuggestions = showSuggestions && searchTerm.trim() && suggestions.length > 0;

    return (
        <div className={`flex items-center relative search-container ${isMobile ? 'w-full' : 'flex-1'}`}>
            {isMobile && (
                <button 
                    onClick={onClose}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-10"
                >
                    ←
                </button>
            )}
            
            <img
                src={search}
                alt="Пошук"
                className={`w-5 h-5 absolute opacity-50 cursor-pointer ${isMobile ? 'left-10' : 'left-4'}`}
                onClick={() => performSearch()}
            />
            
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onFocus={() => {
                    if (searchTerm.trim()) {
                        setShowSuggestions(true);
                    }
                }}
                placeholder="ПОШУК"
                className={`w-full px-4 py-2 rounded-full border focus:outline-none placeholder:text-gray-500 ${
                    isMobile ? 'pl-16' : 'pl-12'
                }`}
                autoFocus={isMobile}
            />
            
            {shouldShowSuggestions && (
                <div className={`absolute left-0 right-0 bg-white z-[1000] max-h-60 overflow-y-auto ${
                    isMobile 
                        ? 'top-[calc(100%+4px)] border rounded-lg' 
                        : 'top-[calc(100%+4px)] border border-solid rounded-lg'
                }`}>
                    <div>
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                <div className="flex items-center">
                                    <img 
                                        src={search} 
                                        alt="Пошук" 
                                        className="w-4 h-4 mr-2 opacity-50"
                                    />
                                    <span>{suggestion}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;