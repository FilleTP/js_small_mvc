import { createInterface } from "node:readline/promises";

async function input(prompt) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const answer = await rl.question(`${prompt}\n`);
  rl.close();
  return answer.trim();
}

export default input;
