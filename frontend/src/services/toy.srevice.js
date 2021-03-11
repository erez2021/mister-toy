

import axios from 'axios'
import {asyncStorageService} from './async-storage.service.js'
import {storageService} from './storage.service.js'
import {utilService} from './util.service.js'

const TOY_URL = 'http://localhost:3030/api/toy'
const KEY = 'toys';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
    _update
}



function query() {
    return asyncStorageService.query(KEY)
    .then((toys) => {
        if (!toys || !toys.length) {
            toys = [
                    _createToy(),
                    _createToy(),
                ]
            localStorage.setItem(KEY, JSON.stringify(toys))
        }
        return toys;
    })
}

function getById(id) {
    return asyncStorageService.get(KEY, id)
}

function remove(id) {
   return asyncStorageService.remove(KEY, id)
}

function save(toy) {
    console.log(toy)
    if (toy._id) return asyncStorageService.put(KEY, toy)
    else {
        toy._id = utilService.makeId()
        return asyncStorageService.post(KEY, toy)
    }
}


function _add(toy) {
    gToys.push(toy)
    return toy
}

function _update(toy) {
    if(toy._id) {
    const idx = gToys.findIndex(currToy => currToy._id === toy._id)
    if (idx<0) return
    gToys.splice(idx, 1, toy)
    } else {
        toy._id = utilService.makeId()
        gToys.push(toy)
    }
    storageService.saveToStorage(KEY, gToys)
}




function getEmptyToy() {
    return {
        _id: '',
        name: '',
        type: '',
        price: getRandomInt(50, 300),
        createdAt:Date.now(),
        inStock: getRandomInt(0,100) > 50 ? true : false
    }
}

function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    if (!toys || !toys.length) {
        toys = [
                _createToy(),
                _createToy(),
            ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
    return toys;
}

function _createToy() {
    return { 
 _id: utilService.makeId(),
 name: 'Talking Doll',
 price:  getRandomInt(50, 300),
 type: 'Funny',
 createdAt: 33321111111,
 inStock: true
}
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

