import { Type } from '../models/type.js'

function createType(req, res) {
  Type.create(req.body)
    .then(type => {
      res.json(type)
    })
}

function index(req, res) {
  Type.find({})
    .then(items => {
      res.json(items)
    })
}

export {
  createType,
  index,
}