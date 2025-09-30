# Full Stack Developer - 1. Aşama Task

Bu proje, backend tarafında ürün ekleme ve listeleme yapılabilen bir .NET API ve bu API ile iletişim kuran basit bir Next.js frontend uygulamasından oluşmaktadır. Proje hem backend hem de frontend geliştirme adımlarını uçtan uca göstermek amacıyla hazırlanmıştır.

---

## 📌 Projenin Amacı

- Backend: Katmanlı mimari ile ürünlerin eklenip listelenebileceği bir servis geliştirmek.
- Frontend: Kullanıcıların backend API’sini kullanarak ürünleri görüntüleyebilmesi ve yeni ürün ekleyebilmesi.
- Tam geliştirme döngüsünü göstermek: API oluşturma → test etme → frontend’den veri çekme → ekrana basma.

---

## ⚙️ Kurulum Yöntemi

 ZIP indirerek kurulum

1. GitHub sayfasından **Code → Download ZIP** seçeneğini tıklayın.
2. ZIP dosyasını açın.
3. Çıkan klasörü istediğiniz konuma taşıyın (ör. masaüstü ya da `Projects` klasörü).

---

## 📂 Proje Yapısı

ProductTask/
│── backend/ # .NET Backend API
│── frontend/ # Next.js Frontend
│── README.md # Açıklamalar

---

## 🛠 Backend (.NET API) Kurulumu

1. Backend klasörüne girin:

   ```bash
   cd backend
   cd ProductApi
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   dotnet restore
   ```

3. Veritabanı (MSSQL)
   Ayrı bir veritabanı kurmanıza gerek yoktur.
   appsettings.json içinde MSSQL bağlantısı hazır tanımlıdır.
   İlk çalıştırmada Entity Framework migration’ları kullanarak veritabanını otomatik oluşturur.
   Eğer manuel olarak kurmak isterseniz:
   dotnet ef database update

Projede sonradan eklediğimiz image kolonunu da migration içinde bulabilirsiniz, yani manuel query çalıştırmanıza gerek yoktur.

5. API’yi başlatın:

   ```bash
   dotnet run
   ```

6. API ayağa kalktıktan sonra şu adresten test edebilirsiniz:
   [https://localhost:5001/swagger](https://localhost:5001/swagger)

---

## 🎨 Frontend (Next.js) Kurulumu

1. Frontend klasörüne girin:

   ```bash
   cd frontend
   ```

2. Paketleri yükleyin:

   ```bash
   npm install
   ```

3. `.env` dosyasını oluşturun ve backend API adresini yazın:

   ```env
   NEXT_PUBLIC_API_URL=https://localhost:5001
   ```

4. Frontend uygulamasını çalıştırın:

   ```bash
   npm run dev
   ```

5. Uygulama şu adreste çalışır:
   [http://localhost:3000](http://localhost:3000)

---

## ⚡ Kullanım Senaryoları

- **Ürün Listeleme:**
  `GET /products` endpoint’ini çağırarak mevcut ürünleri listeleyebilirsiniz.
  Frontend’de ana sayfada ürünler listelenir.

- **Ürün Ekleme:**
  `POST /products` endpoint’ine yeni ürün bilgisi gönderebilirsiniz.
  Frontend’de form doldurularak ürün eklenebilir.

---

🔧 Kullanılan Eklentiler / Araçlar

ESLint – Kod standartlarını ve hataları kontrol etmek için.

Prettier – Kod formatlaması için otomatik düzenleme.

TailwindCSS – Frontend stil ve tasarım için.

TypeScript – Daha güvenli ve tip kontrollü frontend geliştirme.

Next.js – React tabanlı frontend framework.

Entity Framework Core – .NET backend için ORM, veritabanı işlemleri.

Swagger – API dokümantasyonu ve test.

## 📄 Ek Notlar

- Tüm geliştirmeler `dev/v1.0.0` branch’i üzerinden yapılmaktadır.
- Commitler günlük ilerlemeyi gösterecek şekilde yapılması planlanmıştır.
- Kurulum için ister `git clone` ister `Download ZIP` yöntemi kullanılabilir.

Backend ve frontend birlikte ayağa kaldırıldığında sistemin uçtan uca çalışması test edilebilir.


