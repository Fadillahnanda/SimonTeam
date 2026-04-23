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
          <div class="sm-menu-item active">
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
          <h2>Dokumentasi Jurnal Siswa</h2>
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
        <div class="sm-form-card card-glass mb-4">
          <div class="form-header">
            <h3>Input Jurnal</h3>
          </div>

          <div class="form-body">
            <div class="input-section">
              <textarea class="sm-textarea" placeholder="Tulis kegiatan..."></textarea>
            </div>
            <!-- 
            <div class="input-section">
              <div class="custom-file-input">
                <input type="file" id="choose-file" hidden />
                <label for="choose-file" class="btn-file">Choose file</label>
                <span class="file-name">No file chosen</span>
              </div>
            </div> -->

            <div class="submit-section">
              <button class="btn-submit-jurnal">Simpan</button>
            </div>
          </div>
        </div>

        <div class="sm-form-card card-glass">
          <div class="form-header">
            <h3>Riwayat Jurnal</h3>
          </div>

          <div class="table-responsive">
            <table class="sm-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Kegiatan</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 Apr 2026</td>
                  <td>Instalasi LAN</td>
                  <td><span class="status-text success">Disetujui</span></td>
                </tr>
                <tr>
                  <td>13 Apr 2026</td>
                  <td>Konfigurasi Router</td>
                  <td><span class="status-text warning">Pending</span></td>
                </tr>
                <tr>
                  <td>14 Apr 2026</td>
                  <td>Perbaikan PC</td>
                  <td><span class="status-text danger">Ditolak</span></td>
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

/* --- GLOBAL STYLE (TETAP) --- */
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --bg-app: #f1f5f9;
  --sidebar-bg: #0f172a;
  --text-main: #1e293b;
  --text-muted: #64748b;
}

.sm-dashboard {
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #f1f5f9;
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
  font-weight: 600;
}

/* CONTENT AREA */
.sm-content-wrapper {
  flex: 1;
  margin-left: 260px;
  padding: 2.5rem 3.5rem;
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
  margin-top: 4px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.notif-bell {
  position: relative;
  background: white;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #e2e8f0;
}

.avatar-wrapper img {
  width: 48px;
  height: 48px;
  border-radius: 15px;
  border: 2px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* --- STYLE JURNAL --- */
.sm-jurnal-content {
  max-width: 1000px;
  margin: 0 auto;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.sm-form-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03);
}

.form-header h3 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.sm-textarea {
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  font-family: inherit;
  resize: vertical;
  outline: none;
  transition: 0.3s;
}

.sm-textarea:focus {
  border-color: #6366f1;
  background: #fff;
}

.custom-file-input {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 1rem;
}

.btn-file {
  padding: 8px 16px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.2s;
}

.btn-file:hover {
  background: #e2e8f0;
}

.file-name {
  color: #64748b;
  font-size: 0.9rem;
}

.btn-submit-jurnal {
  width: 100%;
  padding: 14px;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: 0.3s;
}

.btn-submit-jurnal:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

/* Table Styles */
.table-responsive {
  overflow-x: auto;
}

.sm-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}

.sm-table th {
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #f1f5f9;
  color: #1e293b;
  font-weight: 700;
}

.sm-table td {
  padding: 14px 12px;
  border-bottom: 1px solid #f1f5f9;
  color: #475569;
}

.status-text {
  font-weight: 600;
}

.status-text.success {
  color: #22c55e;
}
.status-text.warning {
  color: #f59e0b;
}
.status-text.danger {
  color: #ef4444;
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
}
</style>
