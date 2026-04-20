# Personal Brand — Frontend (React + Vite + TailwindCSS)

Website personal branding modern dengan desain dark-mode elegan, dibangun menggunakan **React 18**, **TypeScript**, **Vite**, dan **TailwindCSS 3**.

---

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js >= 18.x
- npm atau yarn

### Langkah-langkah

```bash
# 1. Masuk ke folder frontend
cd frontend

# 2. Install dependensi
npm install

# 3. Salin file environment
cp .env.example .env

# 4. Edit .env — arahkan ke backend Laravel
# VITE_API_URL=http://localhost:8000/api/v1

# 5. Jalankan development server
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

---

## 🏗️ Build Production

```bash
npm run build
# Output tersedia di folder /dist
```

---

## 📁 Struktur Folder

```
frontend/
├── src/
│   ├── components/         # Semua section komponen
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── services/
│   │   └── api.ts          # Axios API calls ke backend
│   ├── styles/
│   │   └── globals.css     # Global styles + Tailwind directives
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 🎨 Desain & Fitur

- **Dark mode** elegan dengan palet warna brand biru-ungu
- **Fully responsive** untuk mobile, tablet, dan desktop
- **Smooth scroll** navigasi antar section
- **Animasi** fade-up, float, dan glow saat scroll
- **Filter portofolio** berdasarkan kategori
- **Form kontak** dengan validasi dan feedback visual
- **Dot grid + noise texture** background untuk kedalaman visual

---

## 🔌 Integrasi API

Frontend terhubung ke backend Laravel melalui `src/services/api.ts`.
Semua data ditarik dari endpoint API yang tersedia di backend.

Untuk menggunakan data statis (tanpa backend), semua komponen saat ini sudah menggunakan data hardcoded yang dapat dengan mudah diganti dengan pemanggilan API menggunakan hook `useEffect`.
