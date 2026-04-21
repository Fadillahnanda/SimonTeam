<script setup></script>

<template>
  <header>
    <div class="logo">SIMON</div>
    <nav>
      <router-link to="/"> Beranda </router-link>
      <router-link to="/about"> Tentang </router-link>
      <router-link to="/contact"> Kontak </router-link>
    </nav>
  </header>
  <main class="page-wrapper">
    <section class="contact-section">
      <div class="container">
        <div class="contact-header">
          <span class="badge">Hubungi Kami</span>
          <h1>Ada Pertanyaan? <span class="text-gradient">Kami Siap Membantu</span></h1>
          <p class="subtitle"></p>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <div class="icon-circle">📍</div>
              <div>
                <h4>Alamat Kantor</h4>
                <p>Jl. Pendidikan No. 45, Jakarta Selatan</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle">📧</div>
              <div>
                <h4>Email Dukungan</h4>
                <p>support@sigma-system.id</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle">📞</div>
              <div>
                <h4>Telepon</h4>
                <p>+62 (21) 555-0123</p>
              </div>
            </div>

            <div class="map-placeholder">
              <p>Google Maps Preview</p>
            </div>
          </div>

          <div class="contact-form-container">
            <form @submit.prevent class="modern-form">
              <div class="form-group">
                <label>Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama Anda" />
              </div>

              <div class="form-group">
                <label>Email Sekolah</label>
                <input type="email" placeholder="contoh@sekolah.sch.id" />
              </div>

              <div class="form-group">
                <label>Pesan</label>
                <textarea rows="4" placeholder="Apa yang bisa kami bantu?"></textarea>
              </div>

              <button type="submit" class="btn-primary-block">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  <router-view></router-view>
</template>

<style scoped>
header {
  position: fixed; /* nempel di atas */
  top: 0;
  left: 0;
  width: 100%; /* full layar */

  background: white;
  padding: 15px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #4facfe;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

nav a:hover {
  color: #4facfe;
}

/* supaya konten tidak ketutup navbar */
:deep(router-view) {
  display: block;
  margin-top: 80px;
}
/* Reset & Base */
.page-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.container {
  margin-top: 20px;
  max-width: 800px; /* Diperkecil agar lebih compact */
  width: 100%;
  animation: fadeIn 0.8s ease-out;
  /* display: flex; */
}

/* --- HEADER --- */
.contact-header {
  text-align: center;
  margin-bottom: 5px;
}

.badge {
  background: #e0f2fe;
  color: #0369a1;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.contact-header h1 {
  font-size: 18px;
  font-weight: 800;
  color: #1e293b;
  margin-top: 15px;
}

.subtitle {
  color: #64748b;
  font-size: 12px;
  max-width: 500px;
  margin: 10px auto 0;
}

/* --- GRID LAYOUT --- */
.contact-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  align-items: start;
  margin-top: 30px;
}

/* --- INFO KONTAK (KIRI) --- */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-card {
  background: white;
  padding: 16px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.02);
  border: 1px solid #f1f5f9;
}

.icon-circle {
  width: 36px;
  height: 36px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
}

.info-card h4 {
  margin: 0;
  font-size: 11px;
  color: #1e293b;
}

.info-card p {
  margin: 0;
  font-size: 10px;
  color: #64748b;
}

.map-placeholder {
  height: 96px;
  background: #cbd5e1;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url('https://via.placeholder.com/400x120');
  background-size: cover;
}

/* --- FORMULIR (KANAN) --- */
.contact-form-container {
  background: rgba(255, 255, 255, 0.808);
  backdrop-filter: blur(10px);
  padding: 32px;
  border-radius: 19px;
  border: 1px solid white;
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #475569;
  margin-bottom: 6px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 13px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: white;
  font-family: inherit;
  font-size: 11px;
  transition: 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.btn-primary-block {
  width: 100%;
  padding: 11px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 8px 12px rgba(37, 99, 235, 0.16);
}

.btn-primary-block:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

/* ANIMASI */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 850px) {
  .page-wrapper {
    height: auto;
    overflow-y: auto;
  }
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .contact-info {
    order: 2;
  }
}
</style>
