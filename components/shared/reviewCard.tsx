import Image from "next/image";
import React from "react";
import defaultImg from "@/assets/images/default-avatar.jpg";
import { reviewCardT } from "@/types";
import { cn } from "@/lib/utils";
import { josefinSansBold } from "./constant";

const ReviewCard = ({
  title,
  profileImage,
  fullName,
  username,
  description,
  rating,
}: reviewCardT) => {
  return (
    <div className=" max-w-screen-lg  p-5 border rounded-sm shadow-md mb-5">
      {/* userinfo */}
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            alt="profile-img"
            width={50}
            height={40}
            src={profileImage ? profileImage : defaultImg}
            className=" object-cover rounded-md mr-4"
          />
          <div>
            <h3 className="text-sm">{fullName}</h3>
            <p className="text-slate-300 text-sm ">@{username}</p>
          </div>
        </div>
        <p className="sm:text-2xl text-xl text-yellow-400">{rating}</p>
      </div>
      <h3 className={cn("sm:text-2xl text-xl mt-3", josefinSansBold.className)}>
        {title}
      </h3>
      <p className="sm:text-[16px] text-sm">{description}</p>
    </div>
  );
};

export default ReviewCard;
