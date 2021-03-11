const express = require('express')
const toyService = require('./toy.service.js')
const logger = require('../../services/logger.service')


const router = express.Router()

// List Of Toys
async function getToys(req, res) {
 try {
    const filterBy = {
        txt: req.query.txt || '',
        pageIdx: +req.query.pageIdx || 0
    }
    const toys = await toyService.query(filterBy)
    res.send(toys)
} catch (err) {
    logger.error('Failed to get toys', err)
    res.status(500).send({ err: 'Failed to get toys' })
}
}

// Get a single toy by id
async function getToy(req, res) {
    try {
    const toy = await toyService.getById(req.params.id)
    res.send(toy) 
    } catch (err) {
        logger.error('Failed to get toy', err)
    res.status(500).send({ err: 'Failed to get toy' })
    }
        
}
// Add Toy
async function addToy(req, res) { 
    try {
    const toy = req.params.id// not working with req.body
    const savedToy = await toyService.add(toy)
    res.send(savedToy)
} catch (err) {
    logger.error('Failed to add toy', err)
    res.status(500).send({ err: 'Failed to add toy' })
}
}


// Update a Toy
async function updateToy(req, res) { 
    try {
    const toy = req.params.id  // not working with req.body
    const savedToy = await toyService.update(toy)
    res.send(savedToy)
        } catch (err) {
            logger.error('Failed to update toy', err)
            res.status(500).send({ err: 'Failed to update toy' })
        }
}

// remove toy by id
async function deleteToy(req, res) { 
    try {
   await toyService.remove(req.params.id)
            res.send('Deleted...')
        } catch(err) {
            logger.error('Failed to get toy', err)
            res.status(500).send({ err: 'Failed to get toy' })
        }
}

module.exports = {
    getToy,
    getToys,
    deleteToy,
    updateToy,
    addToy
}