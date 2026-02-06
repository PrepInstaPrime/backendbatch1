import dotenv from 'dotenv'
dotenv.config();
let uri= process.env.MongoDB;
let port= process.env.PORT;
export {uri,port}