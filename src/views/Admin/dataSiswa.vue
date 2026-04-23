<script>
export default {
  data() {
    return {
      siswa: [], // harus sama dengan v-for
    }
  },

  methods: {
    //ambil data dari backend
    async getSiswa() {
      try {
        const res = await fetch('http://localhost:5000/siswa') //  sesuaikan endpoint kamu
        const data = await res.json()
        this.siswa = data
      } catch (error) {
        console.error('Gagal mengambil data:', error)
      }
    },
  },

  // otomatis jalan saat halaman dibuka
  mounted() {
    this.getSiswa()
  },
}
</script>

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
          <div class="sm-menu-item">
            <i class="fa-solid fa-lock"></i>
            <span>Akses Pengguna</span>
          </div>
        </router-link>
        <router-link to="/datasiswa">
          <div class="sm-menu-item active">
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
        <h2>Tambah Data Siswa</h2>
        <div class="sm-user-profile">
          <i class="fa-regular fa-bell"></i>
          <span>Admin</span>
          <router-link to="/profile">
            <div class="sm-avatar"></div>
          </router-link>
        </div>
      </header>

      <section class="sm-table-container">
        <div class="sm-table-header">
          <div class="sm-filter-group">
            <div class="sm-search-wrapper">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Cari siswa..." />
            </div>
            <select class="sm-select">
              <option>Semua Kelas</option>
              <option>XII TKJ</option>
              <option>XII RPL</option>
            </select>
            <select class="sm-select">
              <option>Semua Status</option>
              <option>Aktif</option>
              <option>Tidak Aktif</option>
            </select>
          </div>
          <router-link to="/tambahsiswa">
            <button class="sm-btn-add"><i class="fa-solid fa-plus"></i> Tambah Siswa</button>
          </router-link>
        </div>

        <div class="sm-table-responsive">
          <table class="sm-table">
            <thead>
              <tr>
                <th>No</th>
                <!-- <th>Role</th> -->
                <th>Nama</th>
                <th>NIS</th>
                <th>Kelas</th>
                <th>Tempat PKL</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in siswa" :key="item.nisn">
                <td>{{ index + 1 }}</td>
                <td>{{ item.nama_siswa }}</td>
                <td>{{ item.nisn }}</td>
                <td>{{ item.kelas }}</td>
                <td>{{ item.tempat_pkl }}</td>

                <td>
                  <span class="status-badge aktif"> {{ item.status }}</span>
                </td>
                <td>
                  <div class="sm-action-btns">
                    <button class="btn-view">
                      <i class="fa-solid fa-key"></i>
                    </button>

                    <!--EDIT -->
                    <button class="btn-edit" @click="editSiswa(item)">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>

                    <!-- DELETE -->
                    <button class="btn-delete" @click="deleteSiswa(item.nisn)">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
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

/* Content Area */
.sm-content-wrapper {
  flex: 1;
  margin-left: 260px;
  padding: 2.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Topbar & Profile */
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Table Container & Header */
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
.status-badge.non-aktif {
  background: #fef2f2;
  color: #ef4444;
}

.sm-action-btns {
  display: flex;
  gap: 8px;
}

.sm-action-btns button {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.btn-view {
  background: #3b82f6;
}
.btn-edit {
  background: #f59e0b;
}
.btn-delete {
  background: #ef4444;
}
.sm-action-btns button:hover {
  opacity: 0.8;
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
</style>
