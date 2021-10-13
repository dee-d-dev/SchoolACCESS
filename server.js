const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const resolvers = require('./resolvers')
const typeDefs = require("./typeDefs")

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("db connected");
});


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready at port ${url}`);
});
