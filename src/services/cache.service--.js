import expressRedisCache from 'express-redis-cache';

const redisUrl = new URL(process.env.REDIS_URL);
// const cacheService = expressRedisCache({
  host: redisUrl.hostname,
  port: redisUrl.port,
  auth_pass: redisUrl.password,
});

// export default cacheService;
