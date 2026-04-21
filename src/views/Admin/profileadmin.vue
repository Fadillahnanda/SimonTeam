<template>
  <div class="sm-dashboard">
    <aside class="sm-sidebar">
      <div class="sm-logo">
        <h1>SIMON<span>PKL</span></h1>
      </div>
      <nav class="sm-menu">
        <router-link to="/admin">
          <div class="sm-menu-item">
            <i class="fa-solid fa-table-columns"></i>
            <span>Dashboard</span>
          </div>
        </router-link>
        <router-link to="/aksespengguna">
          <div class="sm-menu-item active">
            <i class="fa-solid fa-lock"></i>
            <span>Akses Pengguna</span>
          </div>
        </router-link>
        <router-link to="/datasiswa">
          <div class="sm-menu-item">
            <i class="fa-solid fa-users"></i>
            <span>Data Siswa</span>
          </div>
        </router-link>

        <router-link to="/dataguru">
          <div class="sm-menu-item">
            <i class="fa-solid fa-chalkboard-user"></i>
            <span>Data Guru</span>
          </div>
        </router-link>

        <router-link to="/datapkl">
          <div class="sm-menu-item">
            <i class="fa-solid fa-building"></i>
            <span>Data PKL</span>
          </div>
        </router-link>

        <!-- <router-link to="/profile">
          <div class="sm-menu-item">
            <i class="fa-solid fa-user-tie"></i>
            <span>Profile</span>
          </div>
        </router-link> -->
      </nav>

      <div class="sm-logout">
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
      </div>
    </aside>

    <div class="sm-content-wrapper">
      <header class="sm-topbar">
        <h2>Profile Admin</h2>
        <div class="sm-user-profile">
          <i class="fa-regular fa-bell"></i>
          <span class="user-name">Admin</span>
          <router-link to="/profile">
            <div class="sm-avatar"></div>
          </router-link>
        </div>
      </header>

      <section class="sm-profile-container">
        <div class="sm-profile-header">
          <div class="sm-profile-cover"></div>
          <div class="sm-profile-info-main">
            <div class="sm-large-avatar">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="sm-name-title">
              <h3>Administrator System</h3>
              <p>Super Admin • SIMONPKL Team</p>
            </div>
            <button class="sm-btn-edit"><i class="fa-solid fa-pen"></i> Edit Profil</button>
          </div>
        </div>

        <div class="sm-profile-grid">
          <div class="sm-detail-card">
            <h4>Informasi Pribadi</h4>
            <div class="sm-info-list">
              <div class="sm-info-item">
                <label>Username</label>
                <p>admin_simonpkl</p>
              </div>
              <div class="sm-info-item">
                <label>Email</label>
                <p>admin@school.sch.id</p>
              </div>
              <div class="sm-info-item">
                <label>Nomor Telepon</label>
                <p>+62 812 3456 7890</p>
              </div>
              <div class="sm-info-item">
                <label>Alamat</label>
                <p>Jl. Pendidikan No. 123, Kota Digital</p>
              </div>
            </div>
          </div>

          <div class="sm-detail-card">
            <h4>Keamanan Akun</h4>
            <div class="sm-info-list">
              <div class="sm-info-item">
                <label>Status Akun</label>
                <p><span class="badge-active">Aktif</span></p>
              </div>
              <div class="sm-info-item">
                <label>Terakhir Login</label>
                <p>Hari ini, 08:45 WIB</p>
              </div>
              <div class="sm-info-item">
                <label>Password</label>
                <p>••••••••••••</p>
                <button class="sm-text-btn">Ubah Password</button>
              </div>
              <div class="sm-info-item">
                <label>Two-Factor Auth</label>
                <p class="text-muted">Belum Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Layout Base */
.sm-dashboard {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8fafc;
}

/* 2. Sidebar tepat di posisi nol */
.sm-sidebar {
  width: 260px;
  background: #2563eb;
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

/* --- MAIN CONTENT --- */
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
}

/* --- PROFILE SECTION --- */
.sm-profile-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sm-profile-header {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.sm-profile-cover {
  height: 120px;
  background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
}

.sm-profile-info-main {
  padding: 0 2rem 2rem 2rem;
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  margin-top: -40px;
}

.sm-large-avatar {
  width: 100px;
  height: 100px;
  background: #f1f5f9;
  border-radius: 24px;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #94a3b8;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.sm-name-title h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.sm-name-title p {
  color: #64748b;
  margin: 5px 0 0 0;
}

.sm-btn-edit {
  margin-left: auto;
  padding: 10px 20px;
  background: #f1f5f9;
  border: none;
  border-radius: 10px;
  color: #475569;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sm-btn-edit:hover {
  background: #e2e8f0;
}

/* --- GRID DETAILS --- */
.sm-profile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.sm-detail-card {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.sm-detail-card h4 {
  margin: 0 0 1.5rem 0;
  color: #1e293b;
  font-size: 1.1rem;
  border-left: 4px solid #2563eb;
  padding-left: 12px;
}

.sm-info-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sm-info-item label {
  display: block;
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sm-info-item p {
  margin: 0;
  font-weight: 500;
  color: #334155;
}

.badge-active {
  background: #ecfdf5;
  color: #10b981;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
}

.sm-text-btn {
  background: none;
  border: none;
  color: #2563eb;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 5px;
}

.sm-text-btn:hover {
  text-decoration: underline;
}

.text-muted {
  color: #94a3b8 !important;
  font-style: italic;
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .sm-profile-grid {
    grid-template-columns: 1fr;
  }
  .sm-content-wrapper {
    padding: 1.5rem;
  }
}
</style>
