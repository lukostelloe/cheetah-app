import { styled } from "@stitches/react";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import AvatarDemo from "./Avatar";
import SwitchDemo from "./Switch";
import Navlink from "./Navlink";

import CheetahImage from "../../public/images/cheetah.png";
import settingsIcon from "../../public/images/settingsIcon.png";
import contactsIcon from "../../public/images/contactsIcon.png";
import faqIcon from "../../public/images/faqIcon.png";
import photosIcon from "../../public/images/photosIcon.png";
import patient_directoryIcon from "../../public/images/patient_directoryIcon.png";
import logoutIcon from "../../public/images/logoutIcon.png";
import loginIcon from "../../public/images/loginIcon.png";
import homeIcon from "../../public/images/homeIcon.png";

const NavBarWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100vh",
  maxWidth: "250px",
  borderRight: "1px solid #3778C480",
});

const LogoContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const HorizontalLine = styled("div", {
  width: "75%",
  height: "1px",
  backgroundColor: "#3778C480",
});
function NavBar() {
  return (
    <NavBarWrapper>
      <LogoContainer>
        <Image
          src={CheetahImage}
          alt="cheetah"
          width={50}
          style={{ marginRight: "30px" }}
        />
        <>Cheetah</>
      </LogoContainer>
      <Navlink label="Home" href="/" imageSrc={homeIcon} />
      <Navlink
        label="Patients"
        href="/patientdirectory"
        imageSrc={patient_directoryIcon}
      />
      <Navlink label="Photos" href="/photosdirectory" imageSrc={photosIcon} />
      <Navlink label="Settings" href="/settings" imageSrc={settingsIcon} />
      <Navlink label="Contacts" href="/contacts" imageSrc={contactsIcon} />
      <Navlink label="Faq" href="/faq" imageSrc={settingsIcon} />
      <HorizontalLine />
      <Navlink label="Logout" href="/login" imageSrc={settingsIcon} />
      <Flex>
        <AvatarDemo />
        <div>
          <p>Luke Example</p>
          <p>example@gmail.com</p>
        </div>
        <Image src={settingsIcon} alt="settings" width={25} />
      </Flex>
      <Flex>
        <p>Light Mode:</p>
        <SwitchDemo />
      </Flex>
    </NavBarWrapper>
  );
}

export default NavBar;
