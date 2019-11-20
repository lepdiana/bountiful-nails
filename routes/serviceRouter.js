const express = require('express')
const serviceRouter = express.Router()
const Service = require('../models/service.js')

serviceRouter.get('/', (req, res, next) => {
    Service.find((err, services) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(services)
    })
})

serviceRouter.post('/', (req, res, next) => {
    const newService = new Service(req.body)
    newService.save((err, newSavedservice) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedservice)
    })
})

serviceRouter.delete('/:_id', (req, res, next) => {
    Service.findByIdAndRemove(req.params._id, (err, service) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(service)
    })
})

serviceRouter.put('/:_id', (req, res, next) => {
    Service.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
        (err, service) => {
            if (err) {
                res.status(500)
            }
            return res.send(service)
        }
    )
})

module.exports = serviceRouter