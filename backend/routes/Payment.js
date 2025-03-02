const express = require('express');
const Razorpay = require('razorpay');

const router = express.Router();

const razorpay = new Razorpay({
	key_id: 'rzp_test_yRICbmzmpY7nEE',
	key_secret: 'mz7kC7ksyimeXGY0YtJKKZq2',
});

router.post('/createOrder', async (req, res) => {
	const { amount, currency, receipt } = req.body;

	try {
		const options = {
			amount: amount * 100,
			currency: currency,
			receipt: receipt,
		};

		const order = await razorpay.orders.create(options);

		res.json({
			success: true,
			order,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, error: 'Error creating order' });
	}
});

router.post('/capturePayment', async (req, res) => {
	const { payment_id, amount } = req.body;

	try {
		const captureResponse = await razorpay.payments.capture(
			payment_id,
			amount * 100
		);

		res.json({
			success: true,
			captureResponse,
		});
	} catch (error) {
		console.error(error);
		if (
			error.error &&
			error.error.code === 'BAD_REQUEST_ERROR' &&
			error.error.description === 'This payment has already been captured'
		) {
			// If payment is already captured, we can consider this a success
			return res.json({
				success: true,
				message: 'Payment was already captured',
				paymentId: payment_id,
			});
		}
		res.status(500).json({
			success: false,
			error: 'Error capturing payment',
			details: error.error ? error.error.description : 'Unknown error',
		});
	}
});

module.exports = router;
