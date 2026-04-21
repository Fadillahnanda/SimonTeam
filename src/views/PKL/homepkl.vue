<template>
  <div class="sm-dashboard">
    <aside class="sm-sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">
          <i class="fa-solid fa-chalkboard-user"></i>
        </div>
        <h1 class="brand-name">SIMON</h1>
      </div>

      <nav class="sm-nav">
        <div class="nav-group">
          <p class="nav-label">Monitoring</p>
          <router-link to="/homepkl" class="nav-item active">
            <i class="fa-solid fa-chart-pie"></i>
            <span>Dashboard</span>
          </router-link>
          <router-link to="/dataabsensipkl" class="nav-item">
            <i class="fa-solid fa-user-check"></i>
            <span>Absensi Siswa</span>
          </router-link>
          <router-link to="/jurnalpkl" class="nav-item">
            <i class="fa-solid fa-book-bookmark"></i>
            <span>Verifikasi Jurnal</span>
          </router-link>
        </div>
        <!-- 
        <div class="nav-group">
          <p class="nav-label">Administrasi</p>
          <router-link to="/administrasipkl" class="nav-item">
            <i class="fa-solid fa-users-gear"></i>
            <span>Data Bimbingan</span>
          </router-link>
        </div> -->
      </nav>

      <div class="sidebar-footer">
        <button class="logout-btn">
          <i class="fa-solid fa-power-off"></i>
          <span>Keluar</span>
        </button>
      </div>
    </aside>

    <div class="sm-main-container">
      <header class="sm-navbar">
        <div class="nb-left">
          <div class="nb-title">
            <h2>Monitoring PKL</h2>
            <p>Senin, 20 April 2026</p>
          </div>
        </div>

        <div class="nb-right">
          <div class="notif-wrapper">
            <i class="fa-regular fa-bell"></i>
            <span class="pulse-badge"></span>
          </div>
          <div class="divider"></div>
          <div class="user-profile">
            <div class="user-info">
              <span class="user-name">Bpk. Supriadi</span>
              <span class="user-status">Pembimbing</span>
            </div>
            <img
              src="https://ui-avatars.com/api/?name=Supriadi&background=10b981&color=fff"
              class="user-img"
              alt="avatar"
            />
          </div>
        </div>
      </header>

      <main class="sm-content-area">
        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon bg-soft-blue"><i class="fa-solid fa-users"></i></div>
            <div class="stat-data">
              <span class="stat-label">Siswa Bimbingan</span>
              <h3 class="stat-value">30</h3>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon bg-soft-green"><i class="fa-solid fa-user-clock"></i></div>
            <div class="stat-data">
              <span class="stat-label">Hadir Hari Ini</span>
              <h3 class="stat-value color-green">25</h3>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon bg-soft-orange"><i class="fa-solid fa-file-signature"></i></div>
            <div class="stat-data">
              <span class="stat-label">Jurnal Pending</span>
              <h3 class="stat-value color-orange">12</h3>
            </div>
          </div>
        </div>

        <section class="content-panel monitoring-section">
          <div class="panel-header">
            <div class="header-text">
              <h3>Status Monitoring Siswa</h3>
              <p>Daftar aktivitas kehadiran dan jurnal terbaru</p>
            </div>
            <button class="btn-export">
              <i class="fa-solid fa-file-export"></i> Ekspor Laporan
            </button>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nama Siswa</th>
                  <th>Kehadiran</th>
                  <th>Jurnal</th>
                  <th>Jam Input</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold">Ahmad Faisal</td>
                  <td><span class="badge b-green">Hadir</span></td>
                  <td><span class="badge b-green">Selesai</span></td>
                  <td>08:15 WIB</td>
                  <td><button class="btn-action">Detail</button></td>
                </tr>
                <tr>
                  <td class="font-bold">Siti Aminah</td>
                  <td><span class="badge b-green">Hadir</span></td>
                  <td><span class="badge b-orange">Pending</span></td>
                  <td>09:05 WIB</td>
                  <td><button class="btn-action">Verifikasi</button></td>
                </tr>
                <tr>
                  <td class="font-bold">Budi Santoso</td>
                  <td><span class="badge b-red">Alpa</span></td>
                  <td><span class="badge b-red">Kosong</span></td>
                  <td>-</td>
                  <td><button class="btn-action">Hubungi</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- RESET & LAYOUT --- */
.sm-dashboard {
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f8fafc;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

/* --- SIDEBAR - Rapat & Solid --- */
.sm-sidebar {
  width: 260px;
  background: #0f172a;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 30px 15px;
  margin: 0; /* Memastikan tidak ada gap */
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  padding: 0 15px;
}

.brand-icon {
  background: #10b981;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.brand-name {
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
}

.nav-label {
  font-size: 0.7rem;
  color: #475569;
  font-weight: 800;
  text-transform: uppercase;
  margin: 25px 0 10px 15px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}
.nav-item.active {
  background: #10b981;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);
}

.sidebar-footer {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 20px;
}
.logout-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f43f5e;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 15px;
}

/* --- MAIN CONTENT --- */
.sm-main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sm-navbar {
  height: 80px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  flex-shrink: 0;
}

.nb-title h2 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
}
.nb-title p {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 2px;
}

.nb-right {
  display: flex;
  align-items: center;
  gap: 25px;
}
.notif-wrapper {
  position: relative;
  color: #64748b;
  font-size: 1.3rem;
  cursor: pointer;
}
.pulse-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background: #f43f5e;
  border-radius: 50%;
  border: 2px solid white;
}
.divider {
  width: 1px;
  height: 32px;
  background: #e2e8f0;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.user-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #1e293b;
  display: block;
}
.user-status {
  font-size: 0.75rem;
  color: #10b981;
  font-weight: 700;
}
.user-img {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  object-fit: cover;
}

/* --- CONTENT AREA --- */
.sm-content-area {
  padding: 35px 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 30px; /* Jarak antar baris */
}

/* BARIS 1: STATS (Horizontal) */
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat-icon {
  width: 55px;
  height: 55px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}
.bg-soft-blue {
  background: #eff6ff;
  color: #3b82f6;
}
.bg-soft-green {
  background: #f0fdf4;
  color: #10b981;
}
.bg-soft-orange {
  background: #fff7ed;
  color: #f97316;
}

.stat-label {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
}
.stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 5px;
}
.color-green {
  color: #10b981;
}
.color-orange {
  color: #f59e0b;
}

/* BARIS 2: MONITORING (Vertical/Full Width) */
.content-panel {
  background: white;
  border-radius: 24px;
  padding: 30px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.header-text h3 {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0;
}
.header-text p {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 4px;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  text-align: left;
  padding: 15px;
  background: #f8fafc;
  color: #64748b;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
td {
  padding: 18px 15px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.9rem;
  color: #334155;
}

.badge {
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
}
.b-green {
  background: #dcfce7;
  color: #15803d;
}
.b-orange {
  background: #fef3c7;
  color: #b45309;
}
.b-red {
  background: #fee2e2;
  color: #991b1b;
}

.btn-action {
  background: #f1f5f9;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  transition: 0.2s;
}
.btn-action:hover {
  background: #e2e8f0;
  color: #1e293b;
}

.btn-export {
  background: #1e293b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-export:hover {
  background: #0f172a;
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .stats-row {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 800px) {
  .sm-sidebar {
    width: 80px;
    padding: 30px 10px;
  }
  .brand-name,
  .nav-item span,
  .nav-label,
  .logout-btn span,
  .user-info {
    display: none;
  }
  .sm-navbar,
  .sm-content-area {
    padding: 0 20px;
  }
  .stats-row {
    grid-template-columns: 1fr;
  }
}
</style>
