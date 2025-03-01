import React from 'react';
import { DollarSign, Download, Filter } from 'lucide-react';

const Payments = () => {
  const transactions = [
    {
      id: '#TRX001',
      customer: 'Sarah Johnson',
      service: 'Haircut & Styling',
      amount: '$50.00',
      date: '2024-03-15',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: '#TRX002',
      customer: 'Michael Brown',
      service: 'Beard Trim',
      amount: '$30.00',
      date: '2024-03-14',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    {
      id: '#TRX003',
      customer: 'Emily Davis',
      service: 'Hair Coloring',
      amount: '$120.00',
      date: '2024-03-14',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payments</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Download className="w-5 h-5 mr-2" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1">$12,845</h3>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Pending Payments</p>
              <h3 className="text-2xl font-bold mt-1">$2,150</h3>
            </div>
            <div className="bg-yellow-500 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Transactions</p>
              <h3 className="text-2xl font-bold mt-1">145</h3>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">Filter</span>
          </div>
          <div className="flex space-x-2">
            <select className="border rounded-lg px-3 py-2">
              <option>All Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <select className="border rounded-lg px-3 py-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3">Transaction ID</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Service</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-4">{transaction.id}</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      src={transaction.image}
                      alt={transaction.customer}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    {transaction.customer}
                  </div>
                </td>
                <td className="py-4">{transaction.service}</td>
                <td className="py-4">{transaction.amount}</td>
                <td className="py-4">{transaction.date}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;