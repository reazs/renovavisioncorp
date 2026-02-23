import Image from "next/image";
import React from "react";
import contactIllusImg from "@/assets/images/undraw_contact_us_re_4qqt.svg";
import MediumHeading from "@/components/shared/mediumHeading";
import LargeHeading from "@/components/shared/largeHeading";
import { Send } from "lucide-react";
import { FadeInTop } from "@/components/animations/FadeInTop";
import { DirectionalFadeIn } from "@/components/animations/directionalFadeIn";
import ContactForm from "@/components/forms/contactForm";
const page = () => {
  return (
    <div className="h-full">
      <div className="  flex justify-center items-center my-[120px]">
        <div>
          <div className="grid sm:grid-cols-2 ">
            {/* left container */}
            <Image
              src={contactIllusImg}
              alt="contact-illusration-img"
              width={800}
              height={800}
              className="sm:mb-0 mb-10 "
            />

            {/* right container */}
            <div className="flex items-start justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
