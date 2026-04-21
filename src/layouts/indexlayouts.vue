<script setup></script>
<template>
  <!-- <v-toolbar fixed class="cyan"> -->
  <header>
    <div class="logo">SIMON</div>
    <nav>
      <router-link to="/"> Beranda </router-link>
      <router-link to="/about"> Tentang </router-link>
      <router-link to="/contact"> Kontak </router-link>
    </nav>
  </header>

  <router-view></router-view>
  <!-- FOOTER -->
  <!-- </v-toolbar> -->
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
