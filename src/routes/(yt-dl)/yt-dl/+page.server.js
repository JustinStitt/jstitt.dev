import { YTDL_API_URL } from "$env/static/private";
export const load = async ({ fetch }) => {
  const api_url = YTDL_API_URL + "/list_of_videos";
  const videos_promise = fetch(api_url).then((response) => {
    return response.json();
  });

  return { promise: videos_promise };
};
