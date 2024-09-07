import React from 'react';

const AdminHeader = () => {
  return (
    <header className="admin-header topbar">
      <div className="topbar-section">
        <div className="topbar__item">
          <ion-icon name="home-outline"></ion-icon>
          <p>Admin Dashboard</p>
        </div>
      </div>
      <div className="topbar-section">
        <div className="topbar__item">
          <ion-icon name="person-circle-outline"></ion-icon>
          <p>Admin</p>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
