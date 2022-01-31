const express = require('express')
const db = require('../db/connection')
const { ObjectId } = require('mongodb')

const router = express.Router()

// Form criação de rota
router.get('/', (req, res) => {
  res.render('notes/create')
})

// Envio da nota para insersão no banco
router.post('/', (req, res) => {
  const data = req.body

  db.getDb()
    .db()
    .collection('notes')
    .insertOne({ title: data.title, description: data.description })

  res.redirect(301, '/')
})

module.exports = router
