export const levels = [
  // LEVEL 1
  {
    id: 1,
    isBoss: false,
    title: "MİMARİ HATA",
    description:
      "Köprüler kısa kalmış ve havada asılı. Onları yerine oturtman lazım.",
    hint: "Köprünün uzunluğu için 'width', yukarı-aşağı konumu için 'top' özelliğini kullan.\n\nDeneme-yanılma yaparak doğru sayıları bulmalısın.",
    cssTask: `/* SİSTEM BİLGİSİ:
   .bridge-1 {
     position: absolute; (Sistem Tanımlı)
   }
*/

.bridge-1 {
  /* Genişlik ve Pozisyon ayarlarını yap. */
  
}`,
    startPlat: { w: 150, x: 200 },
    endPlat: { w: 150, x: 950 },

    objects: [
      { id: 1, type: "bridge", className: "bridge-1", x: 350, safe: true },
      {
        id: 2,
        type: "platform",
        x: 550,
        y: 500,
        width: 150,
        height: 20,
        safe: true,
      },
      { id: 3, type: "bridge", className: "bridge-1", x: 700, safe: true },

      { type: "flag", x: 1000, y: 460 },
      { type: "cloud", x: 250, y: 100, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 650, y: 80, width: 80, height: 40, scenery: true },
      { type: "cloud", x: 900, y: 120, width: 60, height: 30, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 2
  {
    id: 2,
    isBoss: false,
    title: "YANLIŞ MONTAJ",
    description: "Köprüler dik monte edilmiş! Onları yatay hale getir.",
    hint: "Nesneleri döndürmek için 'transform: rotate(...)' kalıbını kullanmalısın.\n\nDüz durması için açısı kaç derece olmalı?",
    cssTask: `.bridge-2 {
/* Köprüleri yatay çevir. */

}`,
    startPlat: { w: 150, x: 250 },
    endPlat: { w: 150, x: 900 },

    objects: [
      {
        id: 1,
        type: "bridge",
        className: "bridge-2",
        x: 400,
        y: 500,
        width: 200,
        safe: true,
      },
      {
        id: 2,
        type: "platform",
        x: 600,
        y: 500,
        width: 100,
        height: 20,
        safe: true,
      },
      {
        id: 3,
        type: "bridge",
        className: "bridge-2",
        x: 700,
        y: 500,
        width: 200,
        safe: true,
      },

      { type: "flag", x: 950, y: 460 },
      { type: "cloud", x: 200, y: 120, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 600, y: 80, width: 80, height: 40, scenery: true },
      { type: "cloud", x: 900, y: 150, width: 70, height: 35, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 3
  {
    id: 3,
    isBoss: false,
    title: "DUVAR ENGELİ",
    description: "Yolun ortasında bir duvar var. Onu ortadan kaldır.",
    hint: "Bir nesnenin görünümünü kapatmak için 'display' özelliğini kullanabilirsin.",
    cssTask: `.wall-3 {
  /* Duvarı yok et. */
  
}`,
    startPlat: { w: 150, x: 150 },
    endPlat: { w: 150, x: 950 },

    objects: [
      { id: 1, type: "bridge", x: 300, y: 500, width: 200, safe: true },
      {
        id: 2,
        type: "platform",
        x: 500,
        y: 500,
        width: 250,
        height: 20,
        safe: true,
      },
      {
        id: 3,
        type: "wall",
        className: "wall-3",
        x: 615,
        y: 400,
        width: 20,
        height: 100,
        safe: false,
      },
      { id: 4, type: "bridge", x: 750, y: 500, width: 200, safe: true },

      { type: "flag", x: 1000, y: 460 },
      { type: "cloud", x: 200, y: 100, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 600, y: 50, width: 90, height: 45, scenery: true },
      { type: "cloud", x: 950, y: 120, width: 70, height: 35, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 4
  {
    id: 4,
    isBoss: false,
    title: "BATAKLIK",
    description: "Platform çamura batmış. Onu yukarı çekmen lazım.",
    hint: "Nesneleri yukarı çekmek için 'margin-top' özelliğine NEGATİF (-) değerler vererek deneme yap.",
    cssTask: `.sunk-platform {
  /* Platformu yukarı çek. */

}`,
    startPlat: { w: 150, x: 150 },
    endPlat: { w: 150, x: 950 },

    objects: [
      { id: 1, type: "bridge", x: 300, y: 500, width: 200, safe: true },
      {
        id: 2,
        type: "platform",
        className: "sunk-platform",
        x: 500,
        y: 700,
        width: 250,
        height: 20,
        safe: true,
      },
      { id: 3, type: "bridge", x: 750, y: 500, width: 200, safe: true },

      { type: "flag", x: 1000, y: 460 },
      { type: "cloud", x: 300, y: 100, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 700, y: 60, width: 80, height: 40, scenery: true },
      { type: "cloud", x: 1000, y: 110, width: 90, height: 45, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 5 (BOSS)
  {
    id: 5,
    isBoss: true,
    title: "ŞANTİYE KAOSU",
    description:
      "Her şey birbirine girmiş! Öğrendiğin her şeyi kullanarak yolu temizle.",
    hint: "YAPILACAKLAR:\n1. Köprüleri yatır (transform).\n2. Duvarı kaldır (display).\n3. Platformu yukarı çek (negatif margin).\n4. Dikeni aşağı it (pozitif margin).",

    cssTask: `/* SİSTEM BİLGİSİ:
   Tüm nesnelerde 'position: absolute' tanımlıdır.
*/

.boss-bridge {
  /* Yatay hale getir. */

}

.boss-wall {
  /* Yok et. */

}

.sunk-platform {
  /* Yukarı çek. */

}

.boss-spike {
  /* Aşağı it. */

}`,
    startPlat: { w: 150, x: 50 },
    endPlat: { w: 150, x: 1050 },

    objects: [
      {
        id: 1,
        type: "bridge",
        className: "boss-bridge",
        x: 200,
        y: 500,
        safe: true,
      },
      {
        id: 2,
        type: "platform",
        x: 400,
        y: 500,
        width: 250,
        height: 20,
        safe: true,
      },
      {
        id: 3,
        type: "wall",
        className: "boss-wall",
        x: 515,
        y: 400,
        width: 20,
        height: 100,
        safe: false,
      },
      {
        id: 4,
        type: "platform",
        className: "sunk-platform",
        x: 650,
        y: 700,
        width: 200,
        height: 20,
        safe: true,
      },
      {
        id: 5,
        parentId: 4,
        type: "spike",
        className: "boss-spike",
        x: 0,
        y: -30,
        width: 200,
        height: 30,
        safe: false,
      },
      {
        id: 7,
        type: "bridge",
        className: "boss-bridge",
        x: 850,
        y: 500,
        safe: true,
      },
      { type: "flag", x: 1125, y: 460 },
      { type: "cloud", x: 200, y: 100, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 600, y: 50, width: 90, height: 45, scenery: true },
      { type: "cloud", x: 1000, y: 120, width: 70, height: 35, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 6
  {
    id: 6,
    isBoss: false,
    title: "GÖRÜNMEZ YOL",
    description: "Önünde görünmez bir köprü var. Onu görünür yap.",
    hint: "Görünürlük ayarı için 'opacity' özelliğini kullan.",
    cssTask: `.ghost-bridge {
  /* Görünür hale getir. */
  
}`,
    startPlat: { w: 150, x: 150 },
    endPlat: { w: 150, x: 950 },
    objects: [
      { id: 1, type: "bridge", x: 300, y: 500, width: 200, safe: true },
      {
        id: 2,
        type: "bridge",
        className: "ghost-bridge",
        x: 500,
        y: 500,
        width: 300,
        safe: true,
      },
      { id: 3, type: "bridge", x: 800, y: 500, width: 150, safe: true },
      { type: "flag", x: 1000, y: 460 },
      { type: "cloud", x: 150, y: 80, width: 90, height: 45, scenery: true },
      { type: "cloud", x: 500, y: 50, width: 110, height: 55, scenery: true },
      { type: "cloud", x: 850, y: 100, width: 100, height: 50, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 7
  {
    id: 7,
    isBoss: false,
    title: "MİKRO KÖPRÜ",
    description: "Köprü çok küçük kalmış. Büyüteç ışınını (scale) kullan.",
    hint: "Boyutlandırma için 'transform: scale(...)' özelliğini kullan. Kaç kat büyütmen gerektiğini deneyerek bul.",
    cssTask: `.nano-bridge {
  /* Uygun oranda büyüt. */
  
}`,
    startPlat: { w: 150, x: 150 },
    endPlat: { w: 150, x: 900 },

    objects: [
      { id: 1, type: "bridge", x: 300, y: 500, width: 200, safe: true },
      {
        id: 2,
        type: "bridge",
        className: "nano-bridge",
        x: 600,
        y: 500,
        width: 200,
        safe: true,
      },
      { type: "flag", x: 950, y: 460 },
      { type: "cloud", x: 200, y: 120, width: 120, height: 60, scenery: true },
      { type: "cloud", x: 550, y: 60, width: 90, height: 45, scenery: true },
      { type: "cloud", x: 850, y: 90, width: 100, height: 50, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 8
  {
    id: 8,
    isBoss: false,
    title: "SİS PERDESİ",
    description:
      "Platform sisin arkasında kaldığı için robot göremiyor. Onu öne çıkar.",
    hint: "Katman sıralamasını 'z-index' belirler. Sayı ne kadar büyükse nesne o kadar önde durur. Sisin değerini geçmen lazım.",
    cssTask: `/* SİSTEM BİLGİSİ:
   position: absolute; (Sistem tanımlı)
*/        
.hidden-plat {
  /* Platformu öne getir. */
  
}`,
    startPlat: { w: 150, x: 150 },
    endPlat: { w: 150, x: 950 },
    objects: [
      { id: 1, type: "bridge", x: 300, y: 500, width: 200, safe: true },
      {
        id: 2,
        type: "cloud",
        className: "fog-layer",
        x: 450,
        y: 350,
        width: 300,
        height: 250,
        scenery: true,
      },
      {
        id: 3,
        type: "platform",
        className: "hidden-plat",
        x: 500,
        y: 500,
        width: 250,
        height: 20,
        safe: true,
      },
      { id: 4, type: "bridge", x: 750, y: 500, width: 200, safe: true },
      { type: "flag", x: 1000, y: 460 },
      { type: "cloud", x: 200, y: 80, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 800, y: 100, width: 90, height: 45, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 9
  {
    id: 9,
    isBoss: false,
    title: "AŞIRI ISINMA",
    description: "Köprü aşırı sıcak (Kırmızı) ve sallanıyor! Sabitle ve soğut.",
    hint: "Hareket için 'animation', renk için 'background-color' özelliklerini kontrol et.",
    cssTask: `.hyper-bridge {
  /* 1. Sallantıyı durdur.
     2. Rengi 'Güvenli Yeşil' yap.
        (Kod: #2ecc71) */

}`,
    startPlat: { w: 150, x: 150 },
    endPlat: { w: 150, x: 950 },
    objects: [
      { id: 1, type: "bridge", x: 300, y: 500, width: 100, safe: true },
      {
        id: 2,
        type: "bridge",
        className: "hyper-bridge",
        x: 400,
        y: 500,
        width: 400,
        safe: true,
      },
      {
        id: 3,
        type: "platform",
        x: 800,
        y: 500,
        width: 150,
        height: 20,
        safe: true,
      },
      { type: "flag", x: 1000, y: 460 },
      { type: "cloud", x: 200, y: 100, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 600, y: 60, width: 110, height: 55, scenery: true },
      { type: "cloud", x: 950, y: 110, width: 90, height: 45, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 10 (BOSS)
  {
    id: 10,
    isBoss: true,
    title: "SİSTEM ÇÖKÜŞÜ",
    description:
      "Nükleer Çekirdek yolu tıkıyor! Patlatmadan (silmeden) karantinaya al.",
    hint: "STRATEJİ:\n1. Titremeyi durdur (animation).\n2. Soğut (background-color).\n3. Küçült (transform).\n4. Kalkanın arkasına at (z-index).",

    cssTask: `/* SİSTEM BİLGİSİ:
   Tüm kritik nesneler 'position: absolute' modundadır.
*/
.ghost-bridge {
  /* 1. Yolu aç. */

}

.core {
  /* 2. ÇEKİRDEK KONTROLÜ
     - display: none YASAK!
     - Durdur, Soğut (#2ecc71), Küçült.
  */

}

.sunk-platform {
  /* 3. Platformu çek. */

}

.hidden-flag {
  /* 4. Bayrağı kurtar. */
  
}`,
    startPlat: { w: 150, x: 50 },
    endPlat: { w: 150, x: 1100 },
    objects: [
      {
        id: 1,
        type: "bridge",
        className: "ghost-bridge",
        x: 200,
        y: 500,
        width: 300,
        safe: true,
      },
      {
        id: 2,
        type: "platform",
        className: "sunk-platform",
        x: 500,
        y: 700,
        width: 250,
        height: 20,
        safe: true,
      },
      {
        id: 3,
        parentId: 2,
        type: "wall",
        className: "shield",
        x: 75,
        y: -120,
        width: 100,
        height: 100,
        safe: true,
      },
      {
        id: 4,
        parentId: 2,
        type: "wall",
        className: "core",
        x: 75,
        y: -120,
        width: 100,
        height: 100,
        safe: false,
      },
      { id: 5, type: "bridge", x: 750, y: 500, width: 350, safe: true },
      {
        id: 6,
        type: "cloud",
        className: "fog-layer",
        x: 1050,
        y: 350,
        width: 200,
        height: 150,
        scenery: true,
      },
      {
        id: 7,
        type: "flag",
        className: "hidden-flag",
        x: 1100,
        y: 460,
      },
      { type: "cloud", x: 300, y: 80, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 800, y: 60, width: 120, height: 60, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 11
  {
    id: 11,
    isBoss: false,
    title: "YIĞILMIŞ KÖPRÜLER",
    description:
      "Köprü parçaları yanlış tarafa (sağa) yaslanmış. Onları başlangıç noktasına çekmen gerek.",
    hint: "Flexbox'ta yatay eksende hizalama yapmak için 'justify-content' kullanılır.",
    cssTask: `/* SİSTEM BİLGİSİ:
   .flex-zone-11 {
     display: flex; (Sistem tanımlı)
   }
*/

.flex-zone-11 {
  /* Köprüyü sola (başlangıca) çek. */
  
}`,
    startPlat: { w: 150, x: 100 },
    endPlat: { w: 150, x: 800 },
    objects: [
      { id: 1, type: "bridge", x: 250, y: 500, width: 100, safe: true },
      {
        id: 2,
        type: "flexZone",
        className: "flex-zone-11",
        x: 350,
        y: 475,
        width: 400,
        height: 50,
        safe: false,
      },
      {
        id: 3,
        parentId: 2,
        type: "flexItem",
        className: "flex-bridge-11",
        width: 300,
        height: 25,
        safe: true,
      },
      { id: 4, type: "bridge", x: 650, y: 500, width: 150, safe: true },
      { type: "flag", x: 875, y: 460 },
      { type: "cloud", x: 200, y: 100, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 500, y: 60, width: 90, height: 45, scenery: true },
      { type: "cloud", x: 800, y: 120, width: 80, height: 40, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 12
  {
    id: 12,
    isBoss: false,
    title: "HAVADA KALAN KÖPRÜ",
    description:
      "Flex kapsayıcısı yüksek olduğu için köprü tavana yapışmış. Onu zemine indir.",
    hint: "Flexbox'ta dikey eksende (karşı eksen) hizalama için 'align-items' kullanılır.",
    cssTask: `/* SİSTEM BİLGİSİ:
   .flex-zone-12 {
     display: flex; (Sistem tanımlı)
   }
*/

.flex-zone-12 {
  /* Köprüyü aşağı (sona) indir. */
  
}`,
    startPlat: { w: 150, x: 100 },
    endPlat: { w: 150, x: 850 },
    objects: [
      { id: 1, type: "bridge", x: 250, y: 500, width: 100, safe: true },
      {
        id: 2,
        type: "flexZone",
        className: "flex-zone-12",
        x: 350,
        y: 425,
        width: 450,
        height: 100,
        safe: false,
      },
      {
        id: 3,
        parentId: 2,
        type: "flexItem",
        className: "flex-bridge-12",
        width: 450,
        height: 25,
        safe: true,
      },
      { id: 4, type: "bridge", x: 800, y: 500, width: 50, safe: true },
      { type: "flag", x: 925, y: 460 },
      { type: "cloud", x: 150, y: 80, width: 90, height: 45, scenery: true },
      { type: "cloud", x: 450, y: 50, width: 110, height: 55, scenery: true },
      { type: "cloud", x: 800, y: 100, width: 100, height: 50, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 13
  {
    id: 13,
    isBoss: false,
    title: "DİKEY KÖPRÜLER",
    description:
      "Köprü parçaları üst üste (sütun) binmiş. Onları yan yana (satır) dizmelisin.",
    hint: "Flexbox'ta dizilim yönünü 'flex-direction' belirler.\n\nAyrıca dikey hizalamayı (align-items) kontrol etmeyi unutma!",
    cssTask: `/* SİSTEM BİLGİSİ:
   .flex-zone-13 {
     display: flex; (Sistem tanımlı)
   }
*/

.flex-zone-13 {
  /*  1. Yönü yatay yap.
     2. Aşağı hizala. */

}`,
    startPlat: { w: 150, x: 100 },
    endPlat: { w: 150, x: 850 },
    objects: [
      { id: 1, type: "bridge", x: 250, y: 500, width: 100, safe: true },
      {
        id: 2,
        type: "flexZone",
        className: "flex-zone-13",
        x: 350,
        y: 400,
        width: 450,
        height: 125,
        safe: false,
      },
      {
        id: 3,
        parentId: 2,
        type: "flexItem",
        className: "flex-bridge-13",
        width: 225,
        height: 25,
        safe: true,
      },
      {
        id: 4,
        parentId: 2,
        type: "flexItem",
        className: "flex-bridge-13",
        width: 225,
        height: 25,
        safe: true,
      },
      { id: 5, type: "bridge", x: 800, y: 500, width: 50, safe: true },
      { type: "flag", x: 925, y: 460 },
      { type: "cloud", x: 200, y: 80, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 600, y: 50, width: 90, height: 45, scenery: true },
      { type: "cloud", x: 900, y: 110, width: 80, height: 40, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 14
  {
    id: 14,
    isBoss: false,
    title: "SARMALI ÇÖZME",
    description:
      "Köprü parçaları sığmadığı için alt satıra kayıyor. Onları tek satırda kalmaya zorla.",
    hint: "Normalde flex elemanları sığmazsa taşar veya küçülür. Ancak 'flex-wrap: wrap' varsa alt satıra geçer.\n\nBunu 'nowrap' yaparak engelleyebilirsin.",
    cssTask: `/* SİSTEM BİLGİSİ:
   .flex-zone-14 {
     display: flex; (Sistem tanımlı)
     flex-wrap: wrap (Sistem tanımlı)
   }
*/

.flex-zone-14 {
  /* Sarmayı kapat ve tek satıra zorla. */
  
}`,
    startPlat: { w: 150, x: 100 },
    endPlat: { w: 150, x: 700 },
    objects: [
      { id: 1, type: "bridge", x: 250, y: 500, width: 100, safe: true },
      {
        id: 2,
        type: "flexZone",
        className: "flex-zone-14",
        x: 350,
        y: 400,
        width: 280,
        height: 125,
        safe: false,
      },
      {
        id: 3,
        parentId: 2,
        type: "flexItem",
        className: "flex-bridge-14",
        width: 120,
        height: 25,
        safe: true,
      },
      {
        id: 4,
        parentId: 2,
        type: "flexItem",
        className: "flex-bridge-14",
        width: 120,
        height: 25,
        safe: true,
      },
      {
        id: 5,
        parentId: 2,
        type: "flexItem",
        className: "flex-bridge-14",
        width: 120,
        height: 25,
        safe: true,
      },
      { id: 6, type: "bridge", x: 630, y: 500, width: 70, safe: true },
      { type: "flag", x: 775, y: 460 },
      { type: "cloud", x: 180, y: 100, width: 100, height: 50, scenery: true },
      { type: "cloud", x: 550, y: 60, width: 110, height: 55, scenery: true },
      { type: "cloud", x: 850, y: 90, width: 90, height: 45, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },

  // LEVEL 15 (BOSS)
  {
    id: 15,
    isBoss: true,
    title: "FLEX USTASI",
    description: "4 Aşamalı Final! Flexbox bilginin sınırlarını zorla.",
    hint: "STRATEJİ:\n1. Bölge A: Yatay Hizalama (justify).\n2. Bölge B: Dikey Hizalama (align).\n3. Bölge C: Yön (row) + Dikey Hizalama.\n4. Bölge D: Dikey Hizalama + Boşluk (gap) + Sıralama (order).",
    cssTask: `/* SİSTEM BİLGİSİ:
   Tüm bölgelerde 'display: flex' aktiftir.
*/

/* BÖLGE A: Köprü sağda kalmış */
.flex-boss-a {
  
}

/* BÖLGE B: Köprü havada asılı */
.flex-boss-b {
  
}

/* BÖLGE C: Köprüler dik duruyor */
.flex-boss-c {
  
}

/* BÖLGE D: KÖPRÜLER KARIŞIK VE AYRIK!
   1. Hizala (aşağı)
   2. Boşluğu (gap) sıfırla
   3. Sıralamayı düzelt (1, 2, 3) */
.flex-boss-d { 

}

.bridge-d1 { /* 1. Parça */

}
.bridge-d2 { /* 2. Parça */ 

}
.bridge-d3 { /* 3. Parça */ 

}`,
    startPlat: { w: 100, x: 20 },
    endPlat: { w: 120, x: 1180 },
    objects: [
      { id: 1, type: "bridge", x: 120, y: 500, width: 60, safe: true },

      // BÖLGE A
      {
        id: 2,
        type: "flexZone",
        className: "flex-boss-a",
        x: 180,
        y: 500,
        width: 250,
        height: 25,
        safe: false,
      },
      {
        id: 3,
        parentId: 2,
        type: "flexItem",
        className: "flex-boss-bridge-a",
        width: 150,
        height: 25,
        safe: true,
      },
      {
        id: 4,
        type: "platform",
        x: 330,
        y: 500,
        width: 120,
        height: 20,
        safe: true,
      },

      // BÖLGE B
      {
        id: 5,
        type: "flexZone",
        className: "flex-boss-b",
        x: 450,
        y: 400,
        width: 150,
        height: 125,
        safe: false,
      },
      {
        id: 6,
        parentId: 5,
        type: "flexItem",
        className: "flex-boss-bridge-b",
        width: 150,
        height: 25,
        safe: true,
      },
      {
        id: 7,
        type: "platform",
        x: 600,
        y: 500,
        width: 70,
        height: 20,
        safe: true,
      },

      // BÖLGE C
      {
        id: 8,
        type: "flexZone",
        className: "flex-boss-c",
        x: 670,
        y: 400,
        width: 200,
        height: 125,
        safe: false,
      },
      {
        id: 9,
        parentId: 8,
        type: "flexItem",
        className: "flex-boss-bridge-c",
        width: 100,
        height: 25,
        safe: true,
      },
      {
        id: 10,
        parentId: 8,
        type: "flexItem",
        className: "flex-boss-bridge-c",
        width: 100,
        height: 25,
        safe: true,
      },
      {
        id: 11,
        type: "platform",
        x: 870,
        y: 500,
        width: 70,
        height: 20,
        safe: true,
      },

      // BÖLGE D
      {
        id: 12,
        type: "flexZone",
        className: "flex-boss-d",
        x: 940,
        y: 400,
        width: 250,
        height: 125,
        safe: false,
      },
      {
        id: 13,
        parentId: 12,
        type: "flexItem",
        className: "flex-boss-bridge-d bridge-d1",
        width: 110,
        height: 25,
        safe: true,
      },
      {
        id: 14,
        parentId: 12,
        type: "flexItem",
        className: "flex-boss-bridge-d bridge-d2",
        width: 110,
        height: 25,
        safe: true,
      },
      {
        id: 15,
        parentId: 12,
        type: "flexItem",
        className: "flex-boss-bridge-d bridge-d3",
        width: 30,
        height: 25,
        safe: true,
      },

      { type: "flag", x: 1245, y: 460 },

      { type: "cloud", x: 50, y: 60, width: 80, height: 40, scenery: true },
      { type: "water", x: 0, y: 650, width: 1500, height: 300, safe: false },
    ],
  },
];
