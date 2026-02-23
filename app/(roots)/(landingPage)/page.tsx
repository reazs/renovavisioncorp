
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import { cn } from "@/lib/utils";
import { josefinSansBold } from "@/components/shared/constant";
import { FadeInRight } from "@/components/animations/FadeInRight";
import { FadeInTop } from "@/components/animations/FadeInTop";
import Link from "next/link";
import Image from "next/image";
import reviewImage from "@/assets/images/undraw_reviews_lp8w.svg";
import { FadeInLeft } from "@/components/animations/FadeInLeft";
import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TopReviewSection from "./TopReviewSection";
// TODO add link for more details and pages


export default function Home() {
   
  return (
    <>
      <div className="max-w-screen-2xl mx-auto sm:mb-0 p-5 mb-[400px] ">
        <TopSection />
        <MiddleSection />
      </div>
      <div className="bg-[#EEEBFA] py-5 sm:py-[100px]">
        <div className="grid md:grid-cols-2 max-w-screen-2xl mx-auto p-5 gap-y-10 sm:gap-y-0">
          {/* left container */}
          <div className="text--400">
            <FadeInRight>
              <h1
                className={cn(
                  "lg:text-4xl md:text-3xl text-2xl font-bold  ",
                  josefinSansBold.className
                )}
              >
                We Value Your Feedback!
              </h1>
            </FadeInRight>
            <FadeInTop>
              <p className="mt-5">
                Like what we do? We'd love to hear from you! Your feedback is
                invaluable in helping us improve and deliver even better
                services at RenovaVision. Let us know how we’re doing!{" "}
              </p>
            </FadeInTop>
            <FadeInTop>
              <Link href={"/sign-up"}>
                <button className="btn btn-outline text-2xl mt-5 ">
                  Join Us!
                </button>
              </Link>
            </FadeInTop>
          </div>
          {/* right container */}
          <div className="flex items-center md:justify-end justify-center h-full">
            <FadeInLeft>
              <Image
                alt="review-illustration"
                width={400}
                height={400}
                src={reviewImage}
                className="object-cover"
              />
            </FadeInLeft>
          </div>
        </div>
      </div>
    <TopReviewSection/>
    </>
  );
}
