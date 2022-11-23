const router = require('express').Router;
const apiRoutes = require('/api');

router.use('/api', apiRoutes);
router.user((req, res) => res.send('route not found: try again.'));

module.exports = router;