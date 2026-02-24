# 🚀 Portfolio Project – Full-Stack (Node.js + MySQL)

This is a full-stack personal portfolio website built using **HTML, CSS, JavaScript, Node.js, Express, and MySQL**.  
It includes a **dynamic contact form** that stores messages directly into a MySQL database.

---

## 🌐 Run Locally

Start the server:
node server.js

Site opens at:
http://localhost:3000

---

## 📁 Project Structure
```
portfolio-project/
│── server.js
│── package.json
│── package-lock.json
│
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ✨ Features
- Modern responsive UI  
- Dark mode toggle  
- Typing animation  
- Glassmorphism styling  
- Scroll fade-in animation  
- Contact form with validation  
- Stores message into MySQL database  

---

## 🧩 Technologies Used
### Frontend:
- HTML5  
- CSS3  
- JavaScript  

### Backend:
- Node.js  
- Express.js  

### Database:
- MySQL  

---

## 📬 API Endpoint
### `POST /contact`

### Body:
```json
{
  "name": "John",
  "email": "john@gmail.com",
  "message": "Hello!"
}
```

---

## 🛠 Setup
1. Install dependencies
npm install

2. Create database
CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
