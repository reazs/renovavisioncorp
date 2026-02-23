import {
  josefinSansBold,
  josefinSansRegular,
  josefinSansThin,
} from "@/components/shared/constant";
import { cn } from "@/lib/utils";
import React from "react";
import "./about.css";
import Image from "next/image";
import { FadeInRight } from "@/components/animations/FadeInRight";
import buidlingRoof from "@/assets/images/Urban Rooftop Gathering at Golden Hour.jpeg";
import workingRoof from "@/assets/images/long-shot-men-working-roof_23-2149343678.jpg";
import exterior from "@/assets/images/pexels-expect-best-79873-323780.jpg";
import { FadeInTop } from "@/components/animations/FadeInTop";
import { FadeInLeft } from "@/components/animations/FadeInLeft";
import AboutMiddleSection from "./aboutMiddleSection";
const page = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url("/construction-illustration.jpeg")`, // Use absolute path starting from /public
          backgroundRepeat: "no-repeat",
          backgroundSize: "", // Add this to cover the whole div
        }}
        className=" w-full lg:h-[98vh] md:min-h-[500px] h-[300px] bg-cover relative"
      >
        <div className=" flex justify-start  items-center   h-full ">
          <FadeInRight>
            <div className="bg-yellow-400 bg-opacity-10 backdrop-blur-lg p-8 rounded-md text-white    lg:max-h-[200px]   lg:max-w-[60vw] max-w-[80%]  ">
              <h1
                className={cn(
                  "lg:text-4xl md:text-2xl text-xl font-bold",
                  josefinSansBold.className
                )}
              >
                About Us
              </h1>
              <p className={cn("md:text-3xl   text-sm font-thin")}>
                With over 25 years of experience, Renova Vision brings
                unparalleled expertise to every project.
              </p>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* New top section: additional interior & exterior services (moved below hero) */}
      <section className="w-full bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <FadeInLeft>
              <div className="w-full h-56 lg:h-96 relative rounded-md overflow-hidden shadow-lg">
                <Image
                  src={exterior}
                  alt="Interior and exterior renovation"
                  className="object-cover w-full h-full"
                  priority={true}
                />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div>
                <h2 className={cn("text-2xl lg:text-3xl font-bold mb-3", josefinSansBold.className)}>
                  We do all interior and exterior work!
                </h2>
                <p className={cn("text-sm md:text-base text-gray-700 leading-relaxed", josefinSansRegular.className)}>
                  From full interior remodeling to exterior repairs and finishing,
                  Renova Vision handles a wide range of services to transform
                  your space. Our experienced team manages projects of all
                  sizes — including painting, siding repair, roofing,
                  flooring, and bespoke interior finishes — delivering high
                  quality results on time.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
      {/* middle section */}
      <AboutMiddleSection />
    </div>
  );
};

export default page;
 
