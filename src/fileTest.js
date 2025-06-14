import fs from 'fs/promises';
import path from 'path';

export async function fileTest() {
  const N = 1000;
  const filePath = path.resolve('./kv_store.txt');

  await fs.writeFile(filePath, '', 'utf-8');

  // --- Write per operation ---
  console.time('Write time');
  for (let i = 0; i < N; i++) {
    const line = `key_${i}:value_${i}\n`;
    await fs.appendFile(filePath, line, 'utf-8');
  }
  console.timeEnd('Write time');

  // --- Read per operation  ---
  console.time('Read time');
  for (let i = 0; i < N; i++) {
    const targetKey = `key_${i}`;
    const content = await fs.readFile(filePath, 'utf-8');
    const line = content
      .split('\n')
      .find(l => l.startsWith(`${targetKey}:`));
    if (!line) throw new Error(`Key not found: ${targetKey}`);
    const [, value] = line.split(':');
    if (value !== `value_${i}`) throw new Error(`Mismatch for ${targetKey}`);
  }
  console.timeEnd('Read time');
}
