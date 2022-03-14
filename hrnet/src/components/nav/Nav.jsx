import React, { useState } from "react";
import MainNavBar from "components/mainNavBar/MainNavBar";
import SideNavBar from "components/sideNavBar/SideNavBar";

const Nav = () => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const toggle = () => {
    return setDisplaySideMenu(!displaySideMenu);
  };

  window.addEventListener("wheel", (e) => {
    if (displaySideMenu) {
      setDisplaySideMenu(false);
    }
  });

  return (
    <>
      <MainNavBar toggle={toggle} />
      <SideNavBar showSideBar={displaySideMenu} toggle={toggle} />
    </>
  );
};

export default Nav;
