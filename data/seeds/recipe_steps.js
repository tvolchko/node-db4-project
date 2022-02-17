
exports.seed = function(knex, promise) {
      return knex('step_ingredients').insert([
        {recipe_id: 1, step_id: 1, ingredient_id: 1, quantity:1 },
        {recipe_id: 2, step_id: 2, ingredient_id: 2, quantity: '6'},
        {recipe_id: 2, step_id: 3, ingredient_id: 3, quantity: 3},
        {recipe_id: 2, step_id: 3, ingredient_id: 4, quantity: 1}
      ]);
  };
