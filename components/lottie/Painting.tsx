"use client";
// pages/index.js
import animationData from "@/assets/lottieFiles/painting.json"; // Path to your Lottie JSON file
import LottieAnimation from "@/components/lottie/lottieAnimation";
export default function ConstructionPainting() {
  return (
    <div className="flex justify-center items-center ">
      <LottieAnimation animationData={animationData} />
    </div>
  );
}
