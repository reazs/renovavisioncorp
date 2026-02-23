import { cn } from "@/lib/utils";
import React from "react";
import { josefinSansBold } from "./constant";

const MediumHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: "text-white" | String;
}) => {
  return (
    <h1
      className={cn(
        "md:text-4xl text-2xl font-bold ",
        josefinSansBold.className,
        className
      )}
    >
      {children}
    </h1>
  );
};

export default MediumHeading;
