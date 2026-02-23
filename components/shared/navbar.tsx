import React from "react";
import RenovaVisionLogo from "./renovaVisionLogo";
import DropDownMenu from "./DropDownMenu";
import MenuItems from "./menuItems";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full border-b  sticky bg-base-100 top-0 bg-opacity-80 z-10 ">
      <div className="navbar  max-w-screen-xl mx-auto  ">
        <div className="navbar-start">
          <DropDownMenu />
          <div className="lg:flex hidden">
            <RenovaVisionLogo />
          </div>
        </div>
        <div className="navbar-center ">
          <ul className=" lg:flex  space-x-10  hidden">
            <MenuItems />
          </ul>
          <div className=" lg:hidden display">
            <RenovaVisionLogo />
          </div>
        </div>
        <div className="navbar-end ">
          <div className="md:inline hidden">
            <SignedOut>
              <a href={"/sign-in"}>
                <button className=" mr-1 btn bg-primary-content text-white hover:text-black">
                  Log In
                </button>
              </a>
              <a href={"/sign-up"}>
                <button className="btn btn-outline">Create Account</button>
              </a>
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <LogOut className=" hover:cursor-pointer" />
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
