
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'bread'},
        {ingredient_name: 'Fukn leaves or some shit'},
        {ingredient_name: 'ranch'},
        {ingredient_name: 'bleu cheese'}
      ]);
};
