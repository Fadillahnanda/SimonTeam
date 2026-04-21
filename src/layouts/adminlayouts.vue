<script setup></script>
<template>
  <div class="admin-layout container">
    <aside class="sidebar">
      <div class="logo">
        <h2>SIMON <span>PKL</span></h2>
      </div>
      <nav>
        <ul>
          <li class="active">
            <a href="#"><i class="fa-solid fa-table-columns"></i> Dashboard</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-users"></i> Data Siswa</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-building"></i> Data PKL</a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-user-tie"></i> Guru</a>
          </li>
        </ul>
      </nav>
      <div class="logout">
        <a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
      </div>
    </aside>

    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
  <!-- FOOTER -->
</template>
<style>
:root {
  --primary-blue: #2563eb;
  --primary-blue-soft: #eff6ff;
  --sidebar-bg: #2563eb;
  --dark-text: #0f172a;
  --muted-text: #475569;
  --light-bg: #f8fafc;
  --surface: #ffffff;
  --border-color: #e2e8f0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background-color: var(--light-bg);
  color: var(--dark-text);
}

.admin-layout.container {
  display: flex;
  min-height: 100vh;
  background: var(--light-bg);
}

.sidebar {
  width: 280px;
  min-height: 100vh;
  background-color: var(--sidebar-bg);
  color: white;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
}

.logo h2 {
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 2rem;
}

.logo span {
  font-weight: 400;
  opacity: 0.8;
}

nav ul {
  list-style: none;
}

nav ul li {
  margin-bottom: 0.75rem;
}

nav ul li a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

nav ul li.active a,
nav ul li a:hover {
  background: rgba(255, 255, 255, 0.18);
}

nav ul li.active a {
  color: #ffffff;
}

.logout a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1rem;
  border-radius: 12px;
  transition: background 0.2s ease;
}

.logout a:hover {
  background: rgba(255, 255, 255, 0.16);
}

.page-content {
  flex: 1;
  min-height: 100vh;
  background: transparent;
  padding: 2rem 2rem 2.5rem;
}

@media (max-width: 900px) {
  .admin-layout.container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    position: relative;
    min-height: unset;
    padding-bottom: 1.5rem;
  }

  .page-content {
    padding: 1.5rem 1rem 2rem;
  }
}
</style>
