import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { menuItems } from '../../data/menuData';
import SearchBar from '../SearchBar';
import logo from '../../assets/img/logo.png';
import profile from '../../assets/img/profile.jpg';
import busket from '../../assets/img/busket.jpg';
import heart from '../../assets/img/heart.jpg';
import categories from '../../assets/img/categories.jpg';
import search from '../../assets/img/search.png';

const Header = () => {
   const navigate = useNavigate();
   const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

   return (
       <header className="w-full bg-white z-50 shadow-md">
           {/* Мобільний пошук */}
           {isMobileSearchOpen && (
               <div className="md:hidden w-full px-4 py-3 bg-white border-b">
                   <SearchBar 
                       onClose={() => setIsMobileSearchOpen(false)}
                       isMobile={true}
                   />
               </div>
           )}

           <div className="flex items-center justify-between w-full mx-auto pt-6 px-8">
               <img src={logo} alt="Логотип" className="flex-none w-20 h-15 cursor-pointer mr-12" />

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
                   <img src={profile} alt="Профіль" className="w-6 h-6 cursor-pointer mr-8" />
                   <img src={heart} alt="Улюблене" className="w-6 h-6 cursor-pointer" />
               </div>

               <div className="flex md:hidden flex-none items-center">
                   <img
                       src={search}
                       alt="Пошук"
                       className="w-7 h-7 cursor-pointer mr-8 brightness-0"
                       onClick={() => setIsMobileSearchOpen(true)}
                   />
                   <Link to="/busket">
                       <img
                           src={busket}
                           alt="Кошик"
                           className="w-7 h-7 cursor-pointer mr-8"
                       />
                   </Link>
                   <img
                       src={categories}
                       alt="Категорії"
                       className="w-5 h-5 cursor-pointer -scale-x-100"
                   />
               </div>
           </div>

           <div className="hidden md:flex items-center w-full mx-auto mt-3 px-8 pb-3">
               <img src={categories} alt="Категорії" className="w-5 h-4 cursor-pointer mr-4" />
               <SearchBar />
               <Link to="/busket">
                   <img
                       src={busket}
                       alt="Кошик"
                       className="w-6 h-6 cursor-pointer ml-6"
                   />
               </Link>
           </div>

           <div className="h-3 bg-white"></div>
       </header>
   );
};

export default Header;