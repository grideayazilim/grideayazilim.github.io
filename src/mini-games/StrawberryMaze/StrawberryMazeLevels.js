// Çoktan seçmeli sorular
export const choiceQuestions = [
  {
    id: 1,
    type: "choice",
    question:
      "JavaScript'te değişken tanımlamak için hangi anahtar kelime kullanılır?",
    options: ["var", "variable", "def", "dim"],
    correct: 0,
    explanation:
      "JavaScript'te değişken tanımlamak için 'var', 'let' veya 'const' anahtar kelimeleri kullanılır. 'var' en eski yöntemdir.",
  },
  {
    id: 2,
    type: "choice",
    question: "console.log('Merhaba') komutu ne yapar?",
    options: [
      "Ekrana popup gösterir",
      "Konsola 'Merhaba' yazar",
      "Sayfa başlığını değiştirir",
      "Hata verir",
    ],
    correct: 1,
    explanation:
      "console.log() komutu, parantez içindeki değeri tarayıcının geliştirici konsoluna yazdırır. Debug için çok kullanışlıdır.",
  },
  {
    id: 3,
    type: "choice",
    question: "JavaScript'te 'undefined' ne zaman ortaya çıkar?",
    options: [
      "Değişken silindiğinde",
      "Değişken tanımlanıp değer atanmadığında",
      "Sayı sıfıra bölündüğünde",
      "String boş olduğunda",
    ],
    correct: 1,
    explanation:
      "Bir değişken tanımlanıp herhangi bir değer atanmadığında, JavaScript ona otomatik olarak 'undefined' değerini verir.",
  },
  {
    id: 4,
    type: "choice",
    question: "JavaScript'te tek satırlık yorum nasıl yazılır?",
    options: ["# yorum", "// yorum", "/* yorum */", "-- yorum"],
    correct: 1,
    explanation:
      "JavaScript'te tek satırlık yorumlar // ile başlar. Çok satırlı yorumlar için /* */ kullanılır.",
  },
  {
    id: 5,
    type: "choice",
    question: "let x = 10; x = 20; işleminden sonra x'in değeri nedir?",
    options: ["10", "20", "30", "Hata verir"],
    correct: 1,
    explanation:
      "let ile tanımlanan değişkenlerin değeri sonradan değiştirilebilir. x önce 10 olur, sonra 20 olarak güncellenir.",
  },
  {
    id: 6,
    type: "choice",
    question: "'Merhaba' + ' Dünya' işleminin sonucu nedir?",
    options: ["Hata verir", "MerhabaDünya", "Merhaba Dünya", "undefined"],
    correct: 2,
    explanation:
      "İki string + operatörü ile birleştirilir (concatenation). Boşluk ' Dünya' içinde olduğu için sonuç 'Merhaba Dünya' olur.",
  },
  {
    id: 7,
    type: "choice",
    question: "true ve false değerlerine ne ad verilir?",
    options: ["String", "Number", "Boolean", "Array"],
    correct: 2,
    explanation:
      "true ve false değerleri Boolean veri tipidir. Koşullu ifadelerde ve karşılaştırmalarda kullanılır.",
  },
  {
    id: 8,
    type: "choice",
    question: "[1, 2, 3] ifadesi ne tür bir veri yapısıdır?",
    options: ["Object", "String", "Array", "Number"],
    correct: 2,
    explanation:
      "Köşeli parantez içinde virgülle ayrılmış değerler bir Array (dizi) oluşturur. Array'ler birden fazla değeri saklamak için kullanılır.",
  },
  {
    id: 9,
    type: "choice",
    question: "10 > 5 ifadesinin sonucu nedir?",
    options: ["true", "false", "10", "5"],
    correct: 0,
    explanation:
      "10 sayısı 5'ten büyük olduğu için bu karşılaştırma true (doğru) sonucunu verir.",
  },
  {
    id: 10,
    type: "choice",
    question: "let arr = [1, 2, 3]; arr.length değeri nedir?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation:
      "length özelliği bir array'deki eleman sayısını verir. [1, 2, 3] array'inde 3 eleman vardır.",
  },
  {
    id: 11,
    type: "choice",
    question: "let isim = 'Gridea'; ifadesinde 'Gridea' hangi veri tipindedir?",
    options: ["Number", "Boolean", "String", "Array"],
    correct: 2,
    explanation:
      "Tırnak içinde yazılan değerler String (metin) veri tipindedir. Tek tırnak veya çift tırnak kullanılabilir.",
  },
  {
    id: 12,
    type: "choice",
    question: "5 === '5' ifadesinin sonucu nedir?",
    options: ["true", "false", "5", "Hata verir"],
    correct: 1,
    explanation:
      "=== operatörü hem değeri hem de veri tipini kontrol eder. 5 bir sayı, '5' ise bir stringdir. Tipleri farklı olduğu için sonuç false'tur.",
  },
  {
    id: 13,
    type: "choice",
    question: "Bir fonksiyon tanımlamak için hangi anahtar kelime kullanılır?",
    options: ["func", "function", "def", "method"],
    correct: 1,
    explanation:
      "JavaScript'te fonksiyon tanımlamak için 'function' anahtar kelimesi kullanılır. Örnek: function selamla() { }",
  },
  {
    id: 14,
    type: "choice",
    question: "let arr = [10, 20, 30]; arr[0] değeri nedir?",
    options: ["10", "20", "30", "0"],
    correct: 0,
    explanation:
      "Array indeksleri 0'dan başlar. arr[0] array'in ilk elemanını verir, yani 10.",
  },
  {
    id: 15,
    type: "choice",
    question: "null değeri ne anlama gelir?",
    options: ["Sıfır", "Boş veya değer yok", "Hata", "Tanımsız"],
    correct: 1,
    explanation:
      "null, bir değişkenin bilinçli olarak boş veya değersiz olduğunu belirtir. 'Burada bir değer yok' anlamına gelir.",
  },
];

// Kod yazma soruları
export const codeQuestions = [
  {
    id: 16,
    type: "code",
    question: 'Konsola "Gridea" yazdıran kodu yazın:',
    hint: "console ile başlayan bir komut kullanın",
    acceptedAnswers: [
      'console.log("Gridea")',
      "console.log('Gridea')",
      "console.log(`Gridea`)",
      "console.log( 'Gridea' )",
      'console.log( "gridea" )',
      "console.log('gridea');",
      'console.log("Gridea");',
      "console.log(`gridea`);",
    ],
    correctAnswer: 'console.log("Gridea")',
    explanation:
      "console.log() fonksiyonu konsola mesaj yazdırır. String değerler tırnak içinde yazılmalıdır.",
  },
  {
    id: 17,
    type: "code",
    question:
      "'isim' adında bir değişken tanımlayıp 'Gridea' değerini atayın (let kullanın):",
    hint: "let anahtar kelimesi ile başlayın",
    acceptedAnswers: [
      "let isim = 'Ali'",
      'let isim = "Ali"',
      "let isim = `Ali`",
      "let isim = 'Ali';",
      'let isim = "Ali";',
      "let isim = `Ali`;",
      "let isim='Ali'",
      'let isim="Ali"',
      "let isim='Ali';",
      'let isim="Ali";',
    ],
    correctAnswer: "let isim = 'Ali';",
    explanation:
      "let anahtar kelimesi ile değişken tanımlanır. String değerler tırnak içinde yazılır. Örnek: let isim = 'Ali';",
  },
  {
    id: 18,
    type: "code",
    question: "Aşağıdaki kodun çıktısı nedir?\n\ntypeof 42",
    hint: "typeof operatörü veri tipini döndürür",
    acceptedAnswers: ["number", '"number"', "'number'", '"number"'],
    correctAnswer: "number",
    explanation:
      "typeof operatörü bir değerin veri tipini string olarak döndürür. 42 bir sayı olduğu için 'number' döner.",
  },
  {
    id: 19,
    type: "code",
    question:
      "Bir dizinin sonuna eleman eklemek için kullanılan metodu yazın:\n\nlet arr = [1, 2];\narr.???(3);",
    hint: "İngilizce 'itmek' anlamına gelen bir kelime",
    acceptedAnswers: [
      "push",
      ".push",
      "push()",
      ".push()",
      "arr.push",
      "arr.push()",
    ],
    correctAnswer: "push",
    explanation:
      "push() metodu bir dizinin sonuna yeni eleman ekler. arr.push(3) çalıştıktan sonra arr = [1, 2, 3] olur.",
  },
  {
    id: 20,
    type: "code",
    question:
      "Aşağıdaki kodun çıktısı ne olur?\n\nlet x = 5;\nlet y = 3;\nconsole.log(x % y);",
    hint: "modül operatörünü kullanın",
    acceptedAnswers: ["2"],
    correctAnswer: "2",
    explanation:
      "x = 5 ve y = 3 olduğuna göre, x % y = 5 % 3 = 2 sonucunu verir.",
  },
  {
    id: 21,
    type: "code",
    question:
      "Aşağıdaki arrow function'ı tamamlayın:\n\nconst kare = (n) => ???\n\nBu fonksiyon n'in karesini döndürmelidir.",
    hint: "* operatörünü kullanın",
    acceptedAnswers: [
      "n * n",
      "n*n",
      "n ** 2",
      "n**2",
      "n *n",
      "n* n",
      "return n * n",
      "return n*n",
      "return n ** 2",
      "return n**2",
      "{ return n * n }",
      "{ return n * n; }",
    ],
    correctAnswer: "n * n",
    explanation:
      "Arrow function'da süslü parantez kullanılmazsa sonuç otomatik döndürülür. const kare = (n) => n * n; şeklinde yazılır.",
  },
  {
    id: 22,
    type: "code",
    question: 'Aşağıdaki kodun çıktısı nedir?\n\n"Merhaba Dünya".length',
    hint: "Harfleri sayın",
    acceptedAnswers: ["12"],
    correctAnswer: "12",
    explanation:
      "'Merhaba Dünya' ifadesi 12 karakterden oluşur. .length özelliği string'in karakter sayısını döndürür.",
  },
  {
    id: 23,
    type: "code",
    question:
      "if koşulu ile yaş 18'den büyük veya eşitse'Yetişkin' yazdıran kodu yazın:\n\nif (???) {\n  console.log('Yetişkin');\n}\n\n??? yerine ne yazılmalı?",
    hint: "Büyük eşit operatörünü kullanın",
    acceptedAnswers: ["yas >= 18", "yas >=18", "yas>=18", "yas >= 18;"],
    correctAnswer: "yas >= 18",
    explanation:
      ">= operatörü 'büyük veya eşit' anlamına gelir. yas >= 18 ifadesi yaş 18 veya daha büyükse true döndürür.",
  },
  {
    id: 24,
    type: "code",
    question:
      "Aşağıdaki kodun çıktısını yazın:\n\nlet meyveler = ['elma', 'armut', 'muz'];\nconsole.log(meyveler[1]);",
    hint: "Dizi indeksleri 0'dan başlar",
    acceptedAnswers: ["armut", "'armut'", '"armut"'],
    correctAnswer: "armut",
    explanation:
      "Dizi indeksleri 0'dan başlar. meyveler[0] = 'elma', meyveler[1] = 'armut', meyveler[2] = 'muz'. Dolayısıyla cevap 'armut'tur.",
  },
  {
    id: 25,
    type: "code",
    question:
      "1'den 5'e kadar sayıları yazdıran for döngüsünü tamamlayın:\n\nfor (???) {\n  console.log(i);\n}\n\n??? yerine ne yazılmalı?",
    hint: "for döngüsü üç bölümden oluşur: başlangıç, koşul ve artış",
    acceptedAnswers: [
      "let i = 1; i <= 5; i++",
      "let i=1; i<=5; i++",
      "let i = 1; i <= 5; i++",
      "let i=1; i<=5; i++",
      "let i = 1; i <= 5; i++",
      "let i=1; i<=5; i++",
    ],
    correctAnswer: "let i = 1; i <= 5; i++",
    explanation:
      "for döngüsü üç bölümden oluşur: başlangıç (let i = 1), koşul (i <= 5) ve artış (i++). Bu döngü i'yi 1'den başlayarak 5'e kadar artırır ve her adımda i'yi konsola yazdırır.",
  },
];

export const allQuestions = [...choiceQuestions, ...codeQuestions];
