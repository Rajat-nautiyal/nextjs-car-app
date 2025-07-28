import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET() {
    console.log('rubnning')
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  const payload = token && verifyToken(token);
  if (!payload) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify({ userId: payload }), { status: 200 });
}
