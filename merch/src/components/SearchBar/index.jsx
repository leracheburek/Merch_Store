import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../data/menuData';
import search from '../../assets/img/search.png';

const SearchBar = ({ onClose, isMobile }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [autocompleteSuggestion, setAutocompleteSuggestion] = useState('');
    const [wasAutoCompleted, setWasAutoCompleted] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        try {
            const savedHistory = localStorage.getItem('searchHistory');
            if (savedHistory) {
                setSearchHistory(JSON.parse(savedHistory));
            }
        } catch (error) {
            console.error('Error loading search history:', error);
            localStorage.setItem('searchHistory', JSON.stringify([]));
            setSearchHistory([]);
        }
    }, []);

    const updateSearchHistory = (term) => {
        if (!term.trim()) return;
        
        try {
            const newHistory = [
                term,
                ...searchHistory.filter(item => item.toLowerCase() !== term.toLowerCase())
            ].slice(0, 5);
            
            setSearchHistory(newHistory);
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
        } catch (error) {
            console.error('Error updating search history:', error);
        }
    };

    const getSuggestions = (value) => {
        if (!value.trim()) {
            return searchHistory;
        }

        const inputValue = value.toLowerCase();
        const allKeywords = menuItems.flatMap(item => [
            ...item.keywords.map(k => k.toLowerCase()),
            item.title.toLowerCase()
        ]);

        const historySuggestions = searchHistory.filter(term => 
            term.toLowerCase().includes(inputValue)
        );
        
        const keywordSuggestions = allKeywords.filter(term => 
            term.toLowerCase().includes(inputValue) &&
            !historySuggestions.find(h => h.toLowerCase() === term.toLowerCase())
        );

        return [...historySuggestions, ...keywordSuggestions].slice(0, 5);
    };

    const getAutocompleteSuggestion = (value) => {
        if (!value.trim()) return '';
        
        const inputValue = value.toLowerCase();
        const allKeywords = menuItems.flatMap(item => [
            ...item.keywords.map(k => k.toLowerCase()),
            item.title.toLowerCase()
        ]);
        
        const suggestion = allKeywords.find(keyword => 
            keyword.toLowerCase().startsWith(inputValue)
        );
        
        return suggestion || '';
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setWasAutoCompleted(false);
        
        const filteredSuggestions = getSuggestions(value);
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);

        if (value.trim()) {
            const autoComplete = getAutocompleteSuggestion(value);
            if (autoComplete && autoComplete.toLowerCase().startsWith(value.toLowerCase())) {
                setAutocompleteSuggestion(autoComplete);
            } else {
                setAutocompleteSuggestion('');
            }
        } else {
            setAutocompleteSuggestion('');
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
        setAutocompleteSuggestion('');
        performSearch(suggestion);
    };

    const applyAutocomplete = () => {
        if (autocompleteSuggestion) {
            setSearchTerm(autocompleteSuggestion);
            setAutocompleteSuggestion('');
            setWasAutoCompleted(true);
            return true;
        }
        return false;
    };

    const performSearch = (term = searchTerm) => {
        if (!term.trim() || term.length < 4) return;
            
        const searchValue = term.toLowerCase();
        const foundItem = menuItems.find(item => 
            item.title.toLowerCase() === searchValue ||
            item.keywords.some(keyword => keyword.toLowerCase() === searchValue)
        );
        
        if (foundItem) {
            updateSearchHistory(term);
            navigate(foundItem.path);
            setSearchTerm('');
            setShowSuggestions(false);
            setAutocompleteSuggestion('');
            setWasAutoCompleted(false);
            if (isMobile && onClose) {
                onClose();
            }
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Tab' && autocompleteSuggestion) {
            event.preventDefault();
            applyAutocomplete();
        } else if (event.key === 'Enter') {
            if (!wasAutoCompleted && autocompleteSuggestion) {
                event.preventDefault();
                applyAutocomplete();
            } else {
                performSearch();
            }
        } else if (event.key === 'Escape' && isMobile) {
            onClose();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const shouldShowSuggestions = showSuggestions && 
        (searchTerm.trim() ? suggestions.length > 0 : searchHistory.length > 0);

        return (
            <div 
                className={`flex items-center relative search-container ${isMobile ? 'w-full' : 'flex-1'}`}
                ref={inputRef}
                style={{ position: 'relative' }} // Ensure relative positioning
            >
                {isMobile && (
                    <button 
                        onClick={onClose}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-10"
                    >
                        ←
                    </button>
                )}
                
                <div className={`absolute ${isMobile ? 'left-10' : 'left-4'} top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-5 h-5`}>
                    <img
                        src={search}
                        alt="Пошук"
                        className="w-5 h-5 opacity-50 cursor-pointer"
                        onClick={() => performSearch()}
                    />
                </div>
                
                <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center pointer-events-none">
                        <div className={`absolute ${isMobile ? 'left-16' : 'left-12'} font-normal`}>
                            <span className="text-gray-900">{searchTerm}</span>
                            {autocompleteSuggestion && (
                                <span className="text-gray-300">
                                    {autocompleteSuggestion.slice(searchTerm.length)}
                                </span>
                            )}
                        </div>
                    </div>
                    
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="ПОШУК"
                        className={`w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-gray-300 placeholder:text-gray-500 ${
                            isMobile ? 'pl-16' : 'pl-12'
                        } bg-transparent text-transparent caret-gray-900`}
                        autoFocus={isMobile}
                    />
                </div>
                
                {shouldShowSuggestions && (
                    <div className="absolute left-0 right-0 bg-white z-[9999] max-h-60 overflow-y-auto top-[calc(100%+4px)] border rounded-lg shadow-lg">
                        {searchTerm.trim() ? 
                            suggestions.map((suggestion, index) => (
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
                                        <span className="text-gray-900 font-normal">{suggestion}</span>
                                    </div>
                                </div>
                            ))
                            :
                            searchHistory.map((historyItem, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSuggestionClick(historyItem)}
                                >
                                    <div className="flex items-center">
                                        <img 
                                            src={search} 
                                            alt="Пошук" 
                                            className="w-4 h-4 mr-2 opacity-50"
                                        />
                                        <span className="text-gray-900 font-normal">{historyItem}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        );
    };
    
    export default SearchBar;