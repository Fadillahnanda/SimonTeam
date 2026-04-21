import { createRouter, createWebHistory } from 'vue-router'

// layouts public
import PublicLayout from '../layouts/indexlayouts.vue'

// Public Views
import HomeView from '../views/homeView.vue'
import AppLogin from '../views/login.vue'
import AboutView from '../views/about.vue'
import ContactView from '../views/contact.vue'
import Chatbox from '../views/chatbox.vue'

// layouts admin
// import Adminlayouts from '../layouts/adminlayouts.vue'
import HomeAdmin from '../views/Admin/homeAdmin.vue'
import AdataSiswa from '../views/Admin/dataSiswa.vue'
import AdataGuru from '../views/Admin/dataGuru.vue'
import AdataPKL from '../views/Admin/datapkl.vue'
import Aprofile from '../views/Admin/profileadmin.vue'
import Tambahsiswa from '../views/Admin/tambahsiswa.vue'
import Tambahguru from '../views/Admin/tambahguru.vue'
import Tambahpkl from '../views/Admin/tambahpkl.vue'
import Editsiswa from '../views/Admin/editsiswa.vue'
import Editguru from '../views/Admin/editguru.vue'
import Editpkl from '../views/Admin/editpkl.vue'
import Aksespengguna from '../views/Admin/aksespengguna.vue'

// Data Guru
import HomeGuru from '../views/Guru/homeGuru.vue'
import Siswa from '../views/Guru/siswa.vue'
import Laporan from '../views/Guru/laporan.vue'

// Data siswa
import Homesiswa from '../views/Murid/homesiswa.vue'
import Absensiswa from '../views/Murid/absensisiswa.vue'
import jurnalsiswa from '../views/Murid/jurnalsiswa.vue'
import Doklsiswa from '../views/Murid/dokumentasiSiswa.vue'
import Profilesiswa from '../views/Murid/profilesiswa.vue'

// Data PKL
import Homepkl from '../views/PKL/homepkl.vue'
import Dataabsensipkl from '../views/PKL/dataAbsensi.vue'
import Jurnalpkl from '../views/PKL/jurnalpkl.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Halaman Login
    { path: '/login', name: 'Login', component: AppLogin },
    // halaman public
    {
      path: '/',
      name: 'indexlayout',
      component: PublicLayout,
      children: [
        { path: '/', name: 'Home', component: HomeView },

        { path: '/about', name: 'About', component: AboutView },
        { path: '/contact', name: 'Contact', component: ContactView },
        { path: '/chatbox', name: 'Chatbox', component: Chatbox },
        { path: '/homeguru', name: 'HomeGuru', component: HomeGuru },
      ],
    },
    // user admin
    { path: '/admin', name: 'HomeAdmin', component: HomeAdmin },
    { path: '/datasiswa', name: 'DataSiswa', component: AdataSiswa },
    { path: '/dataguru', name: 'DataGuru', component: AdataGuru },
    { path: '/datapkl', name: 'DataPKL', component: AdataPKL },
    { path: '/profile', name: 'Profile', component: Aprofile },
    { path: '/tambahsiswa', name: 'TambahSiswa', component: Tambahsiswa },
    { path: '/tambahguru', name: 'TambahGuru', component: Tambahguru },
    { path: '/tambahpkl', name: 'TambahPKL', component: Tambahpkl },
    { path: '/editsiswa', name: 'Editsiswa', component: Editsiswa },
    { path: '/editguru', name: 'Editguru', component: Editguru },
    { path: '/editpkl', name: 'EditPKL', component: Editpkl },
    { path: '/aksespengguna', name: 'Aksespengguna', component: Aksespengguna },

    // user siswa
    { path: '/homesiswa', name: 'Homesiswa', component: Homesiswa },
    { path: '/absensiswa', name: 'Absensiswa', component: Absensiswa },
    { path: '/jurnalsiswa', name: 'Jurnalsiswa', component: jurnalsiswa },
    { path: '/doksiswa', name: 'DokumentasiSiswa', component: Doklsiswa },
    { path: '/profilesiswa', name: 'ProfileSiswa', component: Profilesiswa },

    //user guru
    { path: '/guru', name: 'homeGuru', component: HomeGuru },
    { path: '/siswa', name: 'Siswa', component: Siswa },
    { path: '/laporan', name: 'Laporan', component: Laporan },

    // pkl
    { path: '/homepkl', name: 'HomePKL', component: Homepkl },
    { path: '/dataabsensipkl', name: 'DataAbsensi', component: Dataabsensipkl },
    { path: '/jurnalpkl', name: 'JurnalPKL', component: Jurnalpkl },
  ],
})

export default router
