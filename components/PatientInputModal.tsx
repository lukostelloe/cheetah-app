import React, { useState } from "react";
import Button from "./Button";
import { styled } from "@stitches/react";

// Styles
const FormWrapper = styled("div", {
  backgroundColor: "Aquamarine",
  width: "50%",
});

const StyledForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
});

// Custom types
type Patient = {
  name: string;
  dob: number;
  country: string;
  priority: number | string;
  photos: string | any;
};

// mockPatient list in the same file to be able to add entries
export const mockPatients: Patient[] = [
  {
    name: "John",
    dob: 32,
    country: "Ireland",
    priority: 95,
    photos: "click to view",
  },
  {
    name: "Mary",
    dob: 31,
    country: "France",
    priority: 70,
    photos: "click to view",
  },
  {
    name: "Stephen",
    dob: 22,
    country: "Mexico",
    priority: 35,
    photos: "click to view",
  },
];

function PatientInputModal() {
  const [patient, setPatient] = useState({
    name: "",
    dob: "",
    country: "",
    priority: "-",
    photos: "no photos",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      name: e.target.name.value,
      dob: e.target.dob.value,
      country: e.target.nationality.value,
      priority: "-",
      photos: "no photos",
    };

    setPatient(newPatient);

    mockPatients.push(newPatient);

    // verify that local list was updated
    console.log(mockPatients);

    e.target.reset();
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" placeholder="Name" />

        <label htmlFor="dob">DOB:</label>
        <input name="dob" placeholder="Age" />

        <label htmlFor="Nationality">Nationality:</label>
        <input name="nationality" placeholder="Nationality" />

        <Button label="Add" />
      </StyledForm>
    </FormWrapper>
  );
}

export default PatientInputModal;
