# Uygulama Havuzu Client

- Sakarya Büyükşehir Belediyesi Bilgi İşlem Dairesinde yaptığım zorunlu stajımda verilen Junior .NET Geliştirici Ödev Projesi'nin Front-End tarafını tamamlamış bulunmaktayım.

## Uygulamalar:

- Auth: JWT Giriş/Kayıt İşlemleri
- Todo: Yapılacaklar Listesi
- BMI: Vücut Kitle Endeksi Hesaplama
- Random Quotes: Twitter'da Rastgele Söz Paylaşma
- Weather: Anlık Hava Durumu

## Kurulum:

    git clone https://github.com/cusufcan/uygulama_havuzu_client

## Sayfalar:

### 1. Auth

### Basit bir kullanıcı kayıt ve giriş işlemleri. Authorization: JWT Bearer ve Database: PostgreSQL kullanılmıştır.

![Auth](src/assets/ss/auth.png)

### 2. Home

### Projedeki tüm uygulamaların içerisinde bulunduğu responsive grid.

![Home](src/assets/ss/home.png)

### 3. Todo

### Basit bir yapılacaklar listesi uygulaması. Yerel veritabanı kullanan tek uygulama. Yazmış olduğum API ile iletişim kurup Ajax CRUD işlemlerini PostgreSQL veritabanında yapar.

![Todo](src/assets/ss/todo.png)

### 4. BMI

### Kullanıcı tarafından girilen boy ve kilo bilgilerine dayanarak vücut kitle endeksi hesaplaması yapıp kullanıcıya kilosunun ne durumda olduğunu gösterir.

![BMI](src/assets/ss/bmi.png)

### 5. Random Quotes

### API'den rastgele bir söz getirip, kişiselleştirmeye açık bir şekilde X'te paylaşır.

![Twitter](src/assets/ss/twitter.png)

### 6. Weather

### Anlık hava durumu uygulaması. 4 ana şehir sabit olarak çekilir. Sol taraftaki şehir, kullanıcının arattığı şehirdir.

![Weather](src/assets/ss/weather.png)

## Kullanılan Teknolojiler:

- HTML & CSS & TypeScript
- Angular Framework
- PrimeNG
- PrimeFlex
- PrimeIcons
- Onion Architecture
- JWT Bearer
- AJAX CRUD
- HTTP Client
- Material Icons

## Lisans:

    MIT
