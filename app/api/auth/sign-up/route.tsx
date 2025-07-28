import { User } from "@/model/User";
import { connectToDb } from "@/lib/connectToDb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    await connectToDb();
    const { username, email, password } = await req.json();
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return new Response(JSON.stringify({ error: "Email already exist" }), {
        status: 409,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({
      name: username,
      email: email,
      password: hashedPassword,
    });
    return new Response(JSON.stringify({ message: "Success", user: newUser }), {
      status: 201,
    });
  } catch (e) {
    return new Response(JSON.stringify({ message:"Something went wrong",error: String(e)}), {
      status: 500,
    });
  }
}
