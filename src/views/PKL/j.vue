// Verifikasi Jurnal PKL - JavaScript Implementation
// Menggunakan DOM API untuk membuat semua elemen secara dinamis

// Data jurnal
let dataJurnal = [
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
    nama: "Ahmad",
    tanggal: "19/04/2026",
    kegiatan: "Instalasi Router",
    foto: "https://via.placeholder.com/150",
    status: "Approved"
  }
]

let selectedId = null

// Fungsi untuk membuat elemen dengan class dan atribut
function createElement(tag, className = '', attributes = {}) {
  const element = document.createElement(tag)
  if (className) element.className = className

  Object.keys(attributes).forEach(attr => {
    if (attr === 'textContent') {
      element.textContent = attributes[attr]
    } else if (attr === 'innerHTML') {
      element.innerHTML = attributes[attr]
    } else {
      element.setAttribute(attr, attributes[attr])
    }
  })

  return element
}

// Fungsi untuk menentukan class status
function statusClass(status) {
  if (status === "Approved") return "bg-green-100 text-green-700"
  if (status === "Pending") return "bg-yellow-100 text-yellow-700"
  if (status === "Ditolak") return "bg-red-100 text-red-700"
  return "bg-gray-100 text-gray-700"
}

// Fungsi untuk membuat tabel
function createTable() {
  const tableContainer = createElement('div', 'bg-white p-4 rounded shadow')

  const table = createElement('table', 'w-full text-sm')
  const thead = createElement('thead', 'border-b')
  const tbody = createElement('tbody')

  // Header tabel
  const headerRow = createElement('tr')
  const headers = ['Nama', 'Tanggal', 'Kegiatan', 'Status', 'Aksi']

  headers.forEach(headerText => {
    const th = createElement('th', 'text-left py-2', { textContent: headerText })
    headerRow.appendChild(th)
  })

  thead.appendChild(headerRow)
  table.appendChild(thead)
  table.appendChild(tbody)
  tableContainer.appendChild(table)

  // Set ID untuk tbody agar bisa diakses
  tbody.id = 'tableBody'

  return tableContainer
}

// Fungsi untuk membuat modal
function createModal() {
  const modal = createElement('div', 'hidden fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center')
  modal.id = 'modal'

  const modalContent = createElement('div', 'bg-white w-1/2 rounded-xl p-6')

  // Header modal
  const modalHeader = createElement('div', 'flex justify-between items-center mb-4')
  const title = createElement('h2', 'text-lg font-bold', { textContent: 'Review Jurnal' })
  const closeBtn = createElement('button', 'text-gray-500 text-xl', { textContent: '×' })
  closeBtn.onclick = closeModal

  modalHeader.appendChild(title)
  modalHeader.appendChild(closeBtn)

  // Body modal
  const modalBody = createElement('div')

  // Info nama
  const namaP = createElement('p')
  const namaStrong = createElement('strong', '', { textContent: 'Nama: ' })
  const namaSpan = createElement('span', '', { id: 'nama' })
  namaP.appendChild(namaStrong)
  namaP.appendChild(namaSpan)

  // Info tanggal
  const tanggalP = createElement('p')
  const tanggalStrong = createElement('strong', '', { textContent: 'Tanggal: ' })
  const tanggalSpan = createElement('span', '', { id: 'tanggal' })
  tanggalP.appendChild(tanggalStrong)
  tanggalP.appendChild(tanggalSpan)

  // Info kegiatan
  const kegiatanLabel = createElement('p', 'mt-2 font-medium', { textContent: 'Kegiatan:' })
  const kegiatanP = createElement('p', 'text-sm text-gray-600 mb-3', { id: 'kegiatan' })

  // Gambar
  const img = createElement('img', 'w-40 rounded mb-4', { id: 'foto' })

  // Textarea komentar
  const textarea = createElement('textarea', 'w-full border p-2 mb-4 text-sm', {
    id: 'komentar',
    placeholder: 'Tulis komentar...'
  })

  // Button container
  const buttonContainer = createElement('div', 'flex justify-end gap-2')

  const cancelBtn = createElement('button', 'bg-gray-400 text-white px-3 py-1 rounded', { textContent: 'Batal' })
  cancelBtn.onclick = closeModal

  const rejectBtn = createElement('button', 'bg-red-500 text-white px-3 py-1 rounded', { textContent: 'Tolak' })
  rejectBtn.onclick = reject

  const approveBtn = createElement('button', 'bg-green-600 text-white px-3 py-1 rounded', { textContent: 'Approve' })
  approveBtn.onclick = approve

  buttonContainer.appendChild(cancelBtn)
  buttonContainer.appendChild(rejectBtn)
  buttonContainer.appendChild(approveBtn)

  // Assemble modal body
  modalBody.appendChild(namaP)
  modalBody.appendChild(tanggalP)
  modalBody.appendChild(kegiatanLabel)
  modalBody.appendChild(kegiatanP)
  modalBody.appendChild(img)
  modalBody.appendChild(textarea)
  modalBody.appendChild(buttonContainer)

  // Assemble modal
  modalContent.appendChild(modalHeader)
  modalContent.appendChild(modalBody)
  modal.appendChild(modalContent)

  return modal
}

// Fungsi untuk render tabel
function renderTable() {
  const tbody = document.getElementById('tableBody')
  if (!tbody) return

  // Clear existing rows
  tbody.innerHTML = ''

  dataJurnal.forEach(item => {
    const row = createElement('tr', 'border-b')

    // Nama
    const namaCell = createElement('td', '', { textContent: item.nama })
    row.appendChild(namaCell)

    // Tanggal
    const tanggalCell = createElement('td', '', { textContent: item.tanggal })
    row.appendChild(tanggalCell)

    // Kegiatan
    const kegiatanCell = createElement('td', '', { textContent: item.kegiatan })
    row.appendChild(kegiatanCell)

    // Status
    const statusCell = createElement('td')
    const statusSpan = createElement('span', `${statusClass(item.status)} px-2 py-1 rounded text-xs`, {
      textContent: item.status
    })
    statusCell.appendChild(statusSpan)
    row.appendChild(statusCell)

    // Aksi
    const aksiCell = createElement('td')
    const reviewBtn = createElement('button', 'bg-blue-500 text-white px-2 py-1 rounded text-xs', {
      textContent: 'Review',
      onclick: () => openModal(item.id)
    })
    aksiCell.appendChild(reviewBtn)
    row.appendChild(aksiCell)

    tbody.appendChild(row)
  })
}

// Fungsi untuk membuka modal
function openModal(id) {
  const item = dataJurnal.find(d => d.id === id)
  if (!item) return

  selectedId = id

  const namaEl = document.getElementById('nama')
  const tanggalEl = document.getElementById('tanggal')
  const kegiatanEl = document.getElementById('kegiatan')
  const fotoEl = document.getElementById('foto')
  const komentarEl = document.getElementById('komentar')

  if (namaEl) namaEl.textContent = item.nama
  if (tanggalEl) tanggalEl.textContent = item.tanggal
  if (kegiatanEl) kegiatanEl.textContent = item.kegiatan
  if (fotoEl) fotoEl.src = item.foto
  if (komentarEl) komentarEl.value = ''

  const modal = document.getElementById('modal')
  if (modal) modal.classList.remove('hidden')
}

// Fungsi untuk menutup modal
function closeModal() {
  const modal = document.getElementById('modal')
  if (modal) modal.classList.add('hidden')
}

// Fungsi approve
function approve() {
  const item = dataJurnal.find(d => d.id === selectedId)
  if (item) {
    item.status = "Approved"
    closeModal()
    renderTable()
    alert("Jurnal disetujui ✅")
  }
}

// Fungsi reject
function reject() {
  const komentarEl = document.getElementById('komentar')
  const komentar = komentarEl ? komentarEl.value : ''

  if (!komentar.trim()) {
    alert("Komentar wajib diisi ❗")
    return
  }

  const item = dataJurnal.find(d => d.id === selectedId)
  if (item) {
    item.status = "Ditolak"
    closeModal()
    renderTable()
    alert("Jurnal ditolak ❌")
  }
}

// Fungsi inisialisasi - membuat semua elemen dan menambahkannya ke body
function init() {
  // Load Tailwind CSS
  const tailwindScript = createElement('script', '', { src: 'https://cdn.tailwindcss.com' })
  document.head.appendChild(tailwindScript)

  // Set body styles
  document.body.className = 'bg-gray-100 p-6'
  document.body.style.margin = '0'
  document.body.style.fontFamily = 'system-ui, sans-serif'

  // Title
  const title = createElement('h1', 'text-xl font-bold mb-4', { textContent: 'Verifikasi Jurnal PKL' })
  document.body.appendChild(title)

  // Table
  const table = createTable()
  document.body.appendChild(table)

  // Modal
  const modal = createModal()
  document.body.appendChild(modal)

  // Render initial table
  renderTable()
}

// Jalankan inisialisasi saat DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}