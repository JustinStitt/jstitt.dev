import { redirect } from "@sveltejs/kit";
import { SECRET_COOKIE } from "$env/static/private";

export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith("/test")) {
    throw redirect(302, "/");
  }

  const has_access = event.cookies.get("access") === SECRET_COOKIE;

  if (!has_access && event.route.id.startsWith("/(ness-eyes-only)")) {
    throw redirect(302, "/ness-login");
  }

  if (!has_access && event.route.id.startsWith("/(yt-dl)")) {
    throw redirect(302, "/ness-login");
  }

  const response = await resolve(event);
  return response;
}
