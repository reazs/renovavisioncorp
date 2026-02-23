import { DirectionalFadeIn } from "@/components/animations/directionalFadeIn";
import { SignIn } from "@clerk/nextjs";
import React from "react";

// sign in form using next auth
const page = () => {
  return (
    <div className="flex h-[80vh] w-full justify-center items-center">
      <DirectionalFadeIn>
        <SignIn />
      </DirectionalFadeIn>
    </div>
  );
};

export default page;
