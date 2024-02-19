const User = require('../models/User');
const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    users: () => User.find(),
  },
  Mutation: {
    signUp: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
