exports.seed = function(knex, Promise) {
  return knex("Users")
    .del()
    .then(function() {
      return knex("Users").insert([
        { user_id: 1, username: "User1" },
        { user_id: 2, username: "User2" },
        { user_id: 3, username: "User3" }
      ]);
    });
};
