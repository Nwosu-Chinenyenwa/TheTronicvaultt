// app/api/validate-reset-token/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { token } = await req.json();
    if (!token) return NextResponse.json({ valid: false }, { status: 400 });

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.json({ valid: true, payload });
    } catch (e) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }
  } catch (err) {
    console.error("validate token error:", err);
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
