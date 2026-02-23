import dbConnect from "@/lib/dbConnect";
import VerificationCode from "@/lib/models/verificationCode";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
  await dbConnect(); // Ensure database connection

  try {
    // Parse request body
    const { code } = await req.json();

    // Validate the input
    if (!code || typeof code !== "string" || code.length !== 6) {
      return NextResponse.json(
        { error: "Invalid code format. Code must be a 6-digit string." },
        { status: 400 }
      );
    }

    // Check if the code already exists
    const existCode = await VerificationCode.findOne({ code });
    if (existCode) {
      return NextResponse.json(
        { error: "Code already exists" },
        { status: 409 }
      );
    }

    // Create and save the new code
    const newCode = await VerificationCode.create({ code });

    return NextResponse.json({ success: true, code: newCode }, { status: 201 });
  } catch (error: any) {
    console.error("Error in creating verification code:", error?.stack ?? error?.message ?? error);
    return NextResponse.json(
      { error: error?.message ?? "Internal Server Error" },
      { status: 500 }
    );
  }
};
