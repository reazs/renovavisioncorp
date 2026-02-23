"use client";
import React, { useEffect, useRef } from "react";
import { motion as m, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  color?: string;
  delay?: number; // Optional delay parameter
  fadeIn?: "blur" | "top" | "bottom" | "left" | "right"; // New fadeIn param
}

export const DirectionalFadeIn = ({
  children,
  width = "fit-content",
  delay = 0, // Default to no delay
  fadeIn = "top", // Default direction is 'top'
}: Props) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });

  useEffect(() => {
    if (isView) {
      mainControls.start("show");
      slideControls.start("show");
    }
  }, [isView, mainControls, slideControls]);

  // Define the transformation based on fadeIn direction
  const getInitialTransform = () => {
    switch (fadeIn) {
      case "top":
        return { opacity: 0, y: -200 };
      case "bottom":
        return { opacity: 0, y: 200 };
      case "left":
        return { opacity: 0, x: -200 };
      case "right":
        return { opacity: 0, x: 200 };
      default:
        return { opacity: 0, y: 200 }; // Default to bottom if not provided
    }
  };

  return (
    <>
      <div ref={ref} style={{ position: "relative", width }}>
        <m.div
          variants={{
            hidden: getInitialTransform(),
            show: { opacity: 1, x: 0, y: 0 },
          }}
          animate={mainControls}
          initial="hidden"
          transition={{ duration: 1.2, ease: "easeInOut", delay }} // Applying delay here
        >
          {children}
        </m.div>
        <m.div
          variants={{ hidden: { left: 0 }, show: { left: "100%" } }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.4, ease: "easeIn", delay }} // Applying delay here
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            zIndex: 20,
          }}
        ></m.div>
      </div>
    </>
  );
};
