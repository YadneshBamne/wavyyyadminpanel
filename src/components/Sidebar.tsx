import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Scissors,
  Calendar,
  Settings,
  MessageSquare,
  Package,
  CreditCard,
  Bell,
  LogOut,
  SquareCode,
  LocateIcon,
  Building,
  CoinsIcon,
  NotebookIcon
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Scissors, label: 'Services', path: '/services' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: SquareCode, label: 'Categories', path: '/categories' },
    { icon: LocateIcon, label: 'Cities', path: '/settings' },
    { icon: Building, label: 'Salons', path: '/settings' },
    { icon: NotebookIcon, label: 'Blogs', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-purple-600">Wavyy Admin Panel</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg mb-2 transition-colors ${
                  isActive
                    ? 'bg-purple-100 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <button className="flex items-center p-3 rounded-lg text-red-600 hover:bg-red-50 w-full">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
