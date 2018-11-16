
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users2',(table)=>{
        table.increments();
        table.string("username");
        table.string("email");
        table.string("password");
        table.boolean("active");
        table.timestamps("created_at");
        // table.timestamps("updated_at");
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users2');
};

// id : SERIAL column
// username : varchar column
// email : varchar column
// password : varchar column
// active : boolean column
// created_at : timestamps column
// updated_at : timestamps column