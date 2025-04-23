import { json } from "@sveltejs/kit";
import { SECRET_COOKIE } from "$env/static/private";
import fs from "node:fs/promises"; // Using the promise-based API for cleaner async/await

const logFilePath = "data/messages/log.txt";

export async function POST({ request, cookies }) {
  const { message } = await request.json();
  const valid = cookies.get("access") === SECRET_COOKIE;
  if (valid) {
    const message_with_newline = message.endsWith("\n")
      ? message
      : `${message}\n`;
    await fs.appendFile(logFilePath, message_with_newline, "utf-8"); // probably don't allow emojis
  }

  return json({ valid: valid, redirectUrl: "/nessage" }, {
    status: valid ? 200 : 403,
  });
}
