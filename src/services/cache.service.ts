import { redis } from "../config/redis";

export const cacheSet = async (key: string, value: any, ttl = 60) => {
  await redis.set(key, JSON.stringify(value), "EX", ttl);
};

export const cacheGet = async (key: string) => {
  const value = await redis.get(key);
  return value ? JSON.parse(value) : null;
};
