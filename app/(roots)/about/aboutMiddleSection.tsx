import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Import custom components, animations, constants, and images
import { josefinSansBold } from "@/components/shared/constant";
import { cn } from "@/lib/utils";
import { FadeInTop } from "@/components/animations/FadeInTop";
import { FadeInLeft } from "@/components/animations/FadeInLeft";
import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { Reveal } from "@/components/animations/Reveal";
import { FadeInRight } from "@/components/animations/FadeInRight";
import { Button } from "@/components/ui/button";
import MediumHeading from "@/components/shared/mediumHeading";

import workingRoof from "@/assets/images/long-shot-men-working-roof_23-2149343678.jpg";
import exterior from "@/assets/images/workers-who-inspect-repair-damaged-exterior-siding-emphasizing-exterior-aspect-apartment-home-renovation_148840-64899.jpg";
import plastering from "@/assets/images/safety-tools-painting-work_23-2148908402.jpg";
import carpentery from "@/assets/images/carpenter-working-his-desk.jpg";

// AboutMiddleSection Component
const AboutMiddleSection = () => {
  return (
    <section className="mt-10">
      <div className="p-5">
        {/* Roofing & Framing Section */}
        <div className="flex flex-col items-center pr-5 mb-12 max-w-screen-md mx-auto text-center">
          <Reveal>
            <MediumHeading>Roofing & Framing</MediumHeading>
          </Reveal>
          <p className="mt-5">
            From roofing to framing upgrades, we protect your home while
            enhancing its appearance. Our roofing and framing services ensure
            long-lasting durability and beauty.{" "}
            {/* <Button className="px-0" variant="link">
              <Link href="/roofing-framing">
                Read More <ChevronRight className="inline-block" />
              </Link>
            </Button> */}
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <FadeInTop>
              <Image
                alt="Exterior of building"
                src={exterior}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-md max-h-[500px]"
              />
            </FadeInTop>
            <FadeInTop>
              <Image
                alt="Workers on the roof"
                src={workingRoof}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-md max-h-[500px]"
              />
            </FadeInTop>
          </div>
        </div>

        {/* Interior & Carpentry Section */}
        <div className="mt-24 grid md:grid-cols-2 max-w-screen-xl mx-auto">
          {/* Mobile Heading */}
          <div className="md:hidden text-center mb-10">
            <Reveal>
              <MediumHeading>Roofing & Exterior</MediumHeading>
            </Reveal>
            <p>
              Our interior and carpentry services combine style and
              functionality to transform your space. We craft customized
              solutions that reflect your vision and needs.{" "}
              {/* <Button className="px-0" variant="link">
                <Link href="/roofing-framing">
                  Read More <ChevronRight className="inline-block" />
                </Link>
              </Button> */}
            </p>
          </div>

          {/* Image for Carpentry Section */}
          <div className="flex md:justify-start justify-center">
            <FadeInTop>
              <Image
                alt="Carpenter at work"
                src={carpentery}
                width={400}
                height={400}
                className="h-full object-cover rounded-md max-h-[500px]"
              />
            </FadeInTop>
          </div>

          {/* Desktop Heading */}
          <div className="hidden md:flex items-center">
            <div>
              <Reveal>
                <MediumHeading>Carpentry & Window Installation</MediumHeading>
              </Reveal>
              <p>
                Our window installation and carpentry services combine style and
                functionality to transform your space. We craft customized
                solutions that reflect your vision and needs.{" "}
                {/* <Button className="px-0" variant="link">
                  <Link href="/roofing-framing">
                    Read More <ChevronRight className="inline-block" />
                  </Link>
                </Button> */}
              </p>
            </div>
          </div>
        </div>

        {/* Plaster & Painting Section */}
        <div className="w-full mt-24 grid md:grid-cols-2">
          {/* Text Container */}
          <div className="bg-[#001f3f] py-12 md:py-0 text-white flex justify-center items-center">
            <div className="px-10 md:text-start text-center">
              <FadeInRight>
                <MediumHeading className="text-yellow-400">
                  Plaster & Painting
                </MediumHeading>
              </FadeInRight>
              <FadeInTop>
                <p className="mt-5">
                  With precision painting and finishing touches, we give your
                  space the perfect final look. Our work adds vibrant life and
                  lasting quality to your project.{" "}
                  <Button className="px-0 text-white" variant="link">
                    <Link href="/roofing-framing">
                      Read More <ChevronRight className="inline-block" />
                    </Link>
                  </Button>
                </p>
              </FadeInTop>
            </div>
          </div>

          {/* Image for Plaster & Painting Section */}
          <div className="flex items-center md:justify-end justify-center">
            <Image
              alt="Plastering work"
              src={plastering}
              width={1000}
              height={400}
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMiddleSection;
