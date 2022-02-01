const express = require('express')
const db = require('../db/connection')
const { ObjectId } = require('mongodb')

const router = express.Router()

// View de criação de tarefa
router.get('/', (req, res) => {
  res.render('notes/create')
})

// Inclusão da tarefa
router.post('/', (req, res) => {
  const data = req.body

  db.getDb()
    .db()
    .collection('notes')
    .insertOne({ title: data.title, description: data.description })

  res.redirect(301, '/')
})

// Excluir a tarefa
router.post('/delete', (req, res) => {
  const data = req.body
  const id = new ObjectId(data.id)

  db.getDb()
    .db()
    .collection('notes')
    .deleteOne({ _id: id })

  res.redirect(301, '/')  
})

// View de detalhes da tarefa
router.get('/:id', async (req, res) => {
  const id = new ObjectId(req.params.id)

  const note = await db.getDb()
    .db()
    .collection('notes')
    .findOne({ _id: id })
  
  res.render('notes/detail', { note })
})

// View de edição da tarefa
router.get('/edit/:id', async(req, res) => {
  const id = new ObjectId(req.params.id)

  const note = await db.getDb()
    .db()
    .collection('notes')
    .findOne({ _id: id })

  res.render('notes/edit', { note })
})

// Edição da tarefa
router.post('/update', (req, res) => {
  const data = req.body
  const id = new ObjectId(data.id)

  db.getDb()
    .db()
    .collection('notes')
    .updateOne({ _id: id }, {$set: { 
      title: data.title, 
      description: data.description.trim()
    }})

  res.redirect(301, '/')
})

module.exports = router
