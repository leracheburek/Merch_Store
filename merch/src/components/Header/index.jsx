import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import profile from '../../assets/img/profile.jpg';
import busket from '../../assets/img/busket.jpg';
import heart from '../../assets/img/heart.jpg';
import categories from '../../assets/img/categories.jpg';
import search from '../../assets/img/search.png';

const Header = () => {
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuItemsOpen, setIsMenuItemsOpen] = useState(false);

    const menuItems = [
        { id: 1, title: 'ШКАРПЕТКИ', type: 'теплі', path: '/socks' },
        { id: 2, title: 'ФУТБОЛКИ', type: 'жіночі', path: '/tshirts' },
        { id: 3, title: 'ХУДІ', type: 'стильні', path: '/hoodies' },
        { id: 4, title: 'КЕПКИ', type: 'класні', path: '/caps' },
    ];

    return (
        <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="flex items-center justify-between w-full mx-auto pt-6 px-8">
                <img src={logo} alt="logo" className="flex-none w-20 h-15 cursor-pointer mr-12" />

                <nav className="flex-auto hidden md:flex justify-between mr-16 font-medium">
                    {menuItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex flex-col items-start cursor-pointer" 
                            onClick={() => navigate(item.path)}
                        >
                            <span className="text-[#FF8A00] text-xs">{item.type}</span>
                            <span className="text-black">{item.title}</span>
                        </div>
                    ))}
                </nav>

                <div className="hidden md:flex flex-none items-center">
                    <img src={profile} alt="Profile" className="w-6 h-6 cursor-pointer mr-8" />
                    <img src={heart} alt="Favorites" className="w-6 h-6 cursor-pointer" />
                </div>

                <div className="flex md:hidden flex-none items-center">
                    <img
                        src={search}
                        alt="Search"
                        className="w-7 h-7 cursor-pointer mr-8 brightness-0"
                    />
                    <img
                        src={busket}
                        alt="Cart"
                        className="w-7 h-7 cursor-pointer mr-8"
                    />
                    <img
                        src={categories}
                        alt="Categories"
                        className="w-5 h-5 cursor-pointer -scale-x-100"
                    />
                </div>
            </div>

            <div className="hidden md:flex items-center w-full mx-auto mt-3 px-8 pb-3">
                <img src={categories} alt="Categories" className="w-5 h-4 cursor-pointer mr-4" />

                <div className="flex-1 flex items-center relative">
                    <img
                        src={search}
                        alt="Search"
                        className="w-5 h-5 absolute left-4 opacity-50"
                    />
                    <input
                        type="text"
                        placeholder="ПОШУК"
                        className="w-full px-4 py-2 pl-12 rounded-full border focus:outline-none placeholder:text-gray-500"
                    />
                </div>

                <img
                    src={busket}
                    alt="Cart"
                    className="w-6 h-6 cursor-pointer ml-6"
                />
            </div>

            <div className="h-3 bg-white"></div>
        </header>
    );
};

export default Header;