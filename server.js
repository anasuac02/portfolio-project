const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// SERVE PUBLIC FOLDER (THIS IS THE IMPORTANT PART)
app.use(express.static(path.join(__dirname, "public")));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MOHAR2006",
    database: "portfolio"
});

db.connect((err) => {
    if (err) {
        console.error("MySQL Error:", err);
        return;
    }
    console.log("MySQL Connected");
});

// Contact Form API
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error("Insert Error:", err);
            return res.status(500).send("Error saving message");
        }
        res.send("Message Sent Successfully!");
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});