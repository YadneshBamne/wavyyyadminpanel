import React from 'react';
import { UserPlus, Filter } from 'lucide-react';

const Users = () => {
  const users = [
    {
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'Customer',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      lastVisit: '2024-03-15',
    },
    {
      name: 'James Rodriguez',
      email: 'james.r@example.com',
      role: 'Staff',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      lastVisit: '2024-03-14',
    },
    {
      name: 'Sophie Chen',
      email: 'sophie.c@example.com',
      role: 'Customer',
      status: 'Inactive',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      lastVisit: '2024-03-10',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
          <UserPlus className="w-5 h-5 mr-2" />
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">Filter</span>
          </div>
          <div className="flex space-x-2">
            <select className="border rounded-lg px-3 py-2">
              <option>All Roles</option>
              <option>Customer</option>
              <option>Staff</option>
            </select>
            <select className="border rounded-lg px-3 py-2">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3">User</th>
              <th className="pb-3">Role</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Last Visit</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">{user.role}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-4">{user.lastVisit}</td>
                <td className="py-4">
                  <button className="text-purple-600 hover:text-purple-800">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;