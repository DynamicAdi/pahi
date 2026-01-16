import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const res = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );

  const data = await res.json();

  if (!data.success || data.score < 0.6) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  return NextResponse.json({ success: true, score: data.score });
}
