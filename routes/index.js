const express = require('express'),
router = express.Router(),
apiRoutes = require('./api/apiRoutes'),
path = require('path');

// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send to the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

module.exports = router;