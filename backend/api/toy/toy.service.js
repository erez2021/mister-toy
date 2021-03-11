
const dbService = require('../../services/db.service')
// const logger = require('../../services/logger.service')
// const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    // getBytoyname,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('toy')
        var toys = await collection.find({}).toArray()
        return toys
        } catch (err) {
            loggerService.error('cannot find toys', err)
            throw err
        }
}

async function getById(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        const toy = await collection.findOne({ '_id': ObjectId(toyId) })
        return toy
    } catch (err) {
        logger.error(`while finding toy ${toyId}`, err)
        throw err
    }
}

async function remove(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        await collection.deleteOne({ '_id': ObjectId(toyId) })
    } catch (err) {
        logger.error(`cannot remove toy ${toyId}`, err)
        throw err
    }
}

async function update(toy) {
    try {
        // peek only updatable fields!
        const toyToSave = {
            _id: ObjectId(toy._id),
            price : toy.price,
            type: toy.type,
            inStock: toy.inStock
        }
        const collection = await dbService.getCollection('toy')
        await collection.updateOne({ '_id': toyToSave._id }, { $set: toyToSave })
        return toyToSave;
    } catch (err) {
        logger.error(`cannot update toy ${toy._id}`, err)
        throw err
    }
}

async function add(toy) {
    try {
        // peek only updatable fields!
        const toyToAdd = {
            name : toy.name,
            price : toy.price,
            type: toy.type,
            // inStock: toy.inStock
        }
        const collection = await dbService.getCollection('toy')
        await collection.insertOne(toyToAdd)
        return toyToAdd
    } catch (err) {
        logger.error('cannot insert toy', err)
        throw err
    }
}


function _makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function _savetoysToFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        fs.writeFile('data/toy.json', JSON.stringify(gtoys, null, 2), (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.txt) {
//         const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
//         criteria.$or = [
//             {
//                 username: txtCriteria
//             },
//             {
//                 fullname: txtCriteria
//             }
//         ]
//     }
//     if (filterBy.minBalance) {
//         criteria.balance = { $gte: filterBy.minBalance }
//     }
//     return criteria
// }




// function _createTesttoys() {]
//     const toys = []
//     for (var i = 0; i < 21; i++) {
//         toys.push(_createtoy(titles[parseInt(Math.random() * titles.length)] + i, parseInt(Math.random() * 1000)));
//     }
//     toys.forEach(toy => save(toy))
// }


