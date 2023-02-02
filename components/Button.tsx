import React from "react";
import { styled } from "@stitches/react";

const CustomButton = styled("button", {
  backgroundColor: "Tomato",
  margin: "5px",
  padding: "5px",
  borderRadius: "5px",
  cursor: "pointer",
});

function Button({ label }: { label: string | number }) {
  return <CustomButton>{label}</CustomButton>;
}

export default Button;
