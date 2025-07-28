const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController');

router.post('/payment/create-order', paymentController.createCourseOrder);
router.post('/payment/verify-payment', paymentController.verifyCoursePayment);

module.exports = router;