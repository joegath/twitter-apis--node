import rl from 'readline';

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
export async function input(prompt) {
  return new Promise(async (resolve, reject) => {
    readline.question(prompt, (out) => {
      readline.close();
      resolve(out);
    });
  });
}