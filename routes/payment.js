'use strict';
const express = require('express');
const router = express.Router();

router.post('/api/v2/payments/refund', async (req, res) => {
  res.status(202).json({ status: 'refund_queued' });
});

module.exports = router;
