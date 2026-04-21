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
    <section class="hero">
      <div class="hero-container">
        <div class="hero-left">
          <span class="badge">Edisi 2026</span>
          <h1>Sistem Monitoring <span class="text-gradient">(SIMON)</span></h1>
          <p class="subtitle">Aplikasi manajemen sekolah masa depan</p>
          <p class="desc">
            Kelola data monitoring dan administrasi PKL sekolah dengan efisiensi tinggi dalam satu
            dasbor yang intuitif dan cepat.
          </p>
          <div class="action-group">
            <router-link to="/login" class="btn-primary">Mulai Sekarang</router-link>
          </div>
        </div>

        <div class="hero-right">
          <div class="image-overlay"></div>
          <div class="floating-card stats">
            <p>1.2k+ Siswa Aktif</p>
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
  flex-direction: column;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  flex: 1;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 0.9fr; /* Rasio lebih seimbang */
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}

/* --- BAGIAN KIRI --- */
.hero-left {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.badge {
  background: #e0f2fe;
  color: #0369a1;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.hero-left h1 {
  font-size: 42px;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin-bottom: 10px;
}

.hero-left .subtitle {
  font-size: 18px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 20px;
}

.hero-left .desc {
  color: #475569;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 35px;
  max-width: 500px;
}

/* Button Group */
.action-group {
  display: flex;
  gap: 15px;
}

.btn-primary {
  padding: 14px 32px;
  background: #2563eb;
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4);
}

.btn-outline {
  padding: 14px 32px;
  background: transparent;
  color: #475569;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.btn-outline:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

/* --- BAGIAN KANAN --- */
.hero-right {
  position: relative;
  border-radius: 30px;
  background-image: url('/src/assets/img/bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 450px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 8px solid white; /* Frame effect */
  transition: transform 0.5s ease;
}

.hero-right:hover {
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
}

.floating-card {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 15px 25px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  color: #1e293b;
  animation: float 3s ease-in-out infinite;
}

/* Keyframes */
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

.hero-left {
  animation: fadeIn 0.8s ease-out forwards;
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-left {
    align-items: center;
    padding: 20px;
  }
  .action-group {
    justify-content: center;
  }
  .hero-right {
    min-height: 350px;
    margin: 0 20px;
  }
}
</style>
