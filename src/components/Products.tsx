import React from 'react';
import { Plus, Search } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Professional Shampoo',
      category: 'Hair Care',
      price: '$24.99',
      stock: 45,
      image: 'https://images.unsplash.com/photo-1585232351009-aa87416fca90?w=300',
    },
    {
      name: 'Hair Styling Cream',
      category: 'Hair Care',
      price: '$19.99',
      stock: 30,
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300',
    },
    {
      name: 'Face Moisturizer',
      category: 'Skin Care',
      price: '$29.99',
      stock: 25,
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=300',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add New Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center w-96">
            <div className="relative w-full">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-lg w-full"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="border rounded-lg px-3 py-2">
              <option>All Categories</option>
              <option>Hair Care</option>
              <option>Skin Care</option>
              <option>Nail Care</option>
            </select>
            <select className="border rounded-lg px-3 py-2">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Stock: Low to High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-600 font-medium">{product.price}</span>
                  <span className="text-gray-500 text-sm">{product.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{product.stock} in stock</span>
                  <button className="text-purple-600 hover:text-purple-800">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;