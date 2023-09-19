import { styled } from "@stitches/react";

import Button from "./Button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import AvatarDemo from "./Avatar";

import CheetahImage from "../../public/images/cheetah.png";
import SettingsIcon from "../../public/images/settingsIcon.png";
import SwitchDemo from "./Switch";

const NavBarWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "space-evenly",
  justifyContent: "space-evenly",
  height: "100vh",
  backgroundColor: "grey",
  maxWidth: "250px",
});

const LogoContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
});

const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

function NavBar() {
  return (
    <NavBarWrapper>
      <LogoContainer>
        <Image src={CheetahImage} alt="cheetah" width={50} />
        <>Cheetah</>
        <SwitchDemo />
      </LogoContainer>

      <Link href="/login">
        <Button label="Login" />
      </Link>
      <Link href="/">
        <Button label="Home" />
      </Link>
      <Link href="/patientdirectory">
        <Button label="Patient Directory" />
      </Link>
      <Link href="/photosdirectory">
        <Button label="Photos" />
      </Link>
      <Link href="/settings">
        <Button label="Settings" />
      </Link>
      <Link href="/contacts">
        <Button label="Contacts" />
      </Link>
      <Link href="/faq">
        <Button label="Faq" />
      </Link>
      <AvatarContainer>
        <AvatarDemo />
        <div>
          <p>Luke Example</p>
          <p>example@gmail.com</p>
        </div>
        <Image src={SettingsIcon} alt="settings" width={25} />
      </AvatarContainer>
    </NavBarWrapper>
  );
}

export default NavBar;
