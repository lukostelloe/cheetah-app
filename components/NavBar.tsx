import { styled } from "@stitches/react";

import Button from "./Button";
import Link from "next/link";
import React from "react";

const NavBarWrapper = styled("div", {
  background: "grey",
});

function NavBar() {
  return (
    <NavBarWrapper>
      <Link href="/">
        <Button label="Home" />
      </Link>
      <Link href="/newdirectory">
        <Button label="Patients" />
      </Link>
      <Link href="/photosdirectory">
        <Button label="Photos" />
      </Link>
      <Link href="/settings">
        <Button label="Settings" />
      </Link>
    </NavBarWrapper>
  );
}

export default NavBar;
