import React from "react";
import Button from "./Button";
import { styled } from "@stitches/react";

const FormWrapper = styled("div", {
  backgroundColor: "Aquamarine",
  width: "50%",
});

const StyledForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
});

function PatientInputModal() {
  return (
    <FormWrapper>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name:</label>
        <input placeholder="Name" name="name" />

        <label htmlFor="dob">DOB:</label>
        <input placeholder="Age" />

        <label htmlFor="name">Nationality:</label>
        <input placeholder="Nationality" />

        <Button label="Add" />
      </StyledForm>
    </FormWrapper>
  );
}

export default PatientInputModal;
