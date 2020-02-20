const express = require('express')
const router = express.Router()

module.exports = router

router.use('/login', require('./login'))
router.use('/student', require('./student'))
router.use('/register', require('./register'))
router.use('/iot', require('./iot'))
