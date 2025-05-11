const express = require('express');
const router = express.Router();

// Ruta de prueba para confirmar que todo funciona
router.get('/', (req, res) => {
  res.send('Usuario ok');
});

module.exports = router;
