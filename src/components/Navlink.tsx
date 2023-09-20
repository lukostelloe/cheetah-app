import React, { ReactNode } from "react";
import { styled } from "@stitches/react";
import Image from "next/image";
import Link from "next/link";

const CustomButton = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "left",
  backgroundColor: "white",
  color: "black", // Change the text color to something visible on white
  margin: "5px",
  padding: "10px 40px",
  borderRadius: "8px",
  cursor: "pointer",
  border: "none",
  textTransform: "uppercase",
  width: "80%",
  "&:hover": {
    backgroundColor: "rgb(31,75,150)",
    color: "white", // Change the text color on hover
  },
});

function Navlink({
  label,
  onClick,
  imageSrc,
  href,
}: {
  label: string | number | ReactNode;
  onClick?: () => void;
  imageSrc: any;
  href: string;
}) {
  return (
    <Link href={href}>
      <CustomButton onClick={onClick}>
        <Image
          src={imageSrc}
          alt="navlinkImage"
          width={20}
          style={{ marginRight: "10px" }}
        />
        <>{label}</>
      </CustomButton>
    </Link>
  );
}

export default Navlink;
