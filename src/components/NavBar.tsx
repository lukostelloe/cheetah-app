import { styled } from "@stitches/react";

import Button from "./Button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import CheetahImage from "../../public/images/cheetah.png";

const NavBarWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "space-evenly",
  justifyContent: "space-evenly",
  height: "100vh",
});

const Flex = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

function NavBar() {
  return (
    <NavBarWrapper>
      <Flex>
        <Image src={CheetahImage} alt="cheetah" width={50} />
        <p>Cheetah</p>
      </Flex>

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
      <Link href="/faq">
        <Button label="Faq" />
      </Link>
    </NavBarWrapper>
  );
}

export default NavBar;
