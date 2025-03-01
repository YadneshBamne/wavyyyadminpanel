import React from 'react';
import { Bell, Calendar, DollarSign, MessageSquare, User } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      type: 'appointment',
      title: 'New Appointment',
      message: 'Sarah Johnson booked a haircut for tomorrow at 2:00 PM',
      time: '5 minutes ago',
      icon: Calendar,
      color: 'bg-blue-500',
    },
    {
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of $50.00 received from Michael Brown',
      time: '1 hour ago',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      type: 'message',
      title: 'New Message',
      message: 'Emily Davis sent you a message about her appointment',
      time: '2 hours ago',
      icon: MessageSquare,
      color: 'bg-purple-500',
    },
    {
      type: 'user',
      title: 'New User Registration',
      message: 'James Wilson created a new account',
      time: '3 hours ago',
      icon: User,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          Mark All as Read
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`p-3 rounded-full text-white ${notification.color}`}>
                <notification.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">{notification.title}</h2>
                <p className="text-gray-600 text-sm">{notification.message}</p>
                <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
