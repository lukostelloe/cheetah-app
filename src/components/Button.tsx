import React, { ReactNode } from "react";
import { styled } from "@stitches/react";

const CustomButton = styled("button", {
  backgroundColor: "#3778C4",
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
  label: string | number | ReactNode;
  onClick?: () => void;
}) {
  return <CustomButton onClick={onClick}>{label}</CustomButton>;
}

export default Button;
