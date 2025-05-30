export async function load(event) {
  let cookies = event.cookies;
  let theme = "light";
  let theme_cookie = cookies.get("theme");

  if (!theme_cookie) theme = "dark";

  if (theme_cookie === "dark" || theme_cookie === "light") {
    theme = theme_cookie;
  }

  return { theme };
}
