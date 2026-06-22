# Cezve Admin — Ürün Yönetim Paneli

Kahve temalı bir admin paneli: Supabase üzerinde ürünlerde **Ekle / Listele / Düzenle / Sil**, görseller Coffee API'den, arayüz Kolibri kimliğinde ve güçlü 3D/glassmorphism efektleriyle.

**Stack:** React + TypeScript + Vite + Tailwind CSS · **DB:** Supabase · **Görsel API:** coffee.alexflipnote.dev · **Animasyon:** framer-motion

## Kurulum

### 1. Bağımlılıkları yükle

```bash
npm install
```

### 2. Supabase kurulumu

1. [supabase.com](https://supabase.com) → yeni proje oluştur.
2. **SQL Editor**'e gir, `supabase_schema.sql` dosyasını kopyalayıp çalıştır (tablo + RLS + seed verisi).
3. **Settings → API** sayfasından **Project URL** ve **anon public key**'i kopyala.

### 3. Ortam değişkenleri

Proje kökünde `.env` dosyası oluştur (`.env.example`'ı kopyala):

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi....
```

### 4. Geliştirme sunucusu

```bash
npm run dev
# http://localhost:5173
```

## Netlify Deploy

1. GitHub'a public repo olarak push et (`.env` dosyası `.gitignore`'da — commit etme).
2. Netlify → **Add new site → Import from Git** → repoyu seç.
3. Build command: `npm run build` · Publish directory: `dist`
4. **Site settings → Environment variables**: `VITE_SUPABASE_URL` ve `VITE_SUPABASE_ANON_KEY` ekle.
5. **Deploy**.

> SPA yönlendirmesi için `public/_redirects` dosyasına `/* /index.html 200` ekleyebilirsin.

## Özellikler

- CRUD: Ekle / Listele / Düzenle / Sil
- İsme göre arama, kategoriye göre filtre, fiyat/stok sıralama
- Düşük stok rozeti (stock < 20)
- Özet kartlar: toplam ürün, kategori sayısı, stok değeri (Σ fiyat × stok)
- Form doğrulama + toast bildirimleri + silme onay modalı
- Coffee API'den rastgele görsel (kayıt anında çekilir, her render'da değil)
- 3D tilt + glassmorphism + framer-motion animasyonlar
- Tam responsive, Türkçe arayüz

## Teslim kontrol listesi

- [ ] 4 CRUD çalışıyor (Ekle / Listele / Düzenle / Sil)
- [ ] `components`, `pages`, `interfaces` klasörleri mevcut
- [ ] Tailwind kullanıldı
- [ ] Supabase'e bağlı, veriler kalıcı
- [ ] Coffee API ile görsel çekiliyor
- [ ] En az 1 ekran görüntüsü alındı
- [ ] GitHub public repo linki hazır
- [ ] Netlify canlı link hazır
