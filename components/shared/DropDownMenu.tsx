import Image from "next/image";
import React from "react";
import mainMenuIcon from "@/assets/icons/main-menu.png";
import MenuItems from "./menuItems";
const DropDownMenu = () => {
  return (
    <div className=" shadow-none  dropdown dropdown-hover  lg:hidden display ">
      <div tabIndex={0} role="button" className="m-1">
        <Image alt="menu-icon" width={34} height={34} src={mainMenuIcon} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white/90  rounded-box z-[1] w-52 p-2 shadow"
      >
        <MenuItems />
      </ul>
    </div>
  );
};

export default DropDownMenu;
