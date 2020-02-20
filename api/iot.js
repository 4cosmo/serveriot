const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {  // ใช้ async function
    try {  
      res.send({ 
        ok: true,       // ส่ง status 
        text: 'IOT มีทั้งหมด 3 node',  // ส่งค่ากลับ
      })
    } catch (e) {
        res.send({ ok: false, error: e.message })
    }
})

router.get('/node1', async (req, res) => {
    try {
      let rows = await req.db.raw('select * from node1 order by id desc LIMIT 0,5')
      // let rows = await req.db('student').select('code', 'firstName as fname', 'lastName')
      res.send({
        ok: true,
        student: rows,
      })
    } catch (e) {
      res.send({ ok: false, error: e.message })
    }
})

router.get('/node2', async (req, res) => {
    try {
      let rows = await req.db.raw('select * from node2 order by id desc LIMIT 0,5')
      // let rows = await req.db('student').select('code', 'firstName as fname', 'lastName')
      res.send({
        ok: true,
        student: rows,
      })
    } catch (e) {
      res.send({ ok: false, error: e.message })
    }
})

router.get('/node3', async (req, res) => {
    try {
      let rows = await req.db.raw('select * from node3 order by id desc LIMIT 0,5')
      // let rows = await req.db('student').select('code', 'firstName as fname', 'lastName')
      res.send({
        ok: true,
        student: rows,
      })
    } catch (e) {
      res.send({ ok: false, error: e.message })
    }
})

router.post('/secth', async (req, res) => {
    try {
        let rows = await req.db.raw("SELECT * FROM `"+req.body.node+"` WHERE (temp >= "+req.body.minT+" AND temp <= "+req.body.maxT+") AND (humit >= "+req.body.minH+" AND humit <= "+req.body.maxH+") order by id DESC")
        // let rows = await req.db('student').select('code', 'firstName as fname', 'lastName')
        res.send({
          ok: true,
          student: rows,
        })
      } catch (e) {
        res.send({ ok: false, error: e.message })
      }
})

router.post('/sect', async (req, res) => {
    try {
        let rows = await req.db.raw("SELECT * FROM `"+req.body.node+"` WHERE (temp >= "+req.body.minT+" AND temp <= "+req.body.maxT+") order by id DESC")
        // let rows = await req.db('student').select('code', 'firstName as fname', 'lastName')
        res.send({
          ok: true,
          student: rows,
        })
      } catch (e) {
        res.send({ ok: false, error: e.message })
      }
})

router.post('/sech', async (req, res) => {
    try {
        let rows = await req.db.raw("SELECT * FROM `"+req.body.node+"` WHERE (humit >= "+req.body.minH+" AND humit <= "+req.body.maxH+") order by id DESC")
        // let rows = await req.db('student').select('code', 'firstName as fname', 'lastName')
        res.send({
          ok: true,
          student: rows,
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