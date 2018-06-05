const router = require('express').Router()
const {Watch} = require('../db/models')

router.get('/browse', async(req, res, next) => {
    try {
        const watches = await Watch.findAll()
        res.json(watches)
    } catch (error) {
        console.log(error)
        console.log('HA;SLDKFA;DSKFA;SDKF;ASDFAS;DF')
        next(error)
    }
})

router.get('/browse/:id', async(req, res, next) => {
    try {
        const watchId = req.params.id
        const watch = await Watch.findById(watchId)
        res.json(watch)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.post('/sell', async(req, res, next) => {
    try {
        const watchToSell = await Watch.create(req.body)
        res.json(watchToSell)
    } catch (error) {
        console.log(error)
        next(error)
    }
})


router.put('/:id/edit', async(req, res, next) => {
    try {
        const watchToEdit = await Watch.update(req.body, {where: {id: req.params.id}, returning: true})
        res.json(watchToEdit[1][0])
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete('/:id/delete', async (req, res, next) => {
    try {
        await Watch.destroy({where: {id: req.params.id}})
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

module.exports = router
