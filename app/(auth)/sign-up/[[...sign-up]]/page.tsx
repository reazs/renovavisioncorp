import { DirectionalFadeIn } from "@/components/animations/directionalFadeIn";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex h-[90vh] w-full justify-center items-center">
      <DirectionalFadeIn>
        <SignUp />
      </DirectionalFadeIn>
    </div>
  );
};

export default page;
