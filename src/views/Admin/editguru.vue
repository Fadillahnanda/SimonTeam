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
          <div class="sm-menu-item active">
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
        <div class="header-title">
          <h2>Edit Data Guru</h2>
          <p>Update data pada formulir berikut</p>
        </div>

        <div class="sm-user-profile">
          <i class="fa-regular fa-bell"></i>
          <span class="user-name">Admin</span>
          <router-link to="/profile">
            <div class="sm-avatar"></div>
          </router-link>
        </div>
      </header>

      <main class="sm-form-card">
        <form @submit.prevent="simpanData">
          <div class="form-grid">
            <div class="form-group">
              <label>NIP</label>
              <input type="number" v-model="siswa.nisn" placeholder="Contoh: 00123456" required />
            </div>

            <div class="form-group">
              <label>Nama Lengkap</label>
              <input type="text" v-model="siswa.nama" placeholder="Nanda" required />
            </div>

            <div class="form-group">
              <label></label>
              <select v-model="siswa.kelas" required>
                <option value="" disabled selected>Pilih Kelas</option>
                <option value="XII RPL 1">XII RPL A</option>
                <option value="XII RPL 2">XII RPL B</option>
                <!-- <option value="XII TKJ 1">XII TKJ 1</option> -->
              </select>
            </div>
            <div class="form-group">
              <label>Kompetensi Keahlian</label>
              <select v-model="siswa.jurusan" required>
                <option value="" disabled selected>Pilih Jurusan</option>
                <option value="XII RPL 1">PPLG</option>
                <option value="XII RPL 2">TKJ</option>
                <option value="XII TKJ 1">DKV</option>
                <option value="XII TKJ 1">APAT</option>
                <option value="XII TKJ 1">OTOMOTIF</option>
                <option value="XII TKJ 1">TKR</option>
              </select>
            </div>

            <!-- <div class="form-group">
              <label>Kompetensi Keahlian</label>
              <input
                type="text"
                v-model="siswa.jurusan"
                placeholder="Contoh: Rekayasa Perangkat Lunak"
              />
            </div> -->

            <div class="form-group full-width">
              <label>Tempat / Instansi PKL</label>
              <input type="text" v-model="siswa.tempatPkl" placeholder="PT. Telkom" />
            </div>

            <!-- <div class="form-group full-width">
              <label>Alamat Lengkap</label>
              <textarea
                v-model="siswa.alamat"
                rows="3"
                placeholder="Alamat rumah tinggal saat ini"
              ></textarea>
            </div> -->
          </div>

          <div class="form-footer">
            <button type="button" class="btn-cancel" @click="$router.go(-1)">Batal</button>
            <button type="submit" class="btn-submit">
              <i class="fa-solid fa-floppy-disk"></i> Simpan Siswa
            </button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// State data form
const siswa = ref({
  nisn: '',
  nama: '',
  kelas: '',
  jurusan: '',
  tempatPkl: '',
  alamat: '',
})

// Fungsi simpan
const simpanData = () => {
  console.log('Data Siswa Baru:', siswa.value)
  alert('Data Berhasil Disimpan!')
  // Integrasi API Anda di sini
}
</script>

<style scoped>
/* DASHBOARD LAYOUT (Sesuai kode awal Anda) */
.sm-dashboard {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8fafc;
  position: absolute;
  top: 0;
  left: 0;
}

.sm-sidebar {
  width: 260px;
  background: #2563eb;
  color: white;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
.sm-logout {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  cursor: pointer;
}
.sm-content-wrapper {
  flex: 1;
  margin-left: 260px;
  padding: 2.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: calc(100% - 260px);
}

/* TOPBAR & HEADER */
.sm-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title h2 {
  font-size: 1.8rem;
  color: #1e293b;
  margin: 0;
}

.header-title p {
  color: #64748b;
  margin: 5px 0 0 0;
}

/* FORM CARD STYLING */
.sm-form-card {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
  border: 1px solid #e2e8f0;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.full-width {
  grid-column: span 2;
}

label {
  font-weight: 600;
  color: #475569;
  font-size: 0.9rem;
}

input,
select,
textarea {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1.5px solid #cbd5e1;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  outline: none;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

/* BUTTONS */
.form-footer {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.btn-submit {
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s;
}

.btn-submit:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

.btn-cancel {
  background: #f1f5f9;
  color: #64748b;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.btn-cancel:hover {
  background: #e2e8f0;
}

/* SIDEBAR MENU ACTIVE STATE */
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
.sm-menu-item.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.sm-logo h1 {
  font-size: 1.5rem;
  margin-bottom: 3rem;
}
.sm-logo span {
  font-weight: 300;
  opacity: 0.8;
}
.sm-avatar {
  width: 42px;
  height: 42px;
  background: #60a5fa;
  border-radius: 50%;
}
.sm-user-profile {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
a {
  text-decoration: none;
}
</style>
