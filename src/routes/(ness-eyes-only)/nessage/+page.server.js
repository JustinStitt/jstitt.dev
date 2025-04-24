import fs from "node:fs/promises"; // Using the promise-based API for cleaner async/await

export const load = async ({ params }) => {
  console.log("in +page.server.js!");
  const content = await fs.readFile("data/messages/log.txt");
  const last_line = content.toString().split("\n").at(-2);
  return {
    last_line: last_line,
  };
};
