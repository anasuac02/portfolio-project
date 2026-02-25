# 🚀 Portfolio Project – Full-Stack (Node.js + MySQL)

This is a full-stack personal portfolio website built using **HTML, CSS, JavaScript, Node.js and MySQL**.  
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

- npm install

2. Create database
```
CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. Start server

- node server.js

<img width="1837" height="952" alt="image" src="https://github.com/user-attachments/assets/9f7685df-32bb-4337-8c18-67b259d88705" />
<img width="1787" height="823" alt="image" src="https://github.com/user-attachments/assets/8fed2906-0a66-405c-b5d9-6f1dce1e9058" />
<img width="1901" height="174" alt="image" src="https://github.com/user-attachments/assets/cfa58120-916b-48c4-aa5f-edb2f5b3adc7" />
