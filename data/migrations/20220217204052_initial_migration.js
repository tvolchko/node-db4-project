
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128);
      })

    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.string('instructions').notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('step_number').notNullable()
      })  
    
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.string('ingredient_name').notNullable()
      })

    .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredient_id')
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.float('quantity').notNullable()

      })    
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('step_ingredients')
};
