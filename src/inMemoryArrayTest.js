export async function inMemoryArrayTest() {
  const data = [];
  const N = 1000;

  console.time('Write time');
  for (let i = 0; i < N; i++) {
    data.push({ id: i, value: `value_${i}` });
  }
  console.timeEnd('Write time');

  console.time('Read time');
  for (let i = 0; i < N; i++) {
    const item = data[i];
    if (!item || item.id !== i) throw new Error('Data corrupted!');
  }
  console.timeEnd('Read time');
}
