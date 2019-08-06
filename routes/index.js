var express = require('express');
var router = express.Router();

//Public API
require('./public/tutor')(router)

//Private API


module.exports = router;