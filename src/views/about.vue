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
    <section class="about-section">
      <div class="container">
        <div class="about-header">
          <span class="badge">Tentang Kami</span>
          <h1>Membangun Ekosistem <span class="text-gradient">Pendidikan Digital</span></h1>
        </div>

        <div class="about-grid">
          <div class="about-visual">
            <div class="main-image">
              <div class="image-overlay"></div>
            </div>
            <div class="floating-glass-card">
              <div class="icon-box">🚀</div>
              <div>
                <h4>Inovasi Berkelanjutan</h4>
                <p>Update sistem berkala.</p>
              </div>
            </div>
          </div>

          <div class="about-content">
            <div class="info-item">
              <h3>Visi Kami</h3>
              <p>
                Menjadi platform manajemen pendidikan nomor satu di Indonesia yang mengedepankan
                kemudahan akses, transparansi data, dan efisiensi waktu bagi seluruh tenaga pengajar
                dan staf sekolah.
              </p>
            </div>

            <div class="action-group">
              <router-link to="/" class="btn-primary">Kembali ke Beranda</router-link>
              <!-- <router-link to="/contact" class="btn-primary">Hubungi Tim Kami</router-link> -->
              <!-- <button class="btn-outline">Hubungi Tim Kami</button> -->
            </div>
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
  background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.container {
  max-width: 900px;
  width: 120%;
  animation: fadeIn 0.8s ease-out;
}

/* --- HEADER --- */
.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.badge {
  background: #f1f1f1;
  color: #0369a1;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-header h1 {
  font-size: 32px;
  font-weight: 800;
  color: #1e293b;
  margin-top: 15px;
  margin-bottom: 15px;
}

/* --- GRID LAYOUT --- */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 10px;
  align-items: center;
  margin-top: -10px;
}

/* --- VISUAL (KIRI) --- */
.about-visual {
  position: relative;
}

.main-image {
  height: 300px;
  border-radius: 30px;
  background-image: url('/src/assets/img/about.jpg'); /* Ganti dengan gambar about Anda */
  background-color: #cbd5e1; /* Fallback */
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 6px solid white;
}

.floating-glass-card {
  position: absolute;
  bottom: -20px;
  right: 85px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  padding: 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: float 4s ease-in-out infinite;
}

.icon-box {
  font-size: 24px;
  background: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.floating-glass-card h4 {
  margin: 0;
  font-size: 12px;
  color: #1e293b;
}

.floating-glass-card p {
  margin: 0;
  font-size: 9px;
  color: #64748b;
}

/* --- CONTENT (KANAN) --- */
.about-content {
  /* display: flex; */
  flex-direction: column;
  gap: 30px;
  margin-top: -60px;
}

.info-item h3 {
  font-size: 24px;
  color: #1e293b;
  margin-bottom: 12px;
}

.info-item p {
  color: #475569;
  line-height: 1.8;
  font-size: 15px;
  margin-top: -10px;
}
/* 
.stats-row {
  display: flex;
  gap: 30px;
} */

.stat-box {
  flex: 1;
  background: white;
  padding: 15px;
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}

.stat-number {
  display: block;
  font-size: 30px;
  font-weight: 800;
  color: #2563eb;
}

.stat-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

/* --- BUTTONS --- */
.action-group {
  /* display: flex; */
  gap: 15px;
  margin-top: 50px;
}

.btn-primary {
  padding: 14px 28px;
  background: #2563eb;
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 10px 15px rgba(37, 99, 235, 0.2);
  transition: 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: #1d4ed8;
}

.btn-outline {
  padding: 14px 28px;
  background: transparent;
  color: #475569;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.btn-outline:hover {
  background: #f8fafc;
}

/* ANIMASI */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

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
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-header h1 {
    font-size: 30px;
  }

  .about-visual {
    order: 2; /* Gambar pindah ke bawah di mobile */
  }

  .floating-glass-card {
    right: 20px;
  }
}
</style>
