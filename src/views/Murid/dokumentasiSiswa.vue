<template>
  <div class="sm-dashboard">
    <aside class="sm-sidebar">
      <div class="sm-logo">
        <div class="logo-icon"><i class="fa-solid fa-graduation-cap"></i></div>
        <h1>SIMON PKL</h1>
      </div>

      <nav class="sm-menu">
        <p class="menu-label">Menu Utama</p>
        <router-link to="/homesiswa" class="nav-link">
          <div class="sm-menu-item">
            <i class="fa-solid fa-table-columns"></i>
            <span>Dashboard</span>
          </div>
        </router-link>
        <router-link to="/absensiswa" class="nav-link">
          <div class="sm-menu-item">
            <i class="fa-solid fa-calendar-check"></i>
            <span>Absensi</span>
          </div>
        </router-link>
        <router-link to="/jurnalsiswa" class="nav-link">
          <div class="sm-menu-item">
            <i class="fa-solid fa-book-open"></i>
            <span>Jurnal</span>
          </div>
        </router-link>
        <router-link to="/doksiswa" class="nav-link">
          <div class="sm-menu-item active">
            <i class="fa-solid fa-box-archive"></i>
            <span>Dokumentasi</span>
          </div>
        </router-link>
      </nav>

      <div class="sm-logout">
        <div class="logout-inner">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Keluar</span>
        </div>
      </div>
    </aside>

    <div class="sm-content-wrapper">
      <header class="sm-topbar">
        <div class="header-left">
          <h2>Dokumentasi Siswa</h2>
          <p>Semangat aktivitas hari ini, ya!</p>
        </div>

        <div class="header-right">
          <div class="notif-bell">
            <i class="fa-regular fa-bell"></i>
            <span class="pulse-dot"></span>
          </div>
          <div class="sm-user-profile">
            <div class="avatar-wrapper">
              <img
                src="https://ui-avatars.com/api/?name=Siswa&background=6366f1&color=fff"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </header>

      <div class="sm-jurnal-content">
        <div class="sm-form-card">
          <div class="form-header">
            <h3>Riwayat Dokumentasi</h3>
          </div>
          <div class="table-responsive">
            <table class="sm-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Foto</th>
                  <th>Lokasi</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20 Apr 2026</td>
                  <td><a href="#" class="view-link">Lihat Foto</a></td>
                  <td>-6.234, 106.845</td>
                  <td><span class="status-text success">Terkirim</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --bg-app: #f1f5f9;
  --sidebar-bg: #0f172a;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --glass-white: rgba(255, 255, 255, 0.9);
  --accent-rose: #f43f5e;
}

.sm-dashboard {
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #f1f5f9; /* Fallback */
  color: #1e293b;
  position: absolute;
  top: 0;
  left: 0;
}

/* SIDEBAR */
.sm-sidebar {
  width: 260px;
  background: #0f172a;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.sm-logo {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 3.5rem;
}

.logo-icon {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
}

.sm-logo h1 {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  color: #ffffff;
}

.menu-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #475569;
  font-weight: 700;
  margin-bottom: 1.2rem;
  padding-left: 0.8rem;
  letter-spacing: 1px;
}

.nav-link {
  text-decoration: none;
}

.sm-menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 14px;
  color: #94a3b8;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  font-weight: 500;
}

.sm-menu-item:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.05);
}

.sm-menu-item.active {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: #ffffff;
  box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
}

.sm-logout {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1.5rem;
}

.logout-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #fb7185;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
}

.logout-inner:hover {
  background: rgba(244, 63, 94, 0.1);
  border-radius: 12px;
}

/* AREA KONTEN */
.sm-content-wrapper {
  flex: 1;
  margin-left: 260px; /* Jarak pas seluas sidebar */
  padding: 2.5rem 3rem;
  min-height: 100vh;
  box-sizing: border-box;
}

.sm-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.header-left h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
}
.header-left p {
  color: #64748b;
  margin-top: 5px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notif-bell {
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  position: relative;
}

.pulse-dot {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 8px;
  height: 8px;
  background: #ef4444;
  border-radius: 50%;
  border: 2px solid white;
}

.avatar-wrapper img {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

/* CARD & TABLE */
.sm-form-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #edf2f7;
}

.form-header h3 {
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.sm-table {
  width: 100%;
  border-collapse: collapse;
}

.sm-table th {
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #f1f5f9;
  color: #475569;
}

.sm-table td {
  padding: 16px 12px;
  border-bottom: 1px solid #f1f5f9;
}

.view-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}
.status-text.success {
  color: #16a34a;
  font-weight: 700;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .sm-sidebar {
    width: 80px;
    padding: 2rem 0.5rem;
  }
  .sm-sidebar h1,
  .sm-sidebar span,
  .menu-label,
  .logout-inner span {
    display: none;
  }
  .sm-content-wrapper {
    margin-left: 80px;
    padding: 2rem;
  }
}
</style>
