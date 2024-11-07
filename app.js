const express = require('express');
const app = express();
const path = require('path');

// Archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => res.redirect('/login'));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/welcome', (req, res) => res.sendFile(path.join(__dirname, 'views', 'welcome.html')));

// Inicialización del servidor
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
