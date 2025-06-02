
const express = require('express');
const productRoutes = require('./productRoutes');

const router = express.Router();

// Use product routes
router.use('/api/products', productRoutes);

module.exports = router;