import { User } from "@/model/User";
import { connectToDb } from "@/lib/connectToDb";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    await connectToDb();
    const { email, password } = await req.json();
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      const isMatch = await bcrypt.compare(password, existingEmail.password);
      if (!isMatch)
        return new Response(
          JSON.stringify({ message: "Incorrect Credentials" }),
          {
            status: 409,
          }
        );
      const token = signToken({ id: existingEmail._id }, "1h");
      const cookieStore = await cookies();
      cookieStore.set("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 1,
        path: "/",
      });
      return new Response(
        JSON.stringify({
          message: "Logged in Successfully",
          user: existingEmail,
        }),
        {
          status: 200,
        }
      );
    } else {
      return new Response(JSON.stringify({ message: "Invalid Credentials" }), {
        status: 404,
      });
    }
  } catch (e) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error: e }),
      {
        status: 500,
      }
    );
  }
}
