export const initialDatabase = {
  malzemeler: [
    { id: 1, Ad: 'Beyaz Un', Kategori: 'Temel', Miktar: 12, STT: '2026-12-01', raf_no: 1, gorsel: 'un_nobg.png', fiyat: 20 },
    { id: 2, Ad: 'Pastörize Süt', Kategori: 'Sıvı', Miktar: 5, STT: '2026-02-15', raf_no: 2, gorsel: 'sut_nobg.png', fiyat: 15 },
    { id: 3, Ad: 'Kakaolu Krema', Kategori: 'Krema', Miktar: 3, STT: '2026-06-20', raf_no: 3, gorsel: 'kkrema_nobg.png', fiyat: 40 },
    { id: 4, Ad: 'Taze Çilek', Kategori: 'Meyve', Miktar: 15, STT: '2026-01-30', raf_no: 1, gorsel: 'cilek_nobg.png', fiyat: 30 },
    { id: 5, Ad: 'Toz Şeker', Kategori: 'Temel', Miktar: 20, STT: '2027-01-01', raf_no: 2, gorsel: 'seker_nobg.png', fiyat: 10 },
    { id: 6, Ad: 'Vanilya Özütü', Kategori: 'Baharat', Miktar: 2, STT: '2028-05-10', raf_no: 3, gorsel: 'vanilya_nobg.png', fiyat: 55 },
    { id: 7, Ad: 'Kabartma Tozu', Kategori: 'Temel', Miktar: 8, STT: '2026-11-20', raf_no: 1, gorsel: 'ktozu_nobg.png', fiyat: 5 },
    { id: 8, Ad: 'Mısır Yağı', Kategori: 'Sıvı', Miktar: 4, STT: '2026-08-12', raf_no: 2, gorsel: 'yag_nobg.png', fiyat: 25 },
    { id: 9, Ad: 'Pastacı Kreması', Kategori: 'Krema', Miktar: 7, STT: '2026-03-05', raf_no: 3, gorsel: 'pkrema_nobg.png', fiyat: 35 },
    { id: 10, Ad: 'Yumurta', Kategori: 'Temel', Miktar: 30, STT: '2026-02-01', raf_no: 2, gorsel: 'egg_nobg.png', fiyat: 2 },
    { id: 11, Ad: 'Bitter Çikolata', Kategori: 'Tatlı', Miktar: 10, STT: '2027-06-15', raf_no: 3, gorsel: 'coko_nobg.png', fiyat: 50 },
    { id: 12, Ad: 'Yaban Mersini', Kategori: 'Meyve', Miktar: 9, STT: '2026-02-10', raf_no: 1, gorsel: 'blueberry_nobg.png', fiyat: 45 }
  ],

  tarifler: [
    { id: 101, pasta_adi: 'Çikolatalı Rüya', zorluk: 'Kolay', hazirlik_suresi: 45, ana_malzeme_id: 11 },
    { id: 102, pasta_adi: 'Meyve Şöleni', zorluk: 'Orta', hazirlik_suresi: 60, ana_malzeme_id: 4 },
    { id: 103, pasta_adi: 'Vanilya Esintisi', zorluk: 'Kolay', hazirlik_suresi: 30, ana_malzeme_id: 6 }
  ],

  siparisler: [
    { id: 501, musteri: 'Muti', pasta_id: 101, adet: 1, durum: 'Hazırlanıyor' },
    { id: 502, musteri: 'Enes', pasta_id: 102, adet: 2, durum: 'Tamamlandı' }
  ]
};
