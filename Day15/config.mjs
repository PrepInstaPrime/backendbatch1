import dotenv from 'dotenv'
dotenv.config()
let config={
    port: process.env.PORT || 8000,
    URI:process.env.mongoDB,
    redisUserName:process.env.redisUserName,
    redisPassword:process.env.redisPassword,
    redisHost:process.env.redisHost,
    redisPort:process.env.redisPort
}
export default config;