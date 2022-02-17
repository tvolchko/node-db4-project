
exports.seed = function(knex, promise) {
      return knex('steps').insert([
        {instructions: 'toast the bread', recipe_id: 1, step_number: 1},
        {instructions: 'make the salad', recipe_id: 2, step_number:1},
        {instructions: 'add dressing', recipe_id:2, step_number:2}
      ]);
};
