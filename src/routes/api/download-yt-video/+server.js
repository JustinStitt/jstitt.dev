import { json } from "@sveltejs/kit";
import { YTDL_API_URL } from "$env/static/private";

export async function POST({ request, fetch }) {
  const { video_url } = await request.json();

  const api_url = new URL(YTDL_API_URL + "/download_from_url");
  api_url.searchParams.append("url", video_url);
  api_url.searchParams.append("file_preset", "mp4");
  const response = await fetch(api_url);
  const data = await response.json();

  return json({ data }, { status: 200 });
}

// https://www.youtube.com/watch?v=0yZcDeVsj_Y
