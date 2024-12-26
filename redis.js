import Redis from "ioredis"

const redis = new Redis({
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:process.env.PASSWORD
})

redis.on('connect',()=>{
    console.log("Redis Connect Successfully")
})

export{
    redis
}