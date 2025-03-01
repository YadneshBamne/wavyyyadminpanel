import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white shadow-sm fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center bg-gray-100 rounded-lg w-96">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none px-3 py-2 w-full"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;