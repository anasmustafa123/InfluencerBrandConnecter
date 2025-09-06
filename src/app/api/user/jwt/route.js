import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { userId, email, userRole, brand_id, influencer_id } = await req.json();
  try {
    const payload = {
      userId,
      email,
      userRole,
      brand_id,
      influencer_id,
    }
    const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET, {
    expiresIn: "7d", 
    });
    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res; 
  }catch(err){
    console.log({err});
    return NextResponse.json(
      { success: false, message: "Invalid credentials", "details": err },
      { status: 401 }
    ); 
  }
}
