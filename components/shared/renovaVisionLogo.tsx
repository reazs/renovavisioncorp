import React from "react";
import renovaIcon from "@/assets/icons/renova-vision-icon.png";
import { Josefin_Sans } from "@next/font/google";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
const josefin_Sans = Josefin_Sans({ weight: "700", subsets: ["latin"] });

const RenovaVisionLogo = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Link href={"/"}>
        <div className="flex items-center ">
          <Image
            src={renovaIcon}
            alt="logo-img"
            width={50}
            height={50}
            className=" rounded-md   "
          />

          <h1 className={josefin_Sans.className + " text-2xl"}>
            <span className="  tracking-tighter m-0 ml-1">
              Renova
            </span>

            <span className="text-red-600 tracking-tighter m-0">Vision</span>
            <span className="text-red-600 tracking-tighter m-0">Corp</span>
          </h1>
        </div>
      </Link>
    </>
  );
};

export default RenovaVisionLogo;
