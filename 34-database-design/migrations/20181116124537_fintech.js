
exports.up = function(knex, Promise) {
    return knex.schema.table("accounts",(table)=>{
        table.integer("account_id"),unique();;
        table.decimal("balance");
        table.string("username");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("accounts")
};
