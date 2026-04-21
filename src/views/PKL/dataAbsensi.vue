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
          <router-link to="/homepkl" class="nav-item">
            <i class="fa-solid fa-chart-pie"></i>
            <span>Dashboard</span>
          </router-link>
          <router-link to="/dataabsensipkl" class="nav-item active">
            <i class="fa-solid fa-user-check"></i>
            <span>Absensi Siswa</span>
          </router-link>
          <router-link to="/jurnalpkl" class="nav-item">
            <i class="fa-solid fa-book-bookmark"></i>
            <span>Verifikasi Jurnal</span>
          </router-link>
        </div>
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
            <h2>Data Absensi PKL</h2>
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

      <section class="sm-content-area">
        <div class="sm-table-container">
          <div class="sm-table-header">
            <div class="sm-filter-group">
              <div class="sm-search-wrapper">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Cari siswa..." />
              </div>
              <!-- <select class="sm-select">
                <option>Semua Kelas</option>
                <option>XII TKJ</option>
                <option>XII RPL</option>
                <option>XII RPL</option>
              </select> -->
            </div>
          </div>

          <div class="sm-table-responsive">
            <table class="sm-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Siswa</th>
                  <th>Tanggal</th>
                  <th>Masuk</th>
                  <th>Keluar</th>
                  <th>Lampiran</th>
                  <th>Status Verifikasi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Adelia</td>
                  <td>20/04/2026</td>
                  <td>06.00</td>
                  <td>15.00</td>
                  <td><a href="#" class="text-blue-600 hover:underline">Lihat</a></td>
                  <td><span class="status-badge aktif">Terverifikasi</span></td>
                  <td>
                    <div class="sm-action-btn">
                      <div class="sm-action-btns">
  <button class="btn-action btn-check" title="Verifikasi Kehadiran">
    <i class="fa-solid fa-check"></i>
  </button>
  <button class="btn-action btn-reject" title="Tolak Absensi">
    <i class="fa-solid fa-xmark"></i>
  </button>
</div>

                      <!-- <button class="btn-verif">
                        <i class="fa-regular fa-circle-check"></i>
                      </button> -->
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="sm-pagination">
            <button class="page-item active">1</button>
            <button class="page-item">2</button>
            <button class="page-item">3</button>
          </div>
        </div>
      </section>
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

/* --- SIDEBAR --- */
.sm-sidebar {
  width: 260px;
  background: #0f172a;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 30px 15px;
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

/* --- MAIN CONTAINER & NAVBAR --- */
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
}

.sm-table-container {
  background: white;
  padding: 1.5rem;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.sm-table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.sm-filter-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Input & Select */
.sm-search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.sm-search-wrapper i {
  position: absolute;
  left: 15px;
  color: #94a3b8;
}

.sm-search-wrapper input {
  padding: 10px 15px 10px 40px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  width: 250px;
  outline: none;
}

.sm-select {
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  outline: none;
}

.sm-btn-add {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Table Core */
.sm-table-responsive {
  overflow-x: auto;
}

.sm-table {
  width: 100%;
  border-collapse: collapse;
}

.sm-table th {
  text-align: left;
  padding: 15px;
  background: #f1f5f9;
  color: #475569;
  font-weight: 600;
  border-bottom: 2px solid #e2e8f0;
}

.sm-table td {
  padding: 15px;
  border-bottom: 1px solid #f1f5f9;
  color: #1e293b;
}

/* Status & Action Buttons */
.status-badge {
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-badge.aktif {
  background: #ecfdf5;
  color: #10b981;
}

.sm-action-btns {
  display: flex;
  gap: 8px;
}

.btn-verif {
  background: #0bf574;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Pagination */
.sm-pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

.page-item {
  width: 35px;
  height: 35px;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.page-item.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

/* RESPONSIVE */
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
}



/* new */
/* --- Action Buttons Enhancement --- */
.sm-action-btns {
  display: flex;
  gap: 8px;
  align-items: center;
}

.btn-action {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

/* Tombol Verifikasi (Hijau) */
.btn-check {
  background: #05f585;
  color: #f1f8f5;
}
.btn-check:hover {
  background: #eef3f1;
  color: rgb(6, 114, 223);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

/* Tombol Info/Detail (Biru) */


/* Tombol Reject (Merah) */
.btn-reject {
  background: #fef2f2;
  color: #ef4444;
}
.btn-reject:hover {
  background: #ef4444;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
}

/* Mempercantik Badge Status */
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}
</style>
