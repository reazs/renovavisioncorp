"use client";
import React, { useEffect, useRef } from "react";
import { motion as m, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  color?: string;
}

export const FadeInLeft = ({ children, width = "fit-content" }: Props) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });

  useEffect(() => {
    if (isView) {
      mainControls.start("show");
      slideControls.start("show");
    }
  });
  return (
    <>
      <div ref={ref} style={{ position: "relative", width }}>
        <m.div
          variants={{
            hidden: { opacity: 0, x: 200 },
            show: { opacity: 1, x: 0 },
          }}
          animate={mainControls}
          initial="hidden"
          transition={{ duration: 0.85, ease: "easeInOut" }}
        >
          {children}
        </m.div>
        <m.div
          variants={{ hidden: { left: 0 }, show: { left: "100%" } }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.4, ease: "easeIn" }}
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
