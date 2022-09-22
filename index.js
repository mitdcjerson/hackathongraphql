const {ApolloServer} = require('apollo-server');
const typeDefs = require('./src/typeDefs/typeDefs');
const resolvers = require('./src/resolvers/resolvers');

const server = new ApolloServer({typeDefs,resolvers});

server
.listen(3030)
.then((info)=>{
    console.log("GraphQL server running on port"+ 3030);
});