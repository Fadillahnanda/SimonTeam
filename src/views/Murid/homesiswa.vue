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
          <div class="sm-menu-item active">
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
          <div class="sm-menu-item">
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
          <h2>Halo, Nama Siswa 👋</h2>
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

      <section class="sm-stats-grid">
        <div class="sm-stat-card card-glass">
          <div class="card-content">
            <div class="sm-icon-outline icon-green"><i class="fa-solid fa-calendar-day"></i></div>
            <div class="sm-stat-info">
              <p>Absensi Hari Ini</p>
              <h4 class="status-badge success">Hadir</h4>
            </div>
          </div>
        </div>

        <div class="sm-stat-card card-glass">
          <div class="card-content">
            <div class="sm-icon-outline icon-orange">
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div class="sm-stat-info">
              <p>Status Jurnal</p>
              <h4 class="status-badge warning">Pending</h4>
            </div>
          </div>
        </div>

        <div class="sm-stat-card card-glass">
          <div class="card-content">
            <div class="sm-icon-outline icon-indigo"><i class="fa-solid fa-list-check"></i></div>
            <div class="sm-stat-info">
              <p>Total Kegiatan</p>
              <h3 class="stat-number">45</h3>
            </div>
          </div>
        </div>
      </section>

      <div class="main-grid">
        <section class="sm-quick-action card-glass">
          <h3>Aksi Cepat</h3>
          <div class="action-buttons">
            <button class="btn-action btn-primary">
              <i class="fa-solid fa-camera"></i> Absen Sekarang
            </button>
            <button class="btn-action btn-secondary">
              <i class="fa-solid fa-pen-to-square"></i> Isi Jurnal
            </button>
          </div>
        </section>

        <section class="sm-history-panel card-glass">
          <div class="panel-header">
            <h3>Riwayat Kegiatan</h3>
            <a href="#" class="view-more">Lihat Semua</a>
          </div>
          <div class="history-list">
            <div class="history-item">
              <div class="item-icon check"><i class="fa-solid fa-check"></i></div>
              <div class="item-text">
                <p>Instalasi jaringan kantor</p>
                <span>Selesai • 09:00 WIB</span>
              </div>
            </div>
            <div class="history-item">
              <div class="item-icon check"><i class="fa-solid fa-check"></i></div>
              <div class="item-text">
                <p>Maintenance komputer</p>
                <span>Selesai • 11:30 WIB</span>
              </div>
            </div>
            <div class="history-item">
              <div class="item-icon wait"><i class="fa-solid fa-hourglass-half"></i></div>
              <div class="item-text">
                <p>Konfigurasi router</p>
                <span class="text-pending">Menunggu Verifikasi</span>
              </div>
            </div>
          </div>
        </section>
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

/* CONTENT AREA */
.sm-content-wrapper {
  flex: 1;
  margin-left: 260px;
  padding: 2.5rem 3.5rem;
  background-image: radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.03) 0px, transparent 50%);
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
  color: #1e293b;
}

.header-left p {
  color: #64748b;
  margin-top: 4px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.notif-bell {
  position: relative;
  font-size: 1.3rem;
  color: #64748b;
  cursor: pointer;
  background: white;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #e2e8f0;
  transition: 0.3s;
}

.notif-bell:hover {
  border-color: #6366f1;
  color: #6366f1;
}

.pulse-dot {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 8px;
  height: 8px;
  background: #f43f5e;
  border-radius: 50%;
  border: 2px solid white;
}

.avatar-wrapper img {
  width: 48px;
  height: 48px;
  border-radius: 15px;
  border: 2px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* CARDS */
.card-glass {
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.02);
  border-radius: 20px;
}

.sm-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.sm-stat-card {
  padding: 1.8rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sm-stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.05);
}

.sm-icon-outline {
  width: 55px;
  height: 55px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.icon-green {
  background: #f0fdf4;
  color: #10b981;
}
.icon-orange {
  background: #fff7ed;
  color: #f97316;
}
.icon-indigo {
  background: #eef2ff;
  color: #6366f1;
}

.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 8px;
}
.status-badge.success {
  background: #dcfce7;
  color: #15803d;
}
.status-badge.warning {
  background: #fef3c7;
  color: #b45309;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  margin: 5px 0 0 0;
  color: #1e293b;
}

/* BUTTONS */
.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn-action {
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: none;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  box-shadow: 0 6px 15px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
  filter: brightness(1.1);
}

.btn-secondary {
  background: #ffffff;
  color: #1e293b;
  border: 1px solid #e2e8f0;
}

.btn-secondary:hover {
  background: #f8fafc;
  border-color: #6366f1;
  color: #6366f1;
}

/* PANELS */
.main-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 1.5rem;
}

.sm-quick-action,
.sm-history-panel {
  padding: 2rem;
}

.panel-header h3,
.sm-quick-action h3 {
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
}

.view-more {
  font-size: 0.85rem;
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
}

.history-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 14px;
  border-radius: 16px;
  transition: 0.2s;
  margin-bottom: 5px;
}

.history-item:hover {
  background: #f8fafc;
}

.item-icon {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-icon.check {
  background: #f0fdf4;
  color: #10b981;
}
.item-icon.wait {
  background: #fff7ed;
  color: #f97316;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .sm-sidebar {
    width: 85px;
    padding: 2rem 0.5rem;
    align-items: center;
  }
  .sm-logo h1,
  .sm-menu-item span,
  .menu-label,
  .logout-inner span {
    display: none;
  }
  .sm-content-wrapper {
    margin-left: 85px;
    padding: 2rem;
  }
  .main-grid {
    grid-template-columns: 1fr;
  }
}
</style>
