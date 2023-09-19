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
  firstName,
  lastName,
  dateOfBirth,
  nationality,
  priority,
}: {
  firstName: string;
  lastName: string;
  dateOfBirth?: number;
  nationality?: string;
  priority?: number;
}) {
  return (
    <PatientWrapper>
      <ul style={{ listStyleType: "none" }}>
        {firstName && <li>Name: {firstName}</li>}
        {lastName && <li>Surname: {lastName}</li>}
        {dateOfBirth && <li>DOB: {dateOfBirth}</li>}
        {nationality && <li>Nationality:{nationality}</li>}
        {priority && <li>Priority:{priority}</li>}
      </ul>
    </PatientWrapper>
  );
}

export default NewPatientComponent;
