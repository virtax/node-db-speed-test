import Redis from 'ioredis';

export async function testRedis(url) {
  const redis = new Redis(url);
  const key = 'speed_test_key';

  console.time('Write time');
  for (let i = 0; i < 1000; i++) {
    await redis.set(`${key}_${i}`, `value_${i}` );
  }
  console.timeEnd('Write time');

  console.time('Read time');
  for (let i = 0; i < 1000; i++) {
    await redis.get(`${key}_${i}`);
  }
  console.timeEnd('Read time');

  await redis.quit();
}
