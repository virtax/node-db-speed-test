import { testRedis } from './redisTest.js';
import { testMongo } from './mongoTest.js';
import { testMongoById } from './mongoIdTest.js';
import { testPostgres } from './postgresTest.js';
import { inMemoryArrayTest } from './inMemoryArrayTest.js';
import { inMemoryObjectTest } from './inMemoryObjectTest.js';
import { fileTest } from './fileTest.js';

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  console.log('\nStart tests');
  console.log('Waiting 5 seconds for all services to be ready...');
  await wait(5000);

  console.log('\n--- In-Memory Array ---');
  await inMemoryArrayTest();

  console.log('\n--- In-Memory Object ---');
  await inMemoryObjectTest();

  console.log('\n--- File Test (Per-Operation IO) ---');
  await fileTest();

  console.log('\n--- Redis (Memory Only) ---');
  await testRedis(process.env.REDIS_MEMORY_URL);

  console.log('\n--- Redis (Disk Persistence) ---');
  await testRedis(process.env.REDIS_DISK_URL);

  console.log('\n--- MongoDB ---');
  await testMongo(process.env.MONGO_URL);

  console.log('\n--- MongoDB ID ---');
  await testMongoById(process.env.MONGO_URL);

  console.log('\n--- PostgreSQL ---');
  await testPostgres(process.env.POSTGRES_URL);

  console.log('\nFinish tests\n');
})();
