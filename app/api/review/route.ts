import dbConnect from "@/lib/dbConnect";
import Review from "@/lib/models/review";
import VerificationCode from "@/lib/models/verificationCode";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the incoming request
    const { name, project, rating, review, completionDate, code } =
      await req.json();
    console.log("Incoming data:", {
      name,
      project,
      rating,
      review,
      completionDate,
    });
    // update the verification code to used

    const verificationCode = await VerificationCode.findOne({ code });
    if (verificationCode) {
      verificationCode.isUsed = true;
      await verificationCode.save();
    }

    // Create a new review document
    const newReview = await Review.create({
      name,
      project,
      rating,
      review,
      completionDate: completionDate, // Ensure valid Date
    });

    return NextResponse.json(
      { success: true, review: newReview },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    // connect to the database
    await dbConnect();

    // get all the reviews
    const reviews = await Review.find();
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server error" },
      { status: 500 }
    );
  }
};
