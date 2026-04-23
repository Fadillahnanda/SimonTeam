<template>
  <div class="sm-dashboard">
    <aside class="sm-sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">
          <i class="fa-solid fa-chalkboard-user"></i>
        </div>
        <h1 class="brand-name">SIMON</h1>
      </div>

      <nav class="sm-nav">
        <div class="nav-group">
          <p class="nav-label">Monitoring</p>
          <router-link to="/homepkl" class="nav-item">
            <i class="fa-solid fa-chart-pie"></i>
            <span>Dashboard</span>
          </router-link>
          <router-link to="/dataabsensipkl" class="nav-item">
            <i class="fa-solid fa-user-check"></i>
            <span>Absensi Siswa</span>
          </router-link>
          <router-link to="/jurnalpkl" class="nav-item active">
            <i class="fa-solid fa-book-bookmark"></i>
            <span>Verifikasi Jurnal</span>
          </router-link>
        </div>
      </nav>

      <div class="sidebar-footer">
        <button class="logout-btn">
          <i class="fa-solid fa-power-off"></i>
          <span>Keluar</span>
        </button>
      </div>
    </aside>

    <div class="sm-main-container">
      <header class="sm-navbar">
        <div class="nb-left">
          <div class="nb-title">
            <h2>Verifikasi Jurnal PKL</h2>
            <p>Senin, 20 April 2026</p>
          </div>
        </div>

        <div class="nb-right">
          <div class="notif-wrapper">
            <i class="fa-regular fa-bell"></i>
            <span class="pulse-badge"></span>
          </div>
          <div class="divider"></div>
          <div class="user-profile">
            <div class="user-info">
              <span class="user-name">Bpk. Supriadi</span>
              <span class="user-status">Pembimbing</span>
            </div>
            <img
              src="https://ui-avatars.com/api/?name=Supriadi&background=10b981&color=fff"
              class="user-img"
              alt="avatar"
            />
          </div>
        </div>
      </header>

      <section class="sm-content-area">
        <div class="sm-table-container">
          <div class="sm-table-header">
            <div class="sm-filter-group">
              <div class="sm-search-wrapper">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input 
                  type="text" 
                  v-model="search"
                  placeholder="Cari siswa..." 
                />
              </div>
              <select 
                v-model="filterStatus"
                class="sm-select"
              >
                <option value="">Semua Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Ditolak">Ditolak</option>
              </select>
              <input type="date" id="tanggal" class="sm-select" />
            </div>
          </div>

          <div class="sm-table-responsive">
            <table class="sm-table">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Tanggal</th>
                  <th>Kegiatan</th>
                  <th>Status</th>
                  <th>Keterangan</th>
                  <th>Aksi</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="item in jurnal" :key="item.id" class="border-b">
                  <td>{{ item.nama }}</td>
                  <td>{{ item.tanggal }}</td>
                  <td>{{ item.kegiatan }}</td>
                  <td>
                    <span :class="statusClass(item.status)" class="px-3 py-1 rounded-full text-xs font-medium">
                      {{ item.status }}
                    </span>
                  </td>
                  <td>{{ item.keterangan || '-' }}</td>
                  <td>
                    <button 
                      class="btn-review" 
                      @click="openReviewModal(item)"
                      :unselectable="item.status !== 'Pending'"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Modal Review -->
          <div class="modal" v-if="showModal">
            <div class="modal-content">
              <div class="modal-header">
                <h3>Review Jurnal - {{ selectedStudent.nama }}</h3>
                <button class="close-btn" @click="closeModal">&times;</button>
              </div>
              <div class="modal-body">
                <div class="student-info">
                  <p><strong>Nama:</strong> {{ selectedStudent.nama }}</p>
                  <p><strong>Tanggal:</strong> {{ selectedStudent.tanggal }}</p>
                  <p><strong>Kegiatan:</strong> {{ selectedStudent.kegiatan }}</p>
                  <!-- <img :src="selectedStudent.foto" class="student-photo" alt="Foto kegiatan"> -->
                </div>

                <div class="action-group">
                  <button class="btn-approve" @click="approveJournal">
                    <i class="fa-solid fa-check"></i> Setujui
                  </button>
                  <button class="btn-reject-action" @click="showRejectForm = true">
                    <i class="fa-solid fa-times"></i> Tolak
                  </button>
                </div>

                <div class="reject-form" v-if="showRejectForm">
                  <label>Komentar Penolakan *</label>
                  <textarea 
                    v-model="rejectComment" 
                    placeholder="Masukkan alasan penolakan..."
                    rows="4"
                  ></textarea>
                  <button class="btn-submit-reject" @click="rejectJournal" :disabled="!rejectComment.trim()">
                    Kirim Penolakan
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Toast Notification -->
          <div class="toast" v-if="showToast" :class="toastType">
            <span>{{ toastMessage }}</span>
          </div>

          <div class="sm-pagination">
            <button class="page-item active">1</button>
            <button class="page-item">2</button>
            <button class="page-item">3</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      selectedStudent: null,
      showRejectForm: false,
      rejectComment: '',
      showToast: false,
      toastMessage: '',
      toastType: 'success',
      jurnal: [
        {
          id: 1,
          nama: "Adelia",
          tanggal: "20/04/2026",
          kegiatan: "Konfigurasi jaringan LAN",
          foto: "https://via.placeholder.com/150",
          status: "Pending"
        },
        {
          id: 2,
          nama: "Rezky",
          tanggal: "19/04/2026",
          kegiatan: "Instalasi Router",
          foto: "https://via.placeholder.com/150",
          status: "Pending"
        },
        {
          id: 3,
          nama: "Ahmad",
          tanggal: "18/04/2026",
          kegiatan: "Troubleshooting Jaringan",
          foto: "https://via.placeholder.com/150",
          status: "Pending"
        }
      ]
    }
  },
  methods: {
    openReviewModal(item) {
      this.selectedStudent = item
      this.showModal = true
      this.showRejectForm = false
      this.rejectComment = ''
    },
    closeModal() {
      this.showModal = false
      this.showRejectForm = false
      this.rejectComment = ''
    },
    approveJournal() {
      // Ubah status menjadi Approved
      this.selectedStudent.status = "Approved"
      
      this.toastMessage = 'Jurnal berhasil disetujui'
      this.toastType = 'success'
      this.showToast = true
      this.closeModal()
      
      // Hapus toast setelah 3 detik
      setTimeout(() => {
        this.showToast = false
      }, 3000)
    },
    rejectJournal() {
      if (!this.rejectComment.trim()) {
        alert('Komentar penolakan wajib diisi!')
        return
      }
      
      // Ubah status menjadi Ditolak
      this.selectedStudent.status = "Ditolak"
      
      this.toastMessage = 'Jurnal ditolak dengan komentar'
      this.toastType = 'error'
      this.showToast = true
      this.closeModal()
      
      setTimeout(() => {
        this.showToast = false
      }, 3000)
    },
    statusClass(status) {
      if (status === "Approved") return "bg-green-100 text-green-700"
      if (status === "Pending") return "bg-yellow-100 text-yellow-700"
      if (status === "Ditolak") return "bg-red-100 text-red-700"
      return "bg-gray-100 text-gray-700"
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* --- LAYOUT UTAMA --- */
.sm-dashboard {
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f8fafc;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

/* --- SIDEBAR --- */
.sm-sidebar {
  width: 260px;
  background: #0f172a;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 30px 15px;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  padding: 0 15px;
}

.brand-icon {
  background: #10b981;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.brand-name {
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
}

.nav-label {
  font-size: 0.7rem;
  color: #475569;
  font-weight: 800;
  text-transform: uppercase;
  margin: 25px 0 10px 15px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  color: #94a3b8;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.nav-item.active {
  background: #10b981;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);
}

.sidebar-footer {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 20px;
}

.logout-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f43f5e;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 15px;
}

/* --- MAIN CONTAINER & NAVBAR --- */
.sm-main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sm-navbar {
  height: 80px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  flex-shrink: 0;
}

.nb-title h2 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
}

.nb-title p {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 2px;
}

.nb-right {
  display: flex;
  align-items: center;
  gap: 25px;
}

.notif-wrapper {
  position: relative;
  color: #64748b;
  font-size: 1.3rem;
  cursor: pointer;
}

.pulse-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background: #f43f5e;
  border-radius: 50%;
  border: 2px solid white;
}

.divider {
  width: 1px;
  height: 32px;
  background: #e2e8f0;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #1e293b;
  display: block;
}

.user-status {
  font-size: 0.75rem;
  color: #10b981;
  font-weight: 700;
}

.user-img {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  object-fit: cover;
}

/* --- CONTENT AREA & TABLE --- */
.sm-content-area {
  padding: 35px 40px;
  overflow-y: auto;
}

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

/* --- BADGES & BUTTONS --- */
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

.status-badge.approved {
  background: #ecfdf5;
  color: #10b981;
  font-weight: 600;
}

/* --- TOMBOL REVIEW --- */
.btn-review {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-review:hover:not(:disabled) {
  background: #2563eb;
}

.btn-review:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  opacity: 0.6;
}

/* --- MODAL --- */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #1e293b;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
}

.modal-body {
  padding: 20px;
}

/* --- ACTION GROUP --- */
.action-group {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.btn-approve {
  flex: 1;
  background: #10b981;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-approve:hover {
  background: #059669;
}

.btn-reject-action {
  flex: 1;
  background: #ef4444;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-reject-action:hover {
  background: #dc2626;
}

/* --- REJECT FORM --- */
.reject-form {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
}

.reject-form label {
  display: block;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
}

.reject-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.95rem;
  resize: vertical;
  outline: none;
}

.reject-form textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-submit-reject {
  width: 100%;
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
  transition: 0.3s;
}

.btn-submit-reject:hover:not(:disabled) {
  background: #dc2626;
}

.btn-submit-reject:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
}

/* --- TOAST NOTIFICATION --- */
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 24px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
  z-index: 1100;
}

.toast.success {
  background: #10b981;
}

.toast.error {
  background: #ef4444;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.sm-action-btns {
  display: flex;
  gap: 8px;
}

.btn-verif {
  background: #0bf574;
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

.btn-reject {
  background: #f90000;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-verif:hover {
  opacity: 0.8;
}

/* --- STUDENT INFO --- */
.student-info {
  margin-bottom: 20px;
}

.student-info p {
  margin-bottom: 8px;
  color: #374151;
}

.student-info p strong {
  color: #1f2937;
  margin-right: 8px;
}

.student-photo {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  margin: 10px 0;
  border: 2px solid #e5e7eb;
}

/* Pagination */
.sm-pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

/* --- RESPONSIVE --- */
@media (max-width: 800px) {
  .sm-sidebar {
    width: 80px;
    padding: 30px 10px;
  }
  .brand-name,
  .nav-item span,
  .nav-label,
  .logout-btn span,
  .user-info {
    display: none;
  }
  .sm-navbar,
  .sm-content-area {
    padding: 0 20px;
  }
}
</style>
