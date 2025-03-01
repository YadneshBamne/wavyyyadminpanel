import React from 'react';
import { Plus, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'Haircut & Styling',
      duration: '60 min',
      price: '$50',
      category: 'Hair',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300',
      status: 'Available',
    },
    {
      name: 'Facial Treatment',
      duration: '90 min',
      price: '$80',
      category: 'Skin',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300',
      status: 'Available',
    },
    {
      name: 'Manicure & Pedicure',
      duration: '120 min',
      price: '$65',
      category: 'Nails',
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=300',
      status: 'Available',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Services</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>{service.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {service.category}
                </span>
                <button className="text-purple-600 hover:text-purple-800">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;