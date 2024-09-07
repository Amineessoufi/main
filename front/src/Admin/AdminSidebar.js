import React from 'react';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <ul>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#users">Users</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
