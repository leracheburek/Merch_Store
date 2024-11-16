import React, { useState } from 'react';

import logo from '../../assets/img/logo.png';
import profile from '../../assets/img/profile.jpg';
import busket from '../../assets/img/busket.jpg';
import heart from '../../assets/img/heart.jpg';
import categories from '../../assets/img/categories.jpg';
import search from '../../assets/img/search.jpg';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuItemsOpen, setIsMenuItemsOpen] = useState(false);

    const menuItems = [
        { id: 1, title: 'НОСКИ', type: 'теплі' },
        { id: 2, title: 'ФУТБОЛКИ', type: 'жіночі' },
        { id: 3, title: 'ХУДІ', type: 'стильні' },
        { id: 4, title: 'КЕПКИ', type: 'класні' },
    ];

    return (
        <header className="w-full bg-white">
            <div className="flex items-center justify-between max-w-7xl mx-auto pt-6 px-8">

                <img src={logo} alt="logo" className="flex-none w-15 h-10 cursor-pointer mr-12" />

                <nav className="flex-auto flex justify-between mr-16 min-[900px]:visible invisible overflow-hidden font-medium">
                    {menuItems.map((item) => (
                        <div key={item.id} className="flex flex-col items-start">
                            <span className="text-[#FF8A00] text-xs">{item.type}</span>
                            <span className="text-black">{item.title}</span>
                        </div>
                    ))}
                </nav>

                <div className="flex-none flex items-center">
                    <img src={profile} alt="Profile" className="w-5 h-5 cursor-pointer mr-8" />
                    <img src={heart} alt="Favorites" className="w-5 h-5 cursor-pointer" />
                </div>
            </div>

            <div className="flex items-center max-w-7xl mx-auto mt-3 px-8 pb-3">
                <img src={categories} alt="Categories" className="w-5 h-4 cursor-pointer mr-4" />

                <div className="flex-1 flex items-center relative min-[900px]:visible invisible">
                    <img src={search} alt="Search" className="w-5 h-5 absolute left-4" />
                    <input
                        type="text"
                        placeholder="ПОШУК"
                        className="w-full px-4 py-2 pl-12 rounded-full border focus:outline-none placeholder:text-gray-500"
                    />
                </div>

                <img src={busket} alt="Cart" className="w-6 h-6 cursor-pointer ml-6" />
            </div>
        </header>
    );
};

export default Header;