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

    db.get(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (err, user) => {
            // 1. Database error (system failure)
            if (err) {
                return res.status(500).send(`Error: ${err.message}`);
            }

            // 2. No user found (expected state)
            if (!user) {
                return res.status(401).send('Invalid email or password');
            }

            bcrypt.compare(password, user.password_hash, (err, match) => {
                // 3. bcrypt error (system failure)
                if (err) {
                    return res.status(500).send(`Error: ${err.message}`);
                }

                // 4. Password incorrect (expected state
                if (!match) {
                    return res.status(401).send('invalid email or password');
                }

                // 5. Success
                res.send(`Welcome ${user.name}`);
            });
        }
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
