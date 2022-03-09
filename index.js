const redis = require("redis-promisify");

async function access() {
  const client = redis.createClient({
    host: "127.0.0.1",
    port: 6379,
    db: 0,
  });

  let a = await client.getAsync("a");

  if (a) {
    //read from redis only
    console.log("a  found", a);
  } else {
    //read fron database
    //set value to redis
    await client.setAsync("a", "value here");
  }
}
/*
delAsync
hsetAsync
hgetAsync
hdelAsync

*/

access();
