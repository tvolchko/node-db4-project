const Recipes = require('./model')
const router = require('express').Router()

router.get('/:id', (req, res, next) => {
    Recipes.getRecipeById(req.params.id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(next)
})

module.exports = router