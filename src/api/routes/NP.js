const {
  getNPs,
  getNPByID,
  addNewNP,
  updateNP,
  deleteNP
} = require('../controllers/NP')

const nationalParksRoutes = require('express').Router()

nationalParksRoutes.get('/', getNPs)
nationalParksRoutes.get('/:id', getNPByID)
nationalParksRoutes.post('/', addNewNP)
nationalParksRoutes.put('/:id', updateNP)
nationalParksRoutes.delete('/:id', deleteNP)

module.exports = nationalParksRoutes
