const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./src/schemas');
const resolvers = require('./src/resolvers');

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  await mongoose.connect('mongodb://localhost:27017/User', { useNewUrlParser: true });

  app.listen(4000, () => console.log(`Server running on http://localhost:4000${apolloServer.graphqlPath}`));
}

startServer();