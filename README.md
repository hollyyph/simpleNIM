# simpleNIM
SimpleNIM adalah sebuah web app yang melakukan pembacaan, penambahan data, penghapusan, dan pembaharuan data NIM mahasiswa STI ITB 2018. 

## Description
SimpleNIM memiliki CRUD functions, dimana fungsi tersebut memenuhi:

CREATE: Menambahkan data baru berisikan nim dan nama yang diinput oleh user

READ: Mengembalikan nama dari nim yang diinput oleh user

UPDATE: Melakukan update data nama dari nim yang diinput oleh user

DELETE: Melakukan penghapusan data nim dan nama dari nim yang diinput oleh user

Data yang disimpan adalah data nama dan NIM dari mahasiswa STI ITB 2018 dalam database PostgreSQL. Data didapat dari data kelas yang dimiliki oleh developer.

Untuk melakukan hal tersebut, user akan diarahkan untuk login dengan menggunakan akun Google terlebih dahulu menggunakan OAuth 2.0. Setelah berhasil login, user akan diarahkan kembali ke halaman utama (frontend) dimana user dapat melakukan fungsi yang sudah disebutkan diatas. 

Setiap akses yang dilakukan dicatat dalam file ```access.log```.

Program ini dijalankan diatas Docker Container yang akan memudahkan user dan developer dalam menggunakan program tanpa harus melakukan instalasi environment (node package manager).

## Table of Contents

[Installation](https://github.com/hollyyph/simpleNIM#installation)

[File Structure](https://github.com/hollyyph/simpleNIM#file-structure)

[Library](https://github.com/hollyyph/simpleNIM#library)

- [Frontend](https://github.com/hollyyph/simpleNIM#frontend)
- [Backend](https://github.com/hollyyph/simpleNIM#backend)
- [Database](https://github.com/hollyyph/simpleNIM#database)
- [OAuth 2.0](https://github.com/hollyyph/simpleNIM#oauth-20)
- [Docker](https://github.com/hollyyph/simpleNIM#docker)

[Deployment](https://github.com/hollyyph/simpleNIM#deployment)


## Project Status
Saat ini project sudah dideploy dan dapat dicoba di https://thirsty-shaw-a2018a.netlify.app/.
Untuk fungsi INSERT dan UPDATE masih dalam maintenance.

## Installation
Jalankan command ini dalam bash pada frontend folder
```bash
npm run serve
```

Jalankan command ini dalam bash pada backend folder
```bash
npm start
```

## File Structure
Berikut adalah struktur file dari source code
```
Development
│   .gitignore
│   README.md
│   
│   
├───backend
│
├───database
│
└───frontend

#STRUKTUR FRONTEND
frontend
│   .gitignore
│   babel.config.js
│   package-lock.json
│   package.json
│   README.md
│   vue.config.js
│   Dockerfile
│   dev.env.js
│   prod.env.js
│
├───node_modules 
├───public
│       favicon.ico
│       google_logo.svg
│       index.html
│
└───src
    │   App.vue
    │   gapi.js
    │   main.js
    │
    ├───assets
    │       logo.png
    │       logo.svg
    │
    ├───components
    │       FormInput.vue
    │       HelloWorld.vue
    │
    └───plugins
            vue-google-oauth2.js
            vuetify.js
            
# STRUKTUR BACKEND
Backend
│   access.log
│   Dockerfile
│   heroku.yml
│   package-lock.json
│   package.json
│   passport-setup.js
│   static.json
│   server.js
│   .env
│
│
├───node_modules 
│
└───app
    │      
    ├───config
    │       db.config.js
    │
    ├───controllers
    │       simplenim.controllers.js
    │
    ├───models
    │       simplenim.models.js
    │       index.js
    │
    └───routes
            simplenim.routes.js

```


## Library and Modules
Project ini menggunakan library dan modules:
Frontend (VueJS):
1. Vuetify
2. Axios

Database (PostgreSQL)

Backend (NodeJS):
1. Express
2. Sequelize
3. Body-parser
4. Morgan
5. Cors
6. fs
7. Path
8. Passport
9. Cookie-session
10. pg
11. pg-hstore
12. router
13. passport-google-oauth20
14. dotenv
15. nodemon

### Frontend
Hanya terdapat 1 page yang berisikan input untuk melakukan CRUD functions.
Frontend dibuat dengan menggunakan Vuejs dengan library Vuetify untuk mempermudah pembangunan komponen (seperti button, layout, textbox, dll) dan library Axios untuk melakukan pemanggilan request HTTP.
Untuk development, frontend berjalan di http://localhost:8081/
Saat deployment, frontend berjalan di https://thirsty-shaw-a2018a.netlify.app/

### Backend
Terdapat beberapa fungsi yang diatur dalam backend, seperti akses ke database PostgreSQL, routing, OAuth dengan akun Google, logging. 
Routing diatur sesuai dengan CRUD functions yang disediakan, yakni GET, POST, PUT, dan DELETE. Untuk routing sendiri diatur oleh library router yang dimiliki oleh package express. 
Logging dibuat dengan menggunakan library morgan yang sekaligus mencatat aktivitas log di file ```access.log```.

Untuk development, backend berjalan di http://localhost:5000/
Saat deployment, backend berjalan di https://simplenim-app.herokuapp.com/

### Database
Database menggunakan PostgreSQL. Untuk melakukan akses dari HTTP request ke database, diatur dengan menggunakan library pg dan pg-store. 
Database sudah dideploy di ElephantSQL.
Saat development, backend masih berjalan di http://localhost:5432/, yakni port yang default digunakan oleh PostgreSQL.

### OAuth 2.0
User diharuskan untuk melakukan sign-in dengan akun Google sebelum masuk ke dalam page utama. OAuth ditambahkan di backend dengan menggunakan library passport.js dan cookie-session. Passport.js untuk menghubungkan dengan API Google OAuth yang telah dibuat di [https://console.developers.google.com/apis/] dan cookie-session untuk membuat session login. 
Saat development, OAuth masih berjalan di http://localhost:5000/google
Setelah deployment, OAuth berjalan di https://simplenim-app.herokuapp.com/google


### Docker
Backend ditaruh diatas Docker Container saat deployment di Heroku. 

## Deployment
Backend dideploy di Heroku.
https://simplenim-app.herokuapp.com/
Frontend dideploy di Netlify.
https://thirsty-shaw-a2018a.netlify.app/

## Pengembangan Lanjutan


# Author
Hollyana Puteri Haryono
Sistem dan Teknologi Informasi
Institut Teknologi Bandung
