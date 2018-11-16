
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookings',(table)=>{
        table.increments();
        table.date("date");
        table.string("remark");
        table.timestamps("created_at");
        // table.timestamps("updated_at");
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookings');
};
