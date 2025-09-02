import { NextResponse } from "next/server";
import { authUser } from "@/lib/user";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const user = await authUser(email, password)
    console.log({user});
    if (user) {
      const res = NextResponse.json({ success: true });
      res.cookies.set("token", "sample-jwt-token", {
        httpOnly: true,
        secure: false,
        path: "/",
      });
      return res;
    }
  }catch(err){
    console.log({err});
    return NextResponse.json(
      { success: false, message: "Invalid credentials", "details": err },
      { status: 401 }
    );
    
  }
  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
