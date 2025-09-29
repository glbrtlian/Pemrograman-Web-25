// Ambil elemen tombol dan container daftar jadwal
const loadScheduleBtn = document.getElementById('loadScheduleBtn');
const scheduleList = document.getElementById('scheduleList');
const darkModeToggle = document.getElementById('darkModeToggle');

// Contoh data dummy jadwal lab (jika tidak menggunakan API)
const dummySchedule = [
  { lab: "Lab Komputer 1", waktu: "Senin, 08:00 - 10:00", kegiatan: "Praktikum Pemrograman" },
  { lab: "Lab Network", waktu: "Selasa, 10:00 - 12:00", kegiatan: "Praktikum Jarkom" },
  { lab: "Lab WEB", waktu: "Rabu, 13:00 - 15:00", kegiatan: "Praktikum PEMWEB" },
  { lab: "Lab Network 2", waktu: "Kamis, 08:00 - 10:00", kegiatan: "Praktikum Jaringan Lanjutan" },
  { lab: "Lab Fisika", waktu: "Jumat, 10:00 - 12:00", kegiatan: "Praktikum Mekanika" }
];

// Fungsi untuk menampilkan jadwal dari data array
function displaySchedule(data) {
  scheduleList.innerHTML = ''; // Bersihkan list dulu
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.lab} - ${item.waktu} - ${item.kegiatan}`;
    scheduleList.appendChild(li);
  });
}

// Fungsi fetch jadwal lab dari API (contoh menggunakan dummy API JSONPlaceholder)
async function fetchSchedule() {
  try {
    loadScheduleBtn.disabled = true;
    loadScheduleBtn.textContent = 'Memuat...';

    // Contoh fetch dari API dummy (ganti dengan API asli jika ada)
    // const response = await fetch('https://api.example.com/lab-schedule');
    // const data = await response.json();

    // Karena tidak ada API nyata, kita pakai dummySchedule sebagai data
    await new Promise(resolve => setTimeout(resolve, 1000)); // simulasi delay

    displaySchedule(dummySchedule);

    loadScheduleBtn.textContent = 'Muat Jadwal Lab';
    loadScheduleBtn.disabled = false;
  } catch (error) {
    scheduleList.innerHTML = '<li>Gagal memuat jadwal lab.</li>';
    loadScheduleBtn.textContent = 'Muat Jadwal Lab';
    loadScheduleBtn.disabled = false;
    console.error('Error fetching schedule:', error);
  }
}

// Event listener tombol muat jadwal
loadScheduleBtn.addEventListener('click', fetchSchedule);

// Event listener toggle dark mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});