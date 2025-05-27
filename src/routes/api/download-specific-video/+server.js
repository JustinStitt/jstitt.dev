import { YTDL_API_URL } from "$env/static/private";

export async function GET({ url, fetch }) {
  const video_name = url.searchParams.get("video_name");

  const api_url = new URL(YTDL_API_URL + "/download_specific");
  api_url.searchParams.append("video_name", video_name);
  const response = await fetch(api_url);
  return new Response(response.body, { status: response.status });
}

// test url: https://www.youtube.com/watch?v=0yZcDeVsj_Y
