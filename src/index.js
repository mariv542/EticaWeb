const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde /src/public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal → Renderiza un HTML desde /src/views
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
