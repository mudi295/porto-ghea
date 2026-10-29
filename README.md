# Ghea Djanie — Creative Portfolio

Website portfolio React + Vite, Tailwind CSS, AOS, Framer Motion, dan Three.js via React Three Fiber.

## Fitur
- Landing page editorial pink/putih yang feminin tetapi profesional.
- Grid 4 kartu sejajar di desktop dan otomatis menjadi 2 kolom di tablet/mobile.
- Section video highlight besar dengan overlay pink pudar dan teks “Rah Arghea Adјanie”.
- Ornamen 3D interaktif/animated berbasis Three.js.
- Animasi scroll AOS dan micro-interaction Framer Motion.
- Galeri, prestasi, kolaborasi, layanan, serta kontak.
- Navbar mobile, layout responsif, dan placeholder foto lokal.
- Contact form memiliki validasi UI demo; belum mengirim pesan ke server.

## Cara menjalankan

Pastikan Node.js 18+ sudah terpasang.

```bash
npm install
npm run dev
```

Buka URL yang muncul di terminal. Untuk build produksi:

```bash
npm run build
npm run preview
```

## Tempat mengganti foto

Taruh foto milik sendiri pada folder `public/images/` dengan nama file berikut. Jika foto belum tersedia, desain akan menampilkan placeholder lembut dengan nama file yang dibutuhkan.

- `hero-portrait.jpg` — foto utama di hero
- `creator.jpg` — kartu Digital Creator
- `model.jpg` — kartu Muse & Model
- `brand.jpg` — kartu Brand Partner
- `ambassador.jpg` — kartu Public Figure
- `about-portrait.jpg` — foto About
- `model-beauty.jpg`
- `model-fashion.jpg`
- `model-portrait.jpg`
- `model-catwalk.jpg`
- `achievement.jpg`
- `activity-01.jpg`
- `activity-02.jpg`
- `activity-03.jpg`
- `highlight-poster.jpg` — poster video highlight

Gunakan file `.jpg`, `.png`, atau `.webp`, lalu sesuaikan ekstensi di `src/App.jsx` bila berbeda.

## Cara menambahkan video highlight looping

Letakkan video MP4 milik sendiri di:

`public/videos/highlight.mp4`

Video otomatis diputar, muted, loop, dan playsInline. Browser umumnya mewajibkan video autoplay dalam kondisi muted. Jika video belum tersedia, gradient pink tetap menjadi latar sehingga layout tidak rusak.

## Mengubah konten
Edit data `categories`, `achievements`, dan `services` pada `src/App.jsx`. Nama brand/aktivitas yang belum diberikan sengaja tidak dibuat-buat.

## Catatan
- Three.js menggunakan ornamen abstrak 3D, bukan model 3D berat, agar performa mobile lebih masuk akal.
- Animasi menghormati preferensi `prefers-reduced-motion`.
- Form kontak saat ini hanya demo UI. Hubungkan ke backend, Formspree, atau layanan lain sebelum digunakan sungguhan.
- Google Fonts memerlukan koneksi internet; font fallback tetap tersedia.
