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
          <div class="sm-menu-item active">
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
          <h2>Absensi Siswa</h2>
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

      <div class="sm-absensi-content">
        <div class="sm-form-card card-glass">
          <div class="form-header">
            <h3>Form Absensi</h3>
          </div>

          <div class="form-body">
            <div class="input-section">
              <label class="form-label">Upload Foto Kehadiran</label>
              <div class="custom-file-upload">
                <input type="file" id="upload-foto" hidden />
                <label for="upload-foto" class="file-drop-zone">
                  <i class="fa-solid fa-camera"></i>
                  <span>Pilih file atau ambil foto</span>
                </label>
              </div>
            </div>

            <div class="input-section">
              <label class="form-label">Lokasi (GPS)</label>
              <div class="gps-control">
                <input type="text" class="sm-input-text" placeholder="Klik ambil lokasi" readonly />
                <button class="btn-gps">
                  <i class="fa-solid fa-location-dot"></i> Ambil Lokasi
                </button>
              </div>
            </div>

            <div class="submit-section">
              <button class="btn-submit-absensi">Kirim Absensi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- GLOBAL STYLE (DARI TEMPLATE ANDA) --- */
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

/* --- KHUSUS HALAMAN ABSENSI --- */
.sm-absensi-content {
  max-width: 700px;
  margin: 0 auto;
}

.sm-form-card {
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03);
}

.form-header h3 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-main);
}

.input-section {
  margin-bottom: 1.8rem;
}

.form-label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #475569;
  font-size: 0.95rem;
}

/* File Upload Style */
.file-drop-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
  background: #f8fafc;
  cursor: pointer;
  transition: 0.3s;
  color: #64748b;
}

.file-drop-zone:hover {
  border-color: #6366f1;
  background: #eef2ff;
  color: #6366f1;
}

.file-drop-zone i {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

/* GPS Control Style */
.gps-control {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sm-input-text {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #f8fafc;
  outline: none;
  font-size: 1rem;
}

.btn-gps {
  background: #6366f1;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-gps:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

/* Submit Button Style */
.btn-submit-absensi {
  width: 100%;
  padding: 18px;
  background: #22c55e;
  color: white;
  border: none;
  border-radius: 16px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.3);
}

.btn-submit-absensi:hover {
  background: #16a34a;
  transform: translateY(-3px);
  box-shadow: 0 15px 25px -5px rgba(34, 197, 94, 0.4);
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
