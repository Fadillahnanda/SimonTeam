<template>
  <div class="sm-dashboard">
    <aside class="sm-sidebar">
      <div class="sm-logo">
        <h1>SIMON<span>PKL</span></h1>
      </div>
      <nav class="sm-menu">
        <router-link to="/guru">
          <div class="sm-menu-item active">
            <i class="fa-solid fa-table-columns"></i>
            <span>Dashboard</span>
          </div>
        </router-link>
        <router-link to="/siswa">
          <div class="sm-menu-item">
            <i class="fa-solid fa-users"></i>
            <span>Siswa Bimbingan</span>
          </div>
        </router-link>

        <router-link to="/laporan">
          <div class="sm-menu-item">
            <i class="fa-solid fa-chalkboard-user"></i>
            <span>Laporan</span>
          </div>
        </router-link>
      </nav>

      <div class="sm-logout">
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
      </div>
    </aside>

    <div class="sm-content-wrapper">
      <header class="sm-topbar">
        <h2>Dashboard Guru</h2>

        <div class="sm-user-profile">
          <i class="fa-regular fa-bell"></i>
          <span class="user-name">Admin</span>
          <div class="sm-avatar"></div>
        </div>
      </header>

      <section class="sm-stats-grid">
        <div class="sm-stat-card">
          <div class="sm-stat-info">
            <p>Total Siswa</p>
            <h3>120</h3>
          </div>
          <div class="sm-icon blue"><i class="fa-solid fa-users"></i></div>
        </div>

        <div class="sm-stat-card">
          <div class="sm-stat-info">
            <p>Industri</p>
            <h3>25</h3>
          </div>
          <div class="sm-icon grey"><i class="fa-solid fa-building"></i></div>
        </div>

        <div class="sm-stat-card">
          <div class="sm-stat-info">
            <p>Jurnal Pending</p>
            <h3 class="warning-text">18</h3>
          </div>
          <div class="sm-icon orange"><i class="fa-solid fa-clock-rotate-left"></i></div>
        </div>
      </section>

      <section class="sm-activity-panel">
        <h3>Aktivitas Terbaru</h3>
        <div class="sm-activity-list">
          <div class="sm-activity-item">
            <i class="fa-solid fa-circle-check text-success"></i>
            <span>Siswa A sudah absen</span>
          </div>
          <div class="sm-activity-item">
            <i class="fa-solid fa-clock text-pending"></i>
            <span>Jurnal menunggu verifikasi</span>
          </div>
          <div class="sm-activity-item">
            <i class="fa-solid fa-circle-xmark text-danger"></i>
            <span>Siswa B belum absen</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* 1. Reset paksa kontainer dashboard */
.sm-dashboard {
  display: flex;
  min-height: 100vh;
  width: 100vw; /* Pastikan selebar layar */
  background-color: #f8fafc;
  position: absolute; /* Menghindari padding dari parent */
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}

/* 2. Sidebar tepat di posisi nol */
.sm-sidebar {
  width: 260px;
  background: #09add2;
  color: white;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0; /* Menempel ke kiri layar */
  bottom: 0;
  z-index: 1000;
}

.sm-logo h1 {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}
.sm-logo span {
  font-weight: 300;
  opacity: 0.8;
}

.sm-menu-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 15px;
  margin-bottom: -10px;
  border-radius: 12px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.3s;
}

.sm-menu-item.active,
.sm-menu-item:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.sm-logout {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  cursor: pointer;
}

/* 3. Ruang konten diatur agar tidak tertutup sidebar */
.sm-content-wrapper {
  flex: 1;
  margin-left: 260px;
  padding: 2.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: calc(100% - 260px);
}

.sm-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sm-topbar h2 {
  font-size: 1.8rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0;
}

.sm-user-profile {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #64748b;
}

.sm-avatar {
  width: 42px;
  height: 42px;
  background: #60a5fa;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Stats */
.sm-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.sm-stat-card {
  background: white;
  padding: 1.75rem;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.sm-stat-info p {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 5px;
}
.sm-stat-info h3 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
}
.warning {
  color: #f59e0b;
}

.sm-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}
.blue {
  background: #eff6ff;
  color: #2563eb;
}
.grey {
  background: #f1f5f9;
  color: #475569;
}
.orange {
  background: #fffbeb;
  color: #f59e0b;
}

/* Panel Aktivitas */
.sm-activity-panel {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.sm-activity-panel h3 {
  margin-bottom: 1.5rem;
}

.sm-activity-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 0;
  border-bottom: 1px solid #f1f5f9;
}

.sm-activity-item:last-child {
  border-bottom: none;
}
.text-success {
  color: #10b981;
}
.text-pending {
  color: #64748b;
}
.text-danger {
  color: #ef4444;
}
</style>
