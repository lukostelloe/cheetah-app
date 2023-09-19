import { styled } from "@stitches/react";
import React from "react";

const PatientWrapper = styled("div", {
  width: "25%",
  backgroundColor: "grey",
  margin: "5px",
  padding: "2px",
  borderRadius: "2px",
});

function NewPatientComponent({
  name,
  age,
  nationality,
}: {
  name: string;
  age?: number;
  nationality?: string;
}) {
  return (
    <PatientWrapper>
      <ul>
        <li>Name: {name}</li>
        {age && <li>Age: {age}</li>}
        {nationality && <li>Nationality:{nationality}</li>}
      </ul>
    </PatientWrapper>
  );
}

export default NewPatientComponent;
