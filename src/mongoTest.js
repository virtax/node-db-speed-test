import { MongoClient } from 'mongodb';

export async function testMongo(url) {
  const client = new MongoClient(url);
  await client.connect();

  const db = client.db();
  const collection = db.collection('speed_test');
  await collection.deleteMany({});
  await collection.createIndex({ key: 1 });

  console.time('Write time');
  for (let i = 0; i < 1000; i++) {
    await collection.insertOne({ key: `doc_${i}`, value: `value_${i}` });
  }
  console.timeEnd('Write time');

  console.time('Read time');
  for (let i = 0; i < 1000; i++) {
    await collection.findOne({ key: `doc_${i}` });
  }
  console.timeEnd('Read time');

  await client.close();
}
