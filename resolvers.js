const environment = process.env.NODE_ENV;
const config = require("./knexfile")[environment];
const knex = require("knex")(config);

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

export const resolvers = {
  Query: {
    books: () => books,
    users: () => {
      return knex("Users")
        .select("*")
        .then(users => {
          if (!users) {
            throw new Error("Error fetching users");
          }
          return users;
        });
    }
  },
  Mutation: {
    createUser: (root, args) => {
      return knex("Users")
        .insert({ username: args.username })
        .then(ids => {
          return knex("Users")
            .select("*")
            .where({ user_id: ids[0] })
            .then(users => {
              return users[0];
            });
        });
    }
  }
};
