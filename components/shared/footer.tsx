import React from "react";
import RenovaVisionLogo from "./renovaVisionLogo";
import Image from "next/image";
import instagramIcon from "@/assets/icons/instagram.png";
import linkedInIcon from "@/assets/icons/linkedin.png";
import facebookIcon from "@/assets/icons/facebook.png";
import yelpIcon from "@/assets/icons/yelp.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer  p-10 border-t sm:mt-0 ">
      <aside>
        <RenovaVisionLogo />
        <p>
          Renova Vision Contracting Corporation.
          <br />
          Providing reliable services since 1997
        </p>
        <p>Copyright © {year} - All right reserved by RenovaVisionCorp</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Image
              src={linkedInIcon}
              alt="linkedIn-icon"
              width={24}
              height={24}
            />
          </a>
          <a>
            <Image
              src={instagramIcon}
              alt="instagram-icon"
              width={24}
              height={24}
            />
          </a>
          <a>
            <Image
              src={facebookIcon}
              alt="facebook-icon"
              width={24}
              height={24}
            />
          </a>
          <a>
            <Image
              src={yelpIcon}
              alt="facebook-icon"
              width={24}
              height={24}
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
