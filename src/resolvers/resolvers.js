const {default:fetch} = require('node-fetch');
const API_URL = "http://localhost:3002";

const Query = {
    users: async (parent,args,content,info) =>{
        const response = await fetch(`${API_URL}/users`);
        const result = await response.json();
        return result;
    },
    user: async (parent,args,content,info) =>{
        const response = await fetch(`${API_URL}/users/${args.id}`);
        const result = await response.json();
        return result;
    },
    infos: async (parent,args,content,info) =>{
        const response = await fetch(`${API_URL}/infos`);
        const result = await response.json();
        return result;
    },
};


module.exports = {Query};