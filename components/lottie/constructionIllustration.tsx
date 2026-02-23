"use client";
import React from "react";
import animationData from "@/assets/lottieFiles/constructing-crane.json"; // Path to your Lottie JSON file
import LottieAnimation from "@/components/lottie/lottieAnimation";
const ConstructionIllustration = () => {
  return (
    <div className="flex justify-center items-center ">
      <LottieAnimation animationData={animationData} />
    </div>
  );
};

export default ConstructionIllustration;
// pages/index.js
