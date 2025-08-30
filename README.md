Final Project Quality Assurance Engineer Sanbercode
👤 Pengenalan Diri

Halo, saya Nabiilah Nada Iswari, peserta program Quality Assurance Engineer Sanbercode.
Proyek ini merupakan tugas akhir berupa automation testing menggunakan Cypress untuk menguji fitur pada website OrangeHRM Demo.

📌 Judul Proyek Akhir

Final Project Quality Assurance Engineer Sanbercode
Automation Testing dengan Cypress (UI & API Testing).

⚙️ Fitur-Fitur yang Dikerjakan

Login Page

Forgot Password

Directory Page

🛠️ Teknologi yang Digunakan

Cypress

📂 Struktur Folder Project
cypress/
│
├── e2e/
│   ├── login.cy.js
│   ├── forgotPassword.cy.js
│   └── directory.cy.js
│
├── support/
│   ├── commands.js
│   ├── e2e.js
│   └── POM/
│       ├── LoginPage.js
│       ├── ForgotPasswordPage.js
│       └── DirectoryPage.js
│
└── fixtures/
    └── example.json

🚀 Cara Menjalankan Project

Clone Repository

git clone https://github.com/username/final-project-qa-sanbercode.git
cd final-project-qa-sanbercode


Install Dependencies

npm install


Menjalankan Cypress GUI

npx cypress open


Menjalankan Cypress di Headless Mode

npx cypress run
