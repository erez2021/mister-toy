const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getToy, getToys, deleteToy, updateToy, addToy} = require('./toy.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getToys)
router.get('/:id', getToy)
router.post('/:id', addToy)
router.put('/:id',  updateToy)
router.delete('/:id',  requireAuth, requireAdmin, deleteToy)

// router.put('/:id',  requireAuth, updateToy)

module.exports = router