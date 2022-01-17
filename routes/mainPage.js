const express = require('express');
const router = express.Router();
const {renderHomepage} = require("../controllers/renderTemplate")

router.get('/', renderHomepage);

module.exports = router;