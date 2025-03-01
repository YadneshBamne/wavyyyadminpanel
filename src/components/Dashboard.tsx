import { Users, Calendar, DollarSign, BriefcaseIcon } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Customers',
      value: '2,543',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Appointments Today',
      value: '48',
      icon: Calendar,
      color: 'bg-green-500',
    },
    {
      title: 'Total Revenue',
      value: '₹12,845',
      icon: DollarSign,
      color: 'bg-purple-500',
    },
    {
      title: 'Total Salons',
      value: '+20',
      icon: BriefcaseIcon,
      color: 'bg-orange-500',
    },
  ];

  const recentAppointments = [
    {
      customer: 'Sarah Johnson',
      service: 'Haircut & Styling',
      time: '10:00 AM',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      customer: 'Michael Brown',
      service: 'Beard Trim',
      time: '11:30 AM',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    {
      customer: 'Emily Davis',
      service: 'Hair Coloring',
      time: '2:00 PM',
      status: 'Scheduled',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">Customer</th>
                <th className="pb-3">Service</th>
                <th className="pb-3">Time</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((appointment, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        src={appointment.image}
                        alt={appointment.customer}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      {appointment.customer}
                    </div>
                  </td>
                  <td className="py-4">{appointment.service}</td>
                  <td className="py-4">{appointment.time}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        appointment.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : appointment.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;