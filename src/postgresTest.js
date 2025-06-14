import pg from 'pg';
const { Client } = pg;

export async function testPostgres(url) {
  const client = new Client({ connectionString: url });
  await client.connect();

  await client.query('DROP TABLE IF EXISTS speed_test');
  await client.query('CREATE TABLE speed_test (key TEXT PRIMARY KEY, value TEXT)');

  console.time('Write time');
  for (let i = 0; i < 1000; i++) {
    await client.query('INSERT INTO speed_test (key, value) VALUES ($1, $2)', [`key_${i}`, `value_${i}` ]);
  }
  console.timeEnd('Write time');

  console.time('Read time');
  for (let i = 0; i < 1000; i++) {
    await client.query('SELECT * FROM speed_test WHERE key = $1', [`key_${i}`]);
  }
  console.timeEnd('Read time');

  await client.end();
}
