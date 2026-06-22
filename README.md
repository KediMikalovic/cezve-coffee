# Cezve — Kahve Markası & Ürün Yönetim Paneli

Kahve temalı bir marka sitesi + admin panelinden oluşan tek sayfa uygulaması: **Marka** (vitrin/landing) sayfası ve Supabase üzerinde ürünlerde **Ekle / Listele / Düzenle / Sil** yapılan **Yönetim** paneli. Görseller Coffee API/Unsplash havuzundan, güçlü 3D/glassmorphism efektleriyle.

**Canlı:** [cezve-coffee.netlify.app](https://cezve-coffee.netlify.app/)

## Kullanılan Teknolojiler

| Teknoloji | Amaç |
|---|---|
| [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) | UI ve tip güvenliği |
| [Vite](https://vitejs.dev) | Geliştirme sunucusu ve build aracı |
| [Tailwind CSS](https://tailwindcss.com) | Stil, Kolibri renk paleti ve tasarım sistemi |
| [react-router-dom](https://reactrouter.com) | `/` ve `/yonetim` arası sayfa yönlendirme |
| [Supabase](https://supabase.com) (Postgres) | Ürün verisinin kalıcı saklanması, RLS ile erişim |
| [framer-motion](https://www.framer.com/motion/) | Scroll reveal, parallax, spring geçişler, count-up |
| [react-hot-toast](https://react-hot-toast.com) | Başarı/hata bildirimleri |
| [lucide-react](https://lucide.dev) | İkon seti |
| Coffee API (coffee.alexflipnote.dev) + Unsplash havuzu | Ürün görselleri |
| [Netlify](https://www.netlify.com) | Statik site barındırma ve deploy |

## Sayfalar

| Rota | Açıklama |
|---|---|
| `/` | **Marka** — hero, rakamlar, öne çıkan ürünler, marka hikayesi, süreç, kategori vitrini, galeri, CTA/footer |
| `/yonetim` | **Yönetim** — ürün CRUD admin paneli |

Ortak `Navbar` (`src/components/Navbar.tsx`), hero üzerinde şeffaf başlar, scroll'da camlaşır (glassmorphism).

## Kurulum

```bash
npm install
```

`.env.example`'ı `.env` olarak kopyala ve Supabase **Settings → API**'den aldığın değerleri gir:

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi....
```

Supabase projende `supabase_schema.sql` dosyasını **SQL Editor**'de çalıştır (tablo + RLS + seed verisi), ardından:

```bash
npm run dev
# http://localhost:5173
```

> Komutu `cezve-admin/` klasörünün içinden çalıştır.

## Deploy

GitHub' a push et
Netlify' da "New Site From Git" seç
GitHub reposunu bağla
Build command: `npm run build` · Publish directory: `dist` · Gerekli env değişkenleri: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`. `public/_redirects` SPA yönlendirmesini zaten karşılıyor.

## Özellikler

**Marka sayfası (`/`):**
- Parallax hero, animasyonlu blur ışık küreleri, yüzen yaprak/nokta motifleri
- Viewport'a girince yukarı sayan (count-up) istatistik kartları (ürün/kategori sayısı Supabase'den canlı)
- Supabase'den çekilen öne çıkan ürünler (3D tilt kartlar)
- Marka hikayesi, süreç zaman çizelgesi (Çekirdek → Kavurma → Fincan), kategori vitrini
- Sonsuz kayan galeri marquee, gradyan CTA + footer

**Yönetim paneli (`/yonetim`):**
- CRUD: Ekle / Listele / Düzenle / Sil
- İsme göre arama, kategoriye göre filtre, fiyat/stok sıralama
- Düşük stok rozeti (stock < 20)
- Özet kartlar: toplam ürün, kategori sayısı, stok değeri (Σ fiyat × stok)
- Form doğrulama + toast bildirimleri + silme onay modalı
- Rastgele görsel seçimi (kayıt anında, her render'da değil)

**Genel:** 3D tilt + glassmorphism + framer-motion animasyonlar, tam responsive, Türkçe arayüz, dark mode yok.

## Teslim kontrol listesi

- [x] 4 CRUD çalışıyor (Ekle / Listele / Düzenle / Sil)
- [x] `components`, `pages`, `interfaces` klasörleri mevcut
- [x] Tailwind kullanıldı
- [x] Supabase'e bağlı, veriler kalıcı
- [x] Netlify canlı link hazır — [cezve-coffee.netlify.app](https://cezve-coffee.netlify.app/)
