const express = require('express');
const path = require('path');
const db = require('./db');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.get(['/', '/login'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.post('/register', (req, res) => {
    const { name, email, password, role } = req.body;

    bcrypt.hash(password, 10, function( err, hash) {
        if (err) {
            return res.status(500).send("Hashing failed");
        }

        db.run(
            `INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)`,
            [name, email, hash, role],
            function (err) {
                if (err) {
                    return res.status(500).send(`Error: ${err.message}`);
                }
                res.send(`
                    <h1>Registration successful!</h1>
                    <p>Redirect to login page...</p>
                    <script>
                        setTimeout(() => {
                            window.location.href = '/login';
                        }, 3000)
                    </script>
                `)
            }
        );
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) {
            return res.status(500).send(`Error: ${err.message}`);
        }

        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        bcrypt.compare(password, user.password_hash, (err, match) => {
            if (err) {
                return res.status(500).send(`Error: ${err.message}`);
            }

            if (match) {
                res.send(`Welcome ${user.name}`);
            } else {
                res.status(401).send(`Error: ${err.message}`);
            }
        })
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "light",
  localStorage.theme === "light" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");