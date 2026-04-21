<script setup>
import { ref, onMounted, nextTick } from 'vue'

const messages = ref([
  {
    id: 1,
    text: 'Halo! Ada yang bisa kami bantu hari ini?',
    sender: 'received',
    timestamp: new Date(Date.now() - 5000),
  },
])

const chatInput = ref('')
const chatDisplay = ref(null)
const isLoading = ref(false)

// Auto-scroll ke pesan paling bawah
const scrollToBottom = async () => {
  await nextTick()
  if (chatDisplay.value) {
    chatDisplay.value.scrollTop = chatDisplay.value.scrollHeight
  }
}

// Format waktu pesan
const formatTime = (date) => {
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Fungsi kirim pesan
const kirimPesan = async () => {
  const pesanTeks = chatInput.value.trim()

  if (!pesanTeks) {
    return
  }

  // Tambah pesan user
  messages.value.push({
    id: messages.value.length + 1,
    text: pesanTeks,
    sender: 'sent',
    timestamp: new Date(),
  })

  // Bersihkan input
  chatInput.value = ''

  // Scroll ke bawah
  await scrollToBottom()

  // Simulasi balasan dari support team
  isLoading.value = true
  setTimeout(() => {
    messages.value.push({
      id: messages.value.length + 1,
      text: 'Terima kasih atas pertanyaannya! Tim support kami akan segera membalasnya.',
      sender: 'received',
      timestamp: new Date(),
    })
    isLoading.value = false
    scrollToBottom()
  }, 1500)
}

// Tekan Enter untuk kirim
const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    kirimPesan()
  }
}

// Lifecycle
onMounted(() => {
  scrollToBottom()
})
</script>
<template>
  <div class="chat-wrapper">
    <div class="chat-header">
      <div style="width: 40px; height: 40px; background: #ccc; border-radius: 50%"></div>
      <h2>Support Team Sigma</h2>
    </div>

    <div ref="chatDisplay" class="chat-display">
      <div v-for="msg in messages" :key="msg.id" :class="['bubble', msg.sender]">
        <div class="message-text">{{ msg.text }}</div>
        <div class="message-time">{{ formatTime(msg.timestamp) }}</div>
      </div>

      <!-- Loading indicator -->
      <div v-if="isLoading" class="bubble received loading">
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="chat-footer">
      <input
        v-model="chatInput"
        type="text"
        placeholder="Ketik pesan..."
        autocomplete="off"
        @keypress="handleKeyPress"
      />
      <button @click="kirimPesan" :disabled="!chatInput.trim() || isLoading">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif; /* Mengikuti gaya font modern website kamu */
}

body {
  background-color: #f8fafc; /* Latar belakang soft sesuai gambar */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.chat-wrapper {
  width: 100%;
  max-width: 400px;
  height: 550px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); /* Shadow lebih halus */
  border-radius: 16px; /* Corner lebih bulat sesuai tombol Pelajari Fitur */
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

/* Header Mengikuti Warna Tombol "Mulai Sekarang" */
.chat-header {
  background: #2563eb;
  color: white;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-header h2 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

#chat-display {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #ffffff; /* Bersih tanpa pattern agar lebih profesional */
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-display {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bubble {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
}

.message-text {
  margin-bottom: 4px;
}

.message-time {
  font-size: 12px;
  opacity: 0.7;
}

/* Bubble dari tim/admin (Abu-abu muda sesuai tombol sekunder) */
.bubble.received {
  background: #f1f5f9;
  color: #1e293b;
  align-self: flex-start;
  border-bottom-left-radius: 2px;
}

.bubble.received .message-time {
  color: #64748b;
}

/* Bubble dari user (Biru sesuai tema utama) */
.bubble.sent {
  background: #2563eb;
  color: white;
  align-self: flex-end;
  border-bottom-right-radius: 2px;
}

.bubble.sent .message-time {
  color: rgba(255, 255, 255, 0.8);
}

/* Loading indicator */
.bubble.loading {
  padding: 12px 16px;
}

.dots {
  display: flex;
  gap: 4px;
  align-items: center;
}

.dots span {
  width: 8px;
  height: 8px;
  background: #94a3b8;
  border-radius: 50%;
  animation: bounce 1.4s infinite;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    opacity: 0.5;
    transform: translateY(0);
  }
  40% {
    opacity: 1;
    transform: translateY(-8px);
  }
}

.chat-footer {
  padding: 15px;
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #f1f5f9;
}

.chat-footer input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.2s;
}

.chat-footer input:focus {
  border-color: #2563eb;
}

/* Tombol Kirim */
.chat-footer button {
  background: #2563eb;
  color: white;
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}

.chat-footer button:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.chat-footer button:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
  transform: none;
}
</style>
