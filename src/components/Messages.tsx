import React from 'react';
import { Send } from 'lucide-react';

const Messages = () => {
  const conversations = [
    {
      user: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      lastMessage: 'Can I reschedule my appointment?',
      time: '10:30 AM',
      unread: true,
    },
    {
      user: 'Michael Brown',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      lastMessage: 'Thanks for the great service!',
      time: 'Yesterday',
      unread: false,
    },
    {
      user: 'Sophie Chen',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      lastMessage: 'What time do you open tomorrow?',
      time: 'Yesterday',
      unread: false,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="overflow-y-auto h-[calc(100vh-300px)]">
            {conversations.map((conversation, index) => (
              <div
                key={index}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  conversation.unread ? 'bg-purple-50' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={conversation.image}
                      alt={conversation.user}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium">{conversation.user}</h3>
                      <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{conversation.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <img
                src={conversations[0].image}
                alt={conversations[0].user}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-medium">{conversations[0].user}</h3>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-purple-600 text-white rounded-lg p-3 max-w-md">
                  Hello! How can I help you today?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                  Hi, I need to reschedule my appointment for tomorrow.
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <button className="bg-purple-600 text-white p-2 rounded-lg">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;