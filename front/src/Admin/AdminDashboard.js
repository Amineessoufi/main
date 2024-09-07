import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import '../styles/admin.css'; // Custom styles for the admin page

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminHeader />
      <div className="admin-content">
        <AdminSidebar />
        <div className="admin-main">
          <h1>Welcome to Admin Dashboard</h1>
          <p>Manage your courses, users, and content here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
