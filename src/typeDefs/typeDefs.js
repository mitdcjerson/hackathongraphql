const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query{
        users:[User]
        user(id:ID!):User
        infos:[Info]
    }
    type User{
        id: ID, 
        name: String,
        password:String
    }
    type Info{
        id: ID, 
        type: String,
        text: String,
        result: String,
    }
`;