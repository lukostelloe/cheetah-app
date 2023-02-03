import React from "react";
import { styled } from "@stitches/react";

const CustomButton = styled("button", {
  backgroundColor: "rgb(55,120,196)",
  color: "white",
  margin: "5px",
  padding: "10px 40px",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgb(31,75,150)",
  },
  boxShadow: "none",
  border: "none",
  textTransform: "uppercase",
});

function Button({
  label,
  onClick,
}: {
  label: string | number;
  onClick?: () => void;
}) {
  return <CustomButton onClick={onClick}>{label}</CustomButton>;
}

export default Button;
