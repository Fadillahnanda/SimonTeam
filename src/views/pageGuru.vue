<script setup>
// Inisialisasi Icon Lucide
lucide.createIcons()

function showSection(sectionId, element) {
  // Sembunyikan semua section
  const sections = document.querySelectorAll('.content-section')
  sections.forEach((section) => section.classList.remove('active'))

  // Tampilkan section yang dipilih
  document.getElementById(sectionId).classList.add('active')

  // Update judul header
  const title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
  document.getElementById('section-title').innerText = title

  // Update state active pada navigasi
  const navLinks = document.querySelectorAll('.nav-links li')
  navLinks.forEach((link) => link.classList.remove('active'))
  element.classList.add('active')
}

function updateFileName() {
  const input = document.getElementById('presence-doc')
  const info = document.getElementById('selected-file-name')
  const file = input.files[0]
  info.textContent = file ? `File: ${file.name}` : 'Belum ada file dipilih'
}

function submitPresence() {
  const input = document.getElementById('presence-doc')
  const file = input.files[0]
  if (!file) {
    alert('Silakan pilih dokumentasi sebelum melakukan presensi.')
    return
  }

  const tableBody = document.querySelector('#presensi .data-table tbody')
  const now = new Date()
  const date = now.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  const time = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const newRow = tableBody.insertRow(0)
  newRow.innerHTML = `
          <td>${date}</td>
          <td>${time}</td>
          <td><span class="badge success">Hadir</span></td>
          <td>${file.name}</td>
        `

  input.value = ''
  updateFileName()
  alert(`Presensi berhasil dicatat dengan dokumentasi: ${file.name}`)
}
</script>

<template>
  <main class="main-content">
    <header>
      <h1 id="section-title">Beranda</h1>
      <div class="user-info">
        <p>Halo, <strong>Budi Santoso</strong></p>
      </div>
    </header>

    <section id="beranda" class="content-section active">
      <div class="stats-grid">
        <div class="card">
          <h3>Kehadiran</h3>
          <p class="value">98%</p>
        </div>
        <div class="card">
          <h3>Tugas Pending</h3>
          <p class="value">3</p>
        </div>
        <div class="card">
          <h3>Poin Prestasi</h3>
          <p class="value">120</p>
        </div>
      </div>
      <div class="announcement">
        <h3>Pengumuman Terbaru</h3>
        <p>
          Ujian Tengah Semester akan dilaksanakan mulai tanggal 20 Oktober. Harap persiapkan diri.
        </p>
      </div>
    </section>

    <section id="presensi" class="content-section">
      <div class="card">
        <h3>Presensi Hari Ini</h3>
        <p>Jumat, 17 April 2026</p>
        <div class="form-group">
          <label>Upload Dokumentasi Presensi</label>
          <input
            type="file"
            id="presence-doc"
            accept="image/*,application/pdf"
            onchange="updateFileName()"
          />
          <p id="selected-file-name" class="file-name">Belum ada file dipilih</p>
        </div>
        <div class="presence-action">
          <button class="btn-primary" onclick="submitPresence()">Klik untuk Hadir</button>
        </div>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Jam Masuk</th>
            <th>Status</th>
            <th>Dokumentasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16 April 2026</td>
            <td>07:15</td>
            <td><span class="badge success">Hadir</span></td>
            <td>–</td>
          </tr>
          <tr>
            <td>15 April 2026</td>
            <td>07:20</td>
            <td><span class="badge success">Hadir</span></td>
            <td>–</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="profile" class="content-section">
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">BS</div>
          <div class="profile-info">
            <h2>Budi Santoso</h2>
            <p>NISN: 0012345678</p>
          </div>
        </div>
        <div class="profile-details">
          <div class="detail-group">
            <label>Kelas</label>
            <p>XII - Teknik Informatika</p>
          </div>
          <div class="detail-group">
            <label>Email</label>
            <p>budi.santoso@sigma.sch.id</p>
          </div>
          <div class="detail-group">
            <label>Alamat</label>
            <p>Jl. Merdeka No. 45, Kota Makassar</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
:root {
  --primary: #4f46e5;
  --bg-light: #f8fafc;
  --text-dark: #1e293b;
  --text-gray: #64748b;
  --white: #ffffff;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-light);
  color: var(--text-dark);
}

.container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 260px;
  background: var(--white);
  border-right: 1px solid #e2e8f0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.logo h2 {
  color: var(--primary);
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

.nav-links {
  list-style: none;
  flex-grow: 1;
}

.nav-links li {
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-gray);
  transition: 0.3s;
}

.nav-links li:hover,
.nav-links li.active {
  background: #eef2ff;
  color: var(--primary);
}

.logout {
  margin-top: auto;
  color: #ef4444;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  padding: 2rem 3rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.content-section {
  display: none;
}

.content-section.active {
  display: block;
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.card {
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.value {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: 0.5rem;
}

.announcement {
  background: #4f46e5;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
}

/* Table */
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 1.5rem;
}

.data-table th,
.data-table td {
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid #f1f5f9;
}

.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.success {
  background: #dcfce7;
  color: #166534;
}

/* Profile */
.profile-card {
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.avatar {
  width: 80px;
  height: 80px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.btn-primary {
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.form-group {
  margin: 1rem 0;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--text-dark);
}

.form-group input[type='file'] {
  width: 100%;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  color: var(--text-dark);
}

.file-name {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-gray);
}
</style>
