import React from "react";
import aboutIcon from "@/assets/icons/about.png";
import projectIcon from "@/assets/icons/project.png";
import contactIcon from "@/assets/icons/phone.png";
import starIcon from "@/assets/icons/star.png";
import Image from "next/image";
import Link from "next/link";
import homeIcon from "@/assets/icons/home.png";
import { SignedIn } from "@clerk/nextjs";
const MenuItems = () => {
  return (
    <>
      <SignedIn>
        <li className="">
          <Link
            href="/home"
            className="flex  items-center  cursor-pointer w-full"
          >
            <Image
              className="mr-1"
              alt="about-icon"
              width={34}
              height={34}
              src={homeIcon}
            />
            Home
          </Link>
        </li>
      </SignedIn>
      <li className="">
        <Link
          href="/about"
          className="flex  items-center  cursor-pointer w-full"
        >
          <Image
            className="mr-1"
            alt="about-icon"
            width={34}
            height={34}
            src={aboutIcon}
          />
          About
        </Link>
      </li>
      <li className="">
        <Link href="/projects" className="flex  items-center  cursor-pointer ">
          <Image
            className="mr-1"
            alt="project-icon"
            width={34}
            height={34}
            src={projectIcon}
          />
          Projects
        </Link>
      </li>

      <li>
        <Link href="/contact" className="flex  items-center  cursor-pointer ">
          <Image
            className="mr-1"
            alt="contact-icon"
            width={34}
            height={34}
            src={contactIcon}
          />
          Contact
        </Link>
      </li>
      <li>
        <Link href="/reviews" className="flex  items-center  cursor-pointer ">
          <Image
            className="mr-1"
            alt="contact-icon"
            width={34}
            height={34}
            src={starIcon}
          />
          Reviews
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
