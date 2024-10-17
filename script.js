// script.js
// Ini javascript tombol download
        document.querySelectorAll('.download-link').forEach(function (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault(); // Mencegah perilaku default
                const downloadLink = button.getAttribute('data-link'); // Mengambil link dari data-link
                window.open(downloadLink, '_blank'); // Buka link di tab baru
            });
        });
// Menangani event klik pada tombol unduh
document.querySelectorAll('.download-btn').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default

        // Mengambil href dari tombol unduh
        const downloadLink = button.getAttribute('href');

        // Navigasi ke link tujuan
        window.location.href = downloadLink;
    });
});

// Array yang berisi link gambar iklan
const ads = [
    "iklan/iklan1.jpg", // URL iklan pertama
    "iklan/iklan2.jpg", // URL iklan kedua
    "iklan/iklan3.jpg",  // URL iklan ketiga
    "iklan/iklan4.jpg"  // URL iklan keempat
];

// Fungsi untuk menampilkan iklan secara random
function displayRandomAd() {
    const adIndex = Math.floor(Math.random() * ads.length); // Pilih index random
    const adImage = document.getElementById('ad-image'); // Ambil elemen gambar iklan
    adImage.src = ads[adIndex]; // Setel gambar ke iklan random yang dipilih
}

// Panggil fungsi saat halaman dimuat
window.onload = () => {
    displayRandomAd(); // Tampilkan iklan pertama kali saat halaman dimuat
    setInterval(displayRandomAd, 15000); // Ganti iklan setiap 15 detik (15000 ms)
};

// JavaScript untuk Tombol Hamburger dan Sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const sectionLinks = document.querySelectorAll('.sidebar ul li a');
const sections = document.querySelectorAll('.section-content');

// Event listener untuk toggle hamburger dan sidebar
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle animasi hamburger
    sidebar.classList.toggle('active'); // Toggle tampilan sidebar
});

// Event listener untuk navigasi sidebar
sectionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah default link

        // Ambil target section
        const targetSection = e.target.getAttribute('data-section');

        // Sembunyikan semua konten section
        sections.forEach(section => section.classList.remove('active'));

        // Tampilkan konten yang diklik
        document.getElementById(targetSection).classList.add('active');
    });
});
// Seleksi semua elemen dengan class 'faq-title' untuk bagian FAQ
const faqTitles = document.querySelectorAll('.faq-title');

// Tambahkan event listener ke setiap judul FAQ
faqTitles.forEach(title => {
    title.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Ambil elemen berikutnya (jawaban)
        const arrow = this.querySelector('.arrow'); // Ambil elemen span panah

        // Toggle tampilan jawaban
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Sembunyikan jawaban
            arrow.innerHTML = '&#9660;'; // Ubah panah ke bawah
        } else {
            answer.style.display = 'block'; // Tampilkan jawaban
            arrow.innerHTML = '&#9650;'; // Ubah panah ke atas
        }
    });
});

// Seleksi semua elemen dengan class 'download-link' untuk bagian unduhan
const downloadButtons = document.querySelectorAll('.download-link');
// Tambahkan event listener ke setiap tombol "Unduh"
downloadButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link default
        const link = this.getAttribute('data-link'); // Ambil link dari data-link
        window.open(link, '_blank'); // Buka link di tab baru
    });
});