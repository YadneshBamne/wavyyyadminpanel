import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Services from './components/Services';
import Appointments from './components/Appointments';
import Messages from './components/Messages';
import Products from './components/Products';
import Payments from './components/Payments';
import Notifications from './components/Notifications';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="mt-16 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/services" element={<Services />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/products" element={<Products />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;