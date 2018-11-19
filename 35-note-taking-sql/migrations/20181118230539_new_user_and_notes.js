
exports.up = function(knex, Promise) {

    return knex.schema.createTable('users',function (table){ 
        table.increments('UserId').primary();
        table.string('Username').unique();
        table.string('Password');
        table.timestamps();
    })
    .then(function () {
      return knex.schema.createTable('notes_list',function(table){
        table.increments('NoteId').primary();
        table.integer('UserId').references('users.UserId');
        table.string('Title');
        table.string('Text');
      });     
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
    .then(function () {
        knex.schema.dropTable('notes_list')
      });
};
