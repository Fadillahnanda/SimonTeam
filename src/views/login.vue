<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

// 1. Pastikan variabel ref sudah ada
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

// 2. Masukkan kode axios di dalam fungsi ini
const handleLogin = async () => {
  try {
    // Kosongkan error setiap kali mencoba login ulang
    error.value = ''

    // INI KODE YANG ANDA TANYAKAN:
    const response = await axios.post('http://localhost:5000/login', {
      email: email.value,
      password: password.value,
    })

    // Jika berhasil (status 200)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      alert('Login Berhasil!')
      router.push('/admin') // Ganti dengan path halaman tujuan Anda
    }
  } catch (err) {
    if (err.response) {
      if (err.response.status === 401) {
        error.value = 'Email atau password salah. Silakan coba lagi.'
      } else {
        error.value = err.response.data?.message || 'Terjadi kesalahan pada server.'
      }
    } else {
      error.value = 'Gagal terhubung ke server.'
    }
  }
}
</script>
<template>
  <main>
    <section class="login-section">
      <div class="login-card">
        <h2>Login SIMON</h2>

        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <input v-model="email" type="text" placeholder="Username" required />
          </div>

          <div class="input-group">
            <input v-model="password" type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>

          <!-- <router-link to="/homemurid">
          </router-link> -->
          <p v-if="error" style="color: red; font-size: 12px">{{ error }}</p>
          <p class="back-home">
            <router-link to="/">
              <a href="#">Kembali ke Home</a>
            </router-link>
          </p>
        </form>
      </div>
      <router-view></router-view>
    </section>
  </main>
</template>
<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

/* Body Background */
body {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar */
.navbar {
  background: #ffffffcc;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  align-items: center;
  position: sticky;
  top: 0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #3498db;
}

.navbar nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: 0.3s;
}

.navbar nav a:hover {
  color: #3498db;
}

/* Login Section */
.login-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Card */
.login-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.6s ease-in-out;
}

.login-card h2 {
  margin-bottom: 20px;
  color: #333;
}

/* Input */
.input-group {
  margin-bottom: 15px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: 0.3s;
}

.input-group input:focus {
  border-color: #3498db;
  outline: none;
}

/* Button */
button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #2980b9;
}

/* Back link */
.back-home {
  margin-top: 10px;
}

.back-home a {
  text-decoration: none;
  color: #3498db;
  font-size: 14px;
}

/* Footer */
footer {
  text-align: center;
  padding: 15px;
  background: #ffffffcc;
}

/* Animation */
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
</style>
