import React from 'react';
import { User, Building, Bell, Lock, Palette, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="space-y-2">
              <button className="w-full flex items-center p-3 rounded-lg bg-purple-50 text-purple-600">
                <User className="w-5 h-5 mr-3" />
                <span>Profile Settings</span>
              </button>
              <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Building className="w-5 h-5 mr-3" />
                <span>Business Information</span>
              </button>
              <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Bell className="w-5 h-5 mr-3" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Lock className="w-5 h-5 mr-3" />
                <span>Security</span>
              </button>
              <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Palette className="w-5 h-5 mr-3" />
                <span>Appearance</span>
              </button>
              <button className="w-full flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-50">
                <Globe className="w-5 h-5 mr-3" />
                <span>Language & Region</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mr-6">
                  <User className="w-10 h-10 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Profile Picture</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg mr-2">
                    Upload New
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    Remove
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg h-32"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-2">
                <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;