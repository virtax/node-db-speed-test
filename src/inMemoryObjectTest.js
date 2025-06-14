export async function inMemoryObjectTest() {
  const data = {};
  const N = 1000;

  console.time('Write time');
  for (let i = 0; i < N; i++) {
    data[`key_${i}`] = `value_${i}`;
  }
  console.timeEnd('Write time');

  console.time('Read time');
  for (let i = 0; i < N; i++) {
    const value = data[`key_${i}`];
    if (value !== `value_${i}`) throw new Error('Data corrupted!');
  }
  console.timeEnd('Read time');
}
