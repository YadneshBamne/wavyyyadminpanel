import React from 'react';
import { Calendar, Clock, User, MapPin } from 'lucide-react';

const Appointments = () => {
  const appointments = [
    {
      client: 'Jessica Lee',
      service: 'Hair Coloring',
      date: '2024-03-16',
      time: '10:00 AM',
      stylist: 'Maria Garcia',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      client: 'David Chen',
      service: 'Beard Trim',
      date: '2024-03-16',
      time: '11:30 AM',
      stylist: 'John Smith',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    {
      client: 'Amanda White',
      service: 'Manicure',
      date: '2024-03-16',
      time: '2:00 PM',
      stylist: 'Sarah Johnson',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <div className="flex space-x-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            New Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src={appointment.image}
                      alt={appointment.client}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium">{appointment.client}</h3>
                      <p className="text-sm text-gray-500">{appointment.service}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      appointment.status === 'Confirmed'
                        ? 'bg-green-100 text-green-800'
                        : appointment.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {appointment.time}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {appointment.stylist}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Room 1
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Calendar</h2>
          <div className="text-center text-gray-500">
            Calendar component will be implemented here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;