// ===== DATA PORTFOLIO DANY PRASETYO =====
// Edit file ini untuk mengupdate konten portfolio

// --- PERSONAL INFO ---
export const personalInfo = {
  name: "Dany Prasetyo Adji",
  title: "UI/UX Designer & Web Developer",
  tagline: "Merancang antarmuka yang intuitif & membangun web yang modern — dari desain UI/UX hingga e-commerce.",
  bio: "Saya adalah seorang Fresh Graduate yang memiliki antusiasme tinggi di dunia Web Development. Memiliki pondasi yang kuat dalam React, Next.js, dan Laravel dari berbagai project studi dan eksplorasi pribadi. Saya selalu haus akan ilmu baru, terbiasa belajar dengan cepat, dan sangat bersemangat untuk memulai karir profesional serta berkontribusi nyata dalam tim.",
  photo: "/assets/projects/dany.jpeg", // ganti dengan foto asli
  location: "Yogyakarta, Indonesia",
  available: true,
  contact: {
    email: "danyadji90@gmail.com",         // ganti dengan email asli
    whatsapp: "6281915159186",         // ganti dengan no WA asli
    linkedin: "https://www.linkedin.com/in/dany-prasetyo-adji-135153251/",
    github: "https://github.com/danyadji",
  },
};

// --- STATS ---
export const stats = [
  { value: 3, suffix: "+", label: "Years Building", sublabel: "Sejak 2023" },
  { value: 6, suffix: "+", label: "Projects Built", sublabel: "Design Web & Fullstack Web" },
  { value: 3, suffix: "+", label: "Real Clients", sublabel: "Inspiring Furni, Woodelta, MMTC" },
];


// --- SKILLS ---
export const skills = {
  frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss" },
  ],
  backend: [
    { name: "Laravel", icon: "SiLaravel" },
    { name: "PHP", icon: "SiPhp" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "Node.js", icon: "SiNodedotjs" },
  ],
  cms: [
    { name: "WordPress", icon: "SiWordpress" },
    { name: "WooCommerce", icon: "SiWoocommerce" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "Figma", icon: "SiFigma" },
    { name: "VS Code", icon: "SiVscodium" },

  ],
};

// --- PROJECTS ---
// ⬇️ Cara tambah project baru: copy salah satu block {}, ubah isinya, simpan. Selesai!
export const projects = [
  {
    id: 1,
    title: "Smart Manajemen ATK",
    description: "Sistem manajemen perlengkapan kantor (ATK) dengan fitur prediksi kebutuhan stok.",

    // === DETAIL PAGE ===
    role: "Full Stack Developer - mengembangkan frontend, backend, database, serta melakukan deployment sistem.",

    longDescription: "Project ini dibangun untuk membantu pengelolaan perlengkapan kantor (ATK) di Sekolah Tinggi Multimedia Yogyakarta (MMTC). Sistem mencakup pengelolaan data barang, kategori, stok masuk dan keluar, serta pemantauan persediaan. Selain fungsi manajemen ATK, sistem dilengkapi fitur prediksi stok untuk membantu memperkirakan kebutuhan persediaan dan mendukung pengambilan keputusan dalam pengadaan barang.",

    features: [
      "Manajemen data barang dan kategori ATK",
      "Pencatatan stok masuk dan stok keluar",
      "Monitoring ketersediaan dan kondisi stok",
      "Prediksi kebutuhan stok ATK",
      "Dashboard informasi dan statistik persediaan",
      "Laporan dan rekapitulasi data ATK",
      "Manajemen pengguna dan hak akses",
    ],

    challenges: "Tantangan utama dalam pengembangan sistem adalah mengelola perubahan stok agar data persediaan tetap konsisten serta mengimplementasikan fitur prediksi yang dapat membantu memperkirakan kebutuhan ATK. Solusinya adalah merancang alur pencatatan stok yang terstruktur dan mengolah data historis penggunaan ATK sebagai dasar dalam proses prediksi.",

    images: [
      "/assets/projects/A1.png",
      "/assets/projects/A2.png",
      "/assets/projects/A3.png",
      "/assets/projects/A4.png",
      "/assets/projects/A7.png",
      "/assets/projects/A5.png",
      "/assets/projects/A6.png",
      // Tambahkan path gambar lainnya di sini
    ],
    // === CARD (beranda) ===
    image: "/assets/projects/A8.png",
    tech: ["Laravel", "Tailwind", "MySQL", "Figma"],
    demo: "https://portalasetstmm.my.id/login",         // ← ganti dengan URL demo/website live asli
    instagram: "#",    // ← ganti dengan URL Instagram postingan/akun project
    github: "#",       // ← ganti dengan URL GitHub asli
    featured: true,
  },
  {
    id: 2,
    title: "AI Shopee Competitor Analysis Dashboard",
    description: "Dashboard analisis kompetitor Shopee dengan dukungan AI Gemini untuk menghasilkan insight dari data produk.",

    // === DETAIL PAGE ===
    role: "Full Stack Developer - mengembangkan dashboard analisis, integrasi API Gemini, pengolahan data, serta perancangan database dan antarmuka.",

    longDescription: "Project ini dibangun untuk membantu menganalisis data produk dan kompetitor di Shopee dalam satu dashboard. Sistem mengolah berbagai informasi produk seperti harga, rating, jumlah ulasan, penjualan, dan informasi lainnya untuk memberikan gambaran mengenai performa kompetitor. Data tersebut kemudian dianalisis menggunakan AI Gemini untuk menghasilkan insight dan rekomendasi yang lebih mudah dipahami.",

    features: [
      "Dashboard analisis data produk dan kompetitor Shopee",
      "Perbandingan harga dan performa produk kompetitor",
      "Analisis rating dan jumlah ulasan produk",
      "Visualisasi data dalam bentuk grafik dan statistik",
      "Integrasi Gemini AI untuk analisis dan insight otomatis",
      "Ringkasan hasil analisis berdasarkan data produk",
      "Rekomendasi dan insight untuk membantu pengambilan keputusan",
    ],

    challenges: "Tantangan utama dalam pengembangan sistem adalah mengolah berbagai data produk menjadi informasi yang mudah dipahami serta mengintegrasikan AI Gemini agar dapat menghasilkan analisis yang relevan berdasarkan data. Solusinya adalah melakukan pengolahan dan penyusunan data terlebih dahulu sebelum dikirim ke Gemini API, kemudian menampilkan hasil analisis dalam format yang terstruktur pada dashboard.",

    images: [
      "/assets/projects/B1.png",
      "/assets/projects/B2.png",
      "/assets/projects/B3.png",
      "/assets/projects/B4.png",
      "/assets/projects/B5.png",

      // Tambahkan path gambar lainnya di sini
    ],

    image: "/assets/projects/B6.png",
    tech: ["Next.JS", "React", "MySQL"],
    demo: "#",
    instagram: "#",
    github: "https://github.com/danyadji/Market-Intelligence-Competitor-Analysis-Dashboard",
    featured: false,
  },
  {
    id: 3,
    title: "Javanese Classic Digital Wedding Invitation",
    description: "Undangan pernikahan digital dengan konsep visual Jawa klasik yang elegan dan responsif.",

    // === DETAIL PAGE ===
    role: "Frontend Developer - mengembangkan seluruh antarmuka menggunakan React dan Tailwind CSS serta mengimplementasikan desain visual bernuansa Jawa klasik.",

    longDescription: "Project ini merupakan website undangan pernikahan digital yang dirancang dengan mengangkat konsep budaya Jawa klasik. Tampilan menggabungkan elemen visual tradisional Jawa dengan desain modern untuk menciptakan pengalaman undangan yang elegan, personal, dan mudah diakses melalui berbagai perangkat. Website dirancang responsif agar dapat digunakan dengan nyaman pada perangkat desktop maupun mobile.",

    features: [
      "Landing page dengan desain bernuansa Jawa klasik",
      "Informasi pasangan dan profil keluarga",
      "Detail waktu dan lokasi acara pernikahan",
      "Galeri foto pasangan",
      "Countdown menuju hari pernikahan",
      "Integrasi Google Maps untuk lokasi acara",
      "RSVP dan konfirmasi kehadiran tamu",
      "Responsive design untuk desktop dan mobile",
    ],


    images: [
      "/assets/projects/C1.png",
      "/assets/projects/C2.png",
      "/assets/projects/C3.png",
      "/assets/projects/C4.png",
      // Tambahkan path gambar lainnya di sini
    ],
    image: "/assets/projects/C5.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "#",
    instagram: "#",
    github: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Diamora Invitation - SaaS Wedding Invitation",
    description: "Sistem undangan pernikahan digital dengan desain modern.",

    // === DETAIL PAGE ===
    role: "Web Developer - mengembangkan sistem undangan pernikahan digital menggunakan Laravel, React.js, Tailwind CSS, dan MySQL. Sistem mencakup manajemen template undangan, kustomisasi desain, halaman RSVP, dan fitur administrasi.",

    longDescription: "Project ini merupakan sistem undangan pernikahan digital yang dirancang untuk memudahkan pasangan dalam membuat dan mengelola undangan pernikahan secara online. Sistem dibangun menggunakan Laravel dan React.js dengan desain modern serta fitur-fitur lengkap untuk mendukung kebutuhan undangan digital.",

    features: [
      "Katalog produk furniture",
      "Manajemen produk dan kategori",
      "Detail produk dengan galeri gambar",
      "Keranjang belanja dan checkout",
      "Manajemen pesanan melalui WooCommerce",
      "Integrasi metode pembayaran dengan payment gateway Midtrans",
      "Responsive design untuk desktop dan mobile",
    ],
    images: [
      "/assets/projects/17.png",
      "/assets/projects/18.png",
      "/assets/projects/19.png",
      "/assets/projects/20.png",
      "/assets/projects/21.png",
      "/assets/projects/22.png",
      "/assets/projects/23.png",
      "/assets/projects/24.png",
    ],

    image: "/assets/projects/diamoraa.png",
    tech: ["Laravel", "React.js", "Tailwind CSS", "MySQL"],
    demo: "#",
    instagram: "https://www.instagram.com/diamora.invitation?igsi=MXJvNHN2NnZneTN4",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Inspiring Furni - Furniture E-Commerce",
    description: "Website e-commerce furniture berbasis WordPress untuk menampilkan katalog dan mendukung penjualan produk secara online.",

    // === DETAIL PAGE ===
    role: "Web Developer - mengembangkan dan mengelola website e-commerce menggunakan WordPress, termasuk pengelolaan produk, penyesuaian tampilan, dan optimasi pengalaman pengguna.",

    longDescription: "Project ini merupakan website e-commerce untuk Inspiring Furni yang bergerak di bidang furniture. Website dirancang sebagai media katalog sekaligus platform penjualan online untuk menampilkan berbagai produk furniture. Pengembangan berfokus pada penyusunan katalog produk, tampilan yang responsif, serta alur pengguna yang sederhana agar pelanggan dapat menemukan informasi produk dan melakukan pemesanan dengan mudah.",

    features: [
      "Katalog produk furniture",
      "Manajemen produk dan kategori",
      "Halaman detail produk",
      "Galeri foto produk",
      "Keranjang belanja dan checkout",
      "Manajemen pesanan",
      "Informasi pengiriman",
      "Responsive design untuk desktop dan mobile",
    ],

    images: [
      "/assets/projects/if/1.png",
      "/assets/projects/if/25.png",
      "/assets/projects/if/26.png",
      "/assets/projects/if/27.png",
    ],

    image: "/assets/projects/if/1.png",
    tech: ["Wordpres", "Woocomerce", "Midtrans", "Bitship"],
    demo: "#",
    instagram: "https://www.instagram.com/inspiringfurni.id?igsi=Z3k0bHU3dnl5dWhq",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Woodelta - Furniture E-Commerce",
    description: "Website e-commerce furniture berbasis WordPress untuk menampilkan katalog dan mendukung penjualan produk secara online.",

    // === DETAIL PAGE ===
    role: "Web Developer - mengembangkan dan mengelola website e-commerce menggunakan WordPress, termasuk pengelolaan produk, penyesuaian tampilan, dan optimasi pengalaman pengguna.",

    longDescription: "Project ini merupakan website e-commerce untuk Woodelta yang bergerak di bidang furniture. Website dirancang sebagai media katalog sekaligus platform penjualan online untuk menampilkan berbagai produk furniture. Pengembangan berfokus pada penyusunan katalog produk, tampilan yang responsif, serta alur pengguna yang sederhana agar pelanggan dapat menemukan informasi produk dan melakukan pemesanan dengan mudah.",

    features: [
      "Katalog produk furniture",
      "Manajemen produk dan kategori",
      "Halaman detail produk",
      "Galeri foto produk",
      "Keranjang belanja dan checkout",
      "Manajemen pesanan",
      "Informasi pengiriman",
      "Responsive design untuk desktop dan mobile",
    ],

    images: [
      "/assets/projects/woodelta/1.png",
      "/assets/projects/woodelta/28.png",
      "/assets/projects/woodelta/29.png",
      "/assets/projects/woodelta/30.png",
    ],

    image: "/assets/projects/woodelta/1.png",
    tech: ["Wordpres", "Woocomerce", "Midtrans", "Bitship"],
    demo: "#",
    instagram: "https://www.instagram.com/woodelta.co?igsi=MXhmaGVhb2p6b2s3aQ==",
    github: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Meubel jati Abror - Furniture E-Commerce",
    description: "Website e-commerce furniture berbasis WordPress untuk menampilkan katalog dan mendukung penjualan produk secara online.",

    // === DETAIL PAGE ===
    role: "Web Developer - mengembangkan dan mengelola website e-commerce menggunakan WordPress, termasuk pengelolaan produk, penyesuaian tampilan, dan optimasi pengalaman pengguna.",

    longDescription: "Project ini merupakan website e-commerce untuk Meubel jati Abror yang bergerak di bidang furniture. Website dirancang sebagai media katalog sekaligus platform penjualan online untuk menampilkan berbagai produk furniture. Pengembangan berfokus pada penyusunan katalog produk, tampilan yang responsif, serta alur pengguna yang sederhana agar pelanggan dapat menemukan informasi produk dan melakukan pemesanan dengan mudah.",

    features: [
      "Katalog produk furniture",
      "Manajemen produk dan kategori",
      "Halaman detail produk",
      "Galeri foto produk",
      "Keranjang belanja dan checkout",
      "Manajemen pesanan",
      "Informasi pengiriman",
      "Responsive design untuk desktop dan mobile",
    ],


    images: [
      "/assets/projects/G1.png",
    ],

    image: "/assets/projects/blog.jpg",
    tech: ["Wordpres", "Woocomerce", "Midtrans", "Bitship"],
    demo: "#",
    instagram: "https://www.instagram.com/meubel_jatiabror?igsi=aWU1NnJieHFpank3",
    github: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Rosalia Indah - Travel & Bus Booking Website Redesign",
    description: "Website e-commerce furniture berbasis WordPress untuk menampilkan katalog dan mendukung penjualan produk secara online.",

    // === DETAIL PAGE ===
    role: "Web Developer - mengembangkan dan mengelola website e-commerce menggunakan WordPress, termasuk pengelolaan produk, penyesuaian tampilan, dan optimasi pengalaman pengguna.",

    longDescription: "Project ini merupakan konsep desain landing page untuk Rosalia Indah yang berfokus pada penyajian informasi layanan perjalanan secara menarik dan mudah dipahami. Desain mencakup informasi destinasi, layanan perjalanan, pilihan bus, serta informasi pemesanan. Pengembangan desain berfokus pada visual yang menarik, struktur informasi yang jelas, dan pengalaman pengguna yang nyaman untuk membantu pengguna mengenal layanan dan melakukan pemesanan perjalanan.",
    features: [
      "Katalog produk furniture",
      "Manajemen produk dan kategori",
      "Halaman detail produk",
      "Galeri foto produk",
      "Keranjang belanja dan checkout",
      "Manajemen pesanan",
      "Informasi pengiriman",
      "Responsive design untuk desktop dan mobile",
    ],


    images: [
      "/assets/projects/G1.png",
      "/assets/projects/H1.png",
      "/assets/projects/H2.png",
      "/assets/projects/H3.png",
      "/assets/projects/H4.png",
      "/assets/projects/H5.png",
    ],

    image: "/assets/projects/G1.png",
    tech: ["Figma"],
    demo: "https://www.figma.com/design/LOv7raRfp5XGzMBlzJTi3A/Rosalia-Indah-Web-Travel.?node-id=0-1&t=PAp0WiTzy2K3Iyv1-1",
    instagram: "#",
    github: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Obelix Sea View Web Design",
    description: "Website e-commerce furniture berbasis WordPress untuk menampilkan katalog dan mendukung penjualan produk secara online.",

    // === DETAIL PAGE ===
    role: "Web Developer - mengembangkan dan mengelola website e-commerce menggunakan WordPress, termasuk pengelolaan produk, penyesuaian tampilan, dan optimasi pengalaman pengguna.",

    longDescription: "Project ini merupakan desain website untuk Obelix Sea View yang dirancang untuk menampilkan informasi destinasi wisata dan kuliner secara menarik dan mudah dipahami. Website mencakup landing page, informasi mengenai destinasi, serta menu makanan dan minuman. Desain berfokus pada penyajian visual yang menarik, struktur informasi yang jelas, dan pengalaman pengguna yang nyaman untuk membantu pengunjung mengenal destinasi serta layanan yang tersedia.",
    features: [
      "Katalog produk furniture",
      "Manajemen produk dan kategori",
      "Halaman detail produk",
      "Galeri foto produk",
      "Keranjang belanja dan checkout",
      "Manajemen pesanan",
      "Informasi pengiriman",
      "Responsive design untuk desktop dan mobile",
    ],


    images: [
      "/assets/projects/I6.png",
      "/assets/projects/I2.png",
      "/assets/projects/I3.png",
      "/assets/projects/I4.png",
      "/assets/projects/I5.png",

    ],

    image: "/assets/projects/J9.png",
    tech: ["Figma"],
    demo: "https://www.figma.com/design/1g81mCN3sCc7O3vHBfMaR9/IMK-OBELIX?node-id=0-1&t=5BmL9GU19QMvWXiP-1",
    instagram: "#",
    github: "#",
    featured: false,
  },
  {
    id: 10,
    title: "Netory - Web Network Service Design",
    description: "Website e-commerce furniture berbasis WordPress untuk menampilkan katalog dan mendukung penjualan produk secara online.",

    // === DETAIL PAGE ===
    role: "Web Developer - mengembangkan dan mengelola website e-commerce menggunakan WordPress, termasuk pengelolaan produk, penyesuaian tampilan, dan optimasi pengalaman pengguna.",

    longDescription: "Project ini merupakan konsep desain website untuk Netory, sebuah layanan jaringan yang dirancang untuk memudahkan pelanggan dalam menemukan dan memilih layanan internet yang sesuai dengan kebutuhan mereka. Website menampilkan berbagai pilihan paket, informasi layanan, serta detail produk secara terstruktur. Desain berfokus pada penyajian informasi yang jelas, visual yang menarik, dan alur pengguna yang sederhana untuk menciptakan pengalaman pelanggan yang nyaman dalam memilih layanan.",
    features: [
      "Katalog produk furniture",
      "Manajemen produk dan kategori",
      "Halaman detail produk",
      "Galeri foto produk",
      "Keranjang belanja dan checkout",
      "Manajemen pesanan",
      "Informasi pengiriman",
      "Responsive design untuk desktop dan mobile",
    ],


    images: [
      "/assets/projects/C1.png",
      "/assets/projects/11.png",
      "/assets/projects/12.png",
      "/assets/projects/13.png",
      "/assets/projects/14.png",
      "/assets/projects/15.png",
    ],

    image: "/assets/projects/J1.png",
    tech: ["Figma"],
    demo: "https://www.figma.com/design/4lasyX4pALoLni6uqTVysN/Netory-GMEDIA?node-id=0-1&t=1gYAhd7Vl91sWc1V-1",
    instagram: "#",
    github: "#",
    featured: false,
  }

  // ============================================================
  // ⬇️ TAMBAH PROJECT BARU DI SINI — tinggal copy block di atas!
  // ============================================================
];


// --- SERVICES ---
// ⬇️ Data untuk ServicesSection (komponen belum dipakai di halaman)
export const services = [
  {
    id: 1,
    icon: "Code2",
    title: "Web Development",
    description: "Membangun website dan web app modern dengan React, Next.js, dan Laravel.",
    dark: false,
  },
  {
    id: 2,
    icon: "Palette",
    title: "UI/UX Design",
    description: "Merancang antarmuka yang responsif, clean, dan berfokus pada pengalaman pengguna.",
    dark: true,
  },
  {
    id: 3,
    icon: "Globe",
    title: "WordPress & E-Commerce",
    description: "Pembuatan dan pengelolaan website bisnis serta toko online berbasis WordPress.",
    dark: false,
  },
];

// --- EDUCATION ---
// ⬇️ Ganti dengan data pendidikan asli kamu
export const education = [
  {
    id: 1,
    degree: "Sarjana Sistem Informasi",              // ← ganti dengan gelar asli
    institution: "Universitas Teknologi Yogyakarta",            // ← ganti dengan nama kampus
    period: "Septermbaer 2022 – 2026",                     // ← ganti dengan tahun
    gpa: "3.51",                                // ← ganti dengan IPK asli (hapus baris ini jika tidak ingin tampilkan)
    description: "Fokus studi pada pengembangan perangkat lunak, algoritma, dan rekayasa web. Aktif di UKM Robotika UTY dan Mengikuti kegiatan intern.",
  },
];

// --- EXPERIENCE ---
// ⬇️ Ganti dengan pengalaman asli kamu (magang, organisasi, freelance, dll)
export const experience = [
  {
    id: 1,
    type: "selfemployed",
    title: "Owner & Web Development",
    company: "Inspiring Furni",
    period: "2022 – Sekarang",
    description: "Mengembangkan Dashboard & memelihara website perusahaan menggunakan Laravel dan WordPress. Merancang antarmuka yang responsif dan user-friendly untuk meningkatkan pengalaman pelanggan.",
    tech: ["WordPress", "WooCommerce", "Laravel", "React", "MySQL"],
  },
  {
    id: 2,
    type: "internship",
    title: "Web Development Intern",
    company: "Sekolah Tinggi Multi Media \"MMTC\" Yogyakarta",
    period: "Sep 2025 – Jun 2026",
    description: "Menganalisis kebutuhan sistem dan proses bisnis. Merancang UI/UX yang responsif untuk aplikasi web. Mengembangkan Dashboard Admin dan Karyawan Untuk Keperluan Manajemen Inventaris",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "Figma"],
  },
  {
    id: 3,
    type: "internship",
    title: "UI/UX Designer Intern",
    company: "GMEDIA",
    period: "Sep 2025 – Feb 2026",
    description: "Merancang desain antarmuka (UI) dan pengalaman pengguna (UX) untuk berbagai kebutuhan project menggunakan Figma.",
    tech: ["Figma"],
  },
  {
    id: 4,
    type: "parttime",
    title: "Web Development",
    company: "Woodelta.co",
    period: "Jan 2024 – Nov 2024",
    description: "Bertanggung jawab atas desain dan pengembangan website perusahaan berbasis WordPress.",
    tech: ["WordPress", "WooCommerce"],
  },
  {
    id: 5,
    type: "parttime",
    title: "Administrator Database",
    company: "CV INPOREAL CRAFT",
    period: "Mei 2024 – Sep 2024",
    description: "Mengelola, memelihara, dan melakukan administrasi database perusahaan menggunakan MySQL.",
    tech: ["MySQL", "Database Administration"],
  },

];

// --- CERTIFICATIONS ---
// ⬇️ Tambahkan sertifikat kursus, bootcamp, atau kompetisi kamu
export const certifications = [
  {
    id: 1,
    title: "React - The Complete Guide",       // ← ganti dengan nama sertifikat
    issuer: "Udemy",                           // ← nama platform / lembaga
    year: "2023",
    url: "#",                                  // ← link verifikasi sertifikat
  },
  {
    id: 2,
    title: "Laravel 10 Fundamentals",
    issuer: "Dicoding",
    year: "2023",
    url: "#",
  },
  // ← Tambah sertifikat lain di sini
];

