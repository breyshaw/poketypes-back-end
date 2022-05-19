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

function deleteType(req, res) {
  Type.findByIdAndDelete(req.params.id)
  .then(type => res.json(type)) //returning the deleted type as a JSON object so I can store it as a variable to remove the deleted type from state on the front-end
  .catch(err => res.json(err))
}

export {
  createType,
  index,
  deleteType as delete
}