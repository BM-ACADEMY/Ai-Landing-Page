const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController');

router.post('/payment/create-order', paymentController.createCourseOrder);
router.post('/payment/verify-payment', paymentController.verifyCoursePayment);


// --- NEW: Route to get all payments for the admin panel ---
router.get('/payment/history', paymentController.getPaymentHistory);

module.exports = router;