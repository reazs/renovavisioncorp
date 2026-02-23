import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Import utility functions, animations, constants, and custom components
import { cn } from "@/lib/utils";
import { josefinSansRegular } from "@/components/shared/constant";
import { Reveal } from "@/components/animations/Reveal";
import { FadeInTop } from "@/components/animations/FadeInTop";
import { FadeInRight } from "@/components/animations/FadeInRight";
import { DirectionalFadeIn } from "@/components/animations/directionalFadeIn";
import ConstructionPainting from "@/components/lottie/Painting";

const MiddleSection = () => {
  return (
    <div className="h-screen">
      {/* Main container with grid layout for responsive positioning */}
      <div className="grid md:grid-cols-2 p-5">
        {/* Left container - Heading and introductory text */}
        <div>
          <div className="flex sm:items-start sm:justify-start items-center justify-center">
            <Reveal>
              <h3
                className={cn(
                  "lg:text-4xl text-2xl font-bold text-zinc-500 sm:text-start text-center",
                  josefinSansRegular.className
                )}
              >
                Turning Dreams into Reality
              </h3>
            </Reveal>
          </div>
          <DirectionalFadeIn fadeIn="right" delay={0.4}>
            <p className="mt-5 leading-8 max-w-screen-md sm:text-start text-center">
              At Renova Vision, we don’t just build structures—we bring your
              dream projects to life with precision, passion, and a commitment
              to excellence.
            </p>
          </DirectionalFadeIn>
        </div>

        {/* Right container - Milestone counters */}
        <div className="flex justify-around w-full sm:mt-0 mt-16">
          <DirectionalFadeIn delay={0.6} fadeIn="right">
            <div>
              <h1 className="sm:text-6xl text-4xl font-bold text-[#001f3f]">
                25
              </h1>
              <p>
                Years <br /> Experience
              </p>
            </div>
          </DirectionalFadeIn>

          <DirectionalFadeIn fadeIn="right" delay={1.3}>
            <div>
              <h1 className="sm:text-6xl text-4xl font-bold text-[#001f3f]">
                100+
              </h1>
              <p>
                Projects <br /> Completed
              </p>
            </div>
          </DirectionalFadeIn>
        </div>
      </div>

      {/* Image and text illustration section */}
      <div className="grid sm:grid-cols-2">
        {/* Left container - Image illustration */}
        <div className="flex items-center justify-center sm:ml-0 ml-12">
          <FadeInRight>
            <ConstructionPainting />
          </FadeInRight>
        </div>

        {/* Right container - Text information and contact link */}
        <div className="flex items-center">
          <div>
            <Reveal>
              <h1
                className={cn(
                  josefinSansRegular.className,
                  "md:text-4xl text-2xl text-red-400"
                )}
              >
                Get to Know Us More
              </h1>
            </Reveal>

            <FadeInTop>
              <FadeInRight>
                <p className="mt-5">
                  With over 25 years of experience, Renova Vision Corp provides
                   all exterior,and interior services to transform homes and buildings. Our skilled team is
                  committed to delivering quality craftsmanship, ensuring your
                  spaces are both beautiful and built to last.
                </p>
              </FadeInRight>
            </FadeInTop>

            {/* Contact Button */}
            <FadeInTop>
              <div>
                <Link href="/contact">
                  <p className="mt-5 text-2xl btn btn-outline">
                    Contact Us
                    <ArrowRight className="inline-block ml-2" />
                  </p>
                </Link>
              </div>
            </FadeInTop>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
