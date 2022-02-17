
exports.seed = function(knex, promise) {
      return knex('recipes').insert([
        {recipe_name: 'toast'},
        {recipe_name: 'salad'}
      ]);
};
