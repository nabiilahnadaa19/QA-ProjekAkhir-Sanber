# 🧪 Final Project Quality Assurance Engineer Sanbercode

## 👤 Pengenalan Diri
Halo, saya **[Nama Kamu]**, peserta program **Quality Assurance Engineer Sanbercode**.  
Proyek ini merupakan tugas akhir berupa **automation testing menggunakan Cypress** untuk menguji fitur pada website **[OrangeHRM Demo](https://opensource-demo.orangehrmlive.com)**.  

---

## 📌 Judul Proyek
**Final Project Quality Assurance Engineer Sanbercode**  
Automation Testing dengan Cypress (UI & API Testing).

---

## ⚙️ Fitur yang Dikerjakan

### 🔑 Login Page

### 🔐 Forgot Password Flow

### 📂 Directory Page

---

## 🛠️ Teknologi yang Digunakan
- [Cypress](https://www.cypress.io/) 

---

## 📂 Struktur Folder Project

```
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
```

---

## 🚀 Cara Menjalankan Project

1. **Clone Repository**
   ```bash
   git clone https://github.com/username/final-project-qa-sanbercode.git
   cd final-project-qa-sanbercode
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Menjalankan Cypress GUI**
   ```bash
   npx cypress open
   ```

4. **Menjalankan Cypress di Headless Mode**
   ```bash
   npx cypress run
   ```

5. **Menjalankan Test Tertentu**
   ```bash
   npx cypress run --spec "cypress/e2e/login.cy.js"
   ```

---
