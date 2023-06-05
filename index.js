const express = require('express');
const mariadb = require('mariadb');

// Configuración de la conexión a la base de datos
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'DBB',
  connectionLimit: 5
});

pool.getConnection()
  .then(connection => {
    console.log('Conexión a la base de datos establecida');
    connection.release();
  })
  .catch(err => {
    throw err;
  });

// Configuración del servidor Express
const app = express();

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
