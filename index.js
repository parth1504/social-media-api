const { ApolloServer} = require("apollo-server");
const { PubSub } = require('graphql-subscriptions');
const gql = require("graphql-tag");
const mongoose = require('mongoose');
const typeDefs= require('./grapql/typedefs');
const {MONGODB}= require('./config.js')
const resolvers = require('./grapql/resolvers');

const pubsub = new PubSub();

const server= new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req})=>({req, pubsub})
});

mongoose.connect(MONGODB,{useNewUrlParser: true})
.then(()=>{
    console.log("db connnected")
    return server.listen({port:5000});
})
.then(res=>{
    console.log(`server running at ${res.url}`)
});
