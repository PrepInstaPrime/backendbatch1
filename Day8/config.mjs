import dotenv from 'dotenv';
dotenv.config();
let uri= process.env.MongoDB;
let PORT= process.env.PORT;
export {uri, PORT}