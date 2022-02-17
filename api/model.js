const db = require('../data/db-config.js');

const getRecipeById = async (id) => {
    const query = await db('step_ingredients as sting')
        .leftJoin('steps as st', 'sting.step_id', 'st.step_id')
        .leftJoin('ingredients as i', 'sting.ingredient_id', 'i.ingredient_id')
        .leftJoin('recipes as r', 'sting.recipe_id', 'r.recipe_id')
        .where('r.recipe_id', id)
    const shaped = {
        recipe_id: query[0].recipe_id,
        recipe_name: query[0].recipe_name,
        steps: []
    }
    const stepHolder = []
    query.forEach(step => {
        if(stepHolder.filter(holder => step.instructions === holder).length < 1){
            console.log(stepHolder.filter(holder => step.instructions === holder))
            stepHolder.push(step.instructions)
            shaped.steps.push({
                step_id: step.step_id,
                step_number: step.step_number,
                instructions: step.instructions,
                ingredients: [step.ingredient_name]
            })
        } else {
            shaped.steps[step.step_number - 1].ingredients.push(step.ingredient_name)
        }
        
    })
    return shaped
}

module.exports = {
    getRecipeById
}