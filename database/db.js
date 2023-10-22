import { createClient } from "redis";

export default async function connectToDB() {
  const client = createClient({
    password: "XBEZYMBlzR9BSRj1GpLGBHn1pbYmtqjy",
    socket: {
      host: "redis-11826.c1.asia-northeast1-1.gce.cloud.redislabs.com",
      port: 11826,
    },
  });
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();

  return client;
}
