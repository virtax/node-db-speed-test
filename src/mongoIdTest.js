import { MongoClient } from 'mongodb';

export async function testMongoById(url) {
  const client = new MongoClient(url);
  await client.connect();

  const db = client.db();
  const collection = db.collection('id_speed_test');
  await collection.deleteMany({});

  console.time('Write time');
    for (let i = 0; i < 1000; i++) {
    await collection.insertOne({ _id: `doc_${i}`, value:  `value_${i}` });
  }
  console.timeEnd('Write time');

  console.time('Read time');
  for (let i = 0; i < 1000; i++) {
    await collection.findOne({ _id: `doc_${i}` });
  }
  console.timeEnd('Read time');

  await client.close();
}
