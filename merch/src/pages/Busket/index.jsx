import React, { useState } from 'react';
import Header from '../../components/Header';
import FooterMerchStore from '../../components/FooterMerchStore';
import Tshirt1 from '../../assets/img/Rectangle 3.png';

const BusketItem = ({ product, onRemove }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex gap-8">
      <div className="flex flex-col">
        <div className="flex items-end gap-8">
          <div className="relative">
            <img 
              src={Tshirt1} 
              alt={product.name} 
              className="w-[400px] h-auto object-contain"
            />
            <button 
              onClick={() => onRemove(product.id)} 
              className="absolute -right-10 -top-2 text-4xl font-light text-gray-400 hover:text-gray-500"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-3 mb-[2px] -ml-3">
            <div>
              <span className="text-base font-medium">L</span>
            </div>
            <div className="w-[30px] h-[30px] bg-black cursor-pointer" />
            <div className="flex flex-col border-2 border-gray-400 w-[30px]">
              <button 
                onClick={handleIncrease}
                className="px-2 py-0.5 border-b border-gray-400 text-sm hover:bg-gray-100"
              >
                +
              </button>
              <span className="px-2 py-0.5 text-sm text-center">{quantity}</span>
              <button 
                onClick={handleDecrease}
                className="px-2 py-0.5 border-t border-gray-400 text-sm hover:bg-gray-100"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-500">Бавовна</div>
          <div className="flex gap-14 items-center">
            <div className="text-lg font-medium">{product.name}</div>
            <div className="font-medium">{product.price * quantity} ₴</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Busket = () => {
  const products = [
    {
      id: 1,
      category: 'Бавовна',
      name: 'Класична футболка',
      price: 500,
      image: '/api/placeholder/200/200'
    },
    {
      id: 2,
      category: 'Бавовна',
      name: 'Класична футболка',
      price: 500,
      image: '/api/placeholder/200/200'
    }
  ];

  const handleRemove = (id) => {
    console.log('Removing product:', id);
  };

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-16 py-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <a href="/" className="hover:text-gray-700">Головна сторінка</a>
            <span>/</span>
            <span className="font-bold">Корзина</span>
          </div>
          
          <div className="flex items-center mb-4">
            <h1 className="text-3xl font-medium">КОРЗИНА</h1>
            <button className="text-2xl text-gray-500 hover:text-black ml-16">ВИБРАНЕ</button>
          </div>

          <div className="border-b border-gray-400 mb-8"></div>

          <div className="flex gap-8">
            <div className="flex flex-row gap-4">
              {products.map(product => (
                <BusketItem 
                  key={product.id} 
                  product={product} 
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <div className="w-[500px]">
              <div className="border-2 border-gray-400 p-8">
                <h2 className="text-xl font-bold mt-4 mb-12">РАЗОМ</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Проміжний підсумок</span>
                    <span>{subtotal} ₴</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-gray-500 leading-tight">
                        За тарифами
                      </span>
                      <span className="text-sm text-gray-500 leading-tight">
                        перевізника
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-400">
                    <div className="flex justify-between mt-4">
                      <span className="font-medium">ДО ОПЛАТИ</span>
                      <span className="text-lg">{total} ₴</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-12">
                  <button className="bg-[#F19400] text-white py-3 px-12 rounded-full hover:bg-orange-400">
                    <span className="font-bold">ДО ОПЛАТИ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-16 border-b border-gray-400"></div>
      </div>
      <FooterMerchStore />
    </div>
  );
};

export default Busket;