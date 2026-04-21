<script setup>
const { createApp } = Vue

createApp({
  data() {
    return {
      students: [],
      form: {
        nis: '',
        name: '',
        kelas: '',
      },
      isEdit: false,
    }
  },

  methods: {
    // 🔹 GET
    async getStudents() {
      const res = await fetch('http://localhost:3000/students')
      const data = await res.json()
      this.students = data
    },

    // 🔹 SUBMIT (POST / PUT)
    async submitForm() {
      if (this.isEdit) {
        // UPDATE
        await fetch(`http://localhost:3000/students?nis=${this.form.nis}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.form.name,
            kelas: this.form.kelas,
          }),
        })
      } else {
        // POST
        await fetch('http://localhost:3000/students', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        })
      }

      this.getStudents()
      this.resetForm()
    },

    // 🔹 DELETE
    async deleteSiswa(nis) {
      if (!confirm('Yakin ingin hapus?')) return

      await fetch(`http://localhost:3000/students?nis=${nis}`, {
        method: 'DELETE',
      })

      this.getStudents()
    },

    // 🔹 EDIT (ISI FORM)
    editSiswa(siswa) {
      this.form = { ...siswa }
      this.isEdit = true
    },

    // 🔹 RESET FORM
    resetForm() {
      this.form = {
        nis: '',
        name: '',
        kelas: '',
      }
      this.isEdit = false
    },
  },

  mounted() {
    this.getStudents()
  },
}).mount('#app')
</script>
<template>
  <div>
    <h2>Data Siswa</h2>

    <!-- FORM INPUT -->
    <input v-model="form.nis" placeholder="NIS" />
    <input v-model="form.name" placeholder="Nama" />
    <input v-model="form.kelas" placeholder="Kelas" />

    <button @click="submitForm">
      {{ isEdit ? 'Update' : 'Tambah' }}
    </button>

    <button v-if="isEdit" @click="resetForm">Batal</button>

    <hr />

    <!-- LIST DATA -->
    <table border="1" cellpadding="5">
      <tr>
        <th>NIS</th>
        <th>Nama</th>
        <th>Kelas</th>
        <th>Aksi</th>
      </tr>

      <tr v-for="siswa in students" :key="siswa.nis">
        <td>{{ siswa.nis }}</td>
        <td>{{ siswa.name }}</td>
        <td>{{ siswa.kelas }}</td>
        <td>
          <button @click="editSiswa(siswa)">Edit</button>
          <button @click="deleteSiswa(siswa.nis)">Hapus</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped></style>
