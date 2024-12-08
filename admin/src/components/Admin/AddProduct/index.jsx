import { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Новий товар:', product);
    // Тут можна додати логіку для відправки даних на сервер
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Додати новий товар</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Назва товару */}
        <div>
          <label className="block text-gray-700 font-medium">Назва товару</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Введіть назву товару"
          />
        </div>

        {/* Опис товару */}
        <div>
          <label className="block text-gray-700 font-medium">Опис товару</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Введіть опис товару"
          />
        </div>

        {/* Ціна товару */}
        <div>
          <label className="block text-gray-700 font-medium">Ціна (USD)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Введіть ціну товару"
          />
        </div>

        {/* Категорія товару */}
        <div>
          <label className="block text-gray-700 font-medium">Категорія</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Виберіть категорію</option>
            <option value="shirts">Футболки</option>
            <option value="pants">Штани</option>
            <option value="jackets">Куртки</option>
            <option value="accessories">Аксесуари</option>
          </select>
        </div>

        {/* Зображення товару */}
        <div>
          <label className="block text-gray-700 font-medium">Посилання на зображення</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Вставте URL зображення"
          />
        </div>

        {/* Кнопка додавання */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Додати товар
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
