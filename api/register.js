const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {  // ใช้ async function
    try {
      let db = req.db 
      //let rows = await db('student') // ใช้ await เพื่อรอผลรับ
      let rows
      rows = await db('user')      
      res.send({ 
        ok: true,       // ส่ง status 
        user: rows,  // ส่งค่ากลับ
      })
    } catch (e) {
        res.send({ ok: false, error: e.message })
    }
  })
  
  
  router.post('/', async (req, res) => {
    let db = req.db
    let ids = await db('user').insert({
      username: req.body.username,
      password: req.body.password,
      yname: req.body.yname,
    })
    res.send({
      ok: true,
      ids: ids
    })
  })