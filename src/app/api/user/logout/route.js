import { NextResponse } from "next/server";

export async function POST(req) {
  const res = NextResponse.redirect(new URL("/login", req.url));
  res.cookies.delete("token");
  console.log("Cookie deleted and redirecting to /login");
  return res;
}
