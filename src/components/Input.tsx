import React from "react";
import { styled } from "@stitches/react";

type InputProps = {
  placeholder?: string;
  title?: string;
};

const StyledInput = styled("input", {
  border: "1px solid #3778C4",
  borderRadius: "3px",
  width: "200px",
  height: "25px",
  marginBottom: "5px",
});

const Input = ({ placeholder, title }: InputProps) => {
  return (
    <div>
      <p style={{ marginBottom: "5px" }}>{title}</p>
      <StyledInput placeholder={placeholder} />
    </div>
  );
};

export default Input;
