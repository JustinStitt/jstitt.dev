import { json, redirect } from "@sveltejs/kit";
import { NESS_PASSWORD, SECRET_COOKIE } from "$env/static/private";
export async function POST({ request, cookies }) {
  const { currently_entered_password: pwd } = await request.json();

  const valid = NESS_PASSWORD === pwd;
  if (valid) {
    const farFuture = new Date();
    farFuture.setFullYear(farFuture.getFullYear() + 10); // 10 years
    cookies.set("access", SECRET_COOKIE, {
      path: "/",
      httpOnly: true,
      expires: farFuture,
      sameSite: "strict",
    });
  }
  return json({ valid: valid, redirectUrl: "/" }, {
    status: valid ? 200 : 403,
  });
}
