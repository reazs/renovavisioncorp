import dbConnect from "@/lib/dbConnect";
import VerificationCode from "@/lib/models/verificationCode";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { code } = await req.json();

    const findCode = await VerificationCode.findOne({ code });
    if (!findCode) {
      return NextResponse.json(
        { error: "Could not find the verification code" },
        { status: 404 }
      );
    }

    return NextResponse.json(findCode, { status: 200 });
  } catch (error) {}
};
