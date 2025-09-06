import { NextResponse } from "next/server";
import { authUser } from "@/lib/user";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const user = await authUser(email, password)
    if (user) {
      const payload = {
        userId: user.data.id,
        email: user.data.email,
        userRole: user.data.user_type,
        brand_id: user.data.brand_id,
        influencer_id: user.data.influencer_id,
      }
      const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET, {
        expiresIn: "7d", 
      });
      const res =  NextResponse.json({success: true, data: {
        userId: user.data.id,
        email: user.data.email,
        userRole: user.data.user_type,
        brand_id: user.data.brand_id,
        influencer_id: user.data.influencer_id,
      }});
      res.cookies.set("token", token, {
        httpOnly: true,
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return res
    }
  }catch(err){
    return NextResponse.json(
      { success: false, data: {user_type: role}, message: "Invalid credentials", "details": err },
      { status: 401 }
    );
    
  }
  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
