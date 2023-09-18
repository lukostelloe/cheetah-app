import React from "react";
import { Page } from "components/Page";
import Image from "next/image";
import CheetahImage from "../../public/images/cheetah.png";
import { styled } from "@stitches/react";
import Input from "components/Input";
import Button from "components/Button";

const LoginPageStyles = {
  display: "flex",
  flexDirection: "column",
};

const LoginDiv = styled("div", {
  border: "1px solid #3778C4",
  borderRadius: "5px",
  padding: "20px",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "25%",
});

function Login() {
  return (
    <Page>
      <Image src={CheetahImage} width={150} alt="cheetah" />
      <h1 style={{ margin: "20px" }}>Sign in to Cheetah</h1>
      <LoginDiv>
        <Input title="Username or email address" />
        <Input title="Password" />
        <Button label="Sign In" />
      </LoginDiv>
    </Page>
  );
}

export default Login;
