import Image from "next/image";
import React from "react";
import constructionIllustration from "@/assets/images/undraw_under_construction_-46-pa.svg";
import { cn } from "@/lib/utils";
import { josefinSansThin } from "@/components/shared/constant";
import ConstructionIllustration from "@/components/lottie/constructionIllustration";
import { Reveal } from "@/components/animations/Reveal";
import { FadeInTop } from "@/components/animations/FadeInTop";
import { FadeInRight } from "@/components/animations/FadeInRight";
import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { DirectionalFadeIn } from "@/components/animations/directionalFadeIn";

const TopSection = () => {
  return (
    <div className=" grid md:grid-cols-2 w-full justify-center items-center md:h-screen max-w-screen-xl xl:mx-auto ">
      {/* left content container */}
      <div className="w-full md:mt-0 mt-16 md:text-start text-center ">
        <DirectionalFadeIn fadeIn="bottom">
          <h1
            className={cn(
              " xl:text-6xl sm:text-5xl text-3xl leading-relaxed ",
              josefinSansThin.className
            )}
          >
            We will help build your dream{" "}
            <strong className="font-bold text-[#001F3F]">professionally</strong>
            .
          </h1>
        </DirectionalFadeIn>
      </div>
      {/* right illusration image container */}
      <div className="w-full my-[95px]">
        <ConstructionIllustration />
      </div>
    </div>
  );
};

export default TopSection;
