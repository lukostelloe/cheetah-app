import React from "react";
import { styled } from "@stitches/react";

const StyledTable = styled("table", {
  width: "100%",
  padding: "20px",
  border: "1px solid black",
});

const StyledTh = styled("th", {
  border: "1px solid black",
});

const StyledTd = styled("td", {
  border: "1px solid black",
});

const PatientTable = ({ data }: any) => {
  const determinePriority = (priority: number | string) => {
    if (typeof priority === "number") {
      if (priority < 50) {
        return "green";
      } else if (priority >= 50 && priority < 75) {
        return "orange";
      } else if (priority >= 75) {
        return "red";
      }
    } else {
      return "white";
    }
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Firstname</StyledTh>
          <StyledTh>Lastname</StyledTh>
          <StyledTh>DOB</StyledTh>
          <StyledTh>Country</StyledTh>
          <StyledTh>Priority</StyledTh>
          <StyledTh>Photos</StyledTh>
        </tr>
      </thead>
      <tbody>
        {data.map((patient: any) => (
          <tr key={patient.id}>
            <StyledTd>{patient.firstName}</StyledTd>
            <StyledTd>{patient.lastName}</StyledTd>
            <StyledTd>{patient.dateOfBirth}</StyledTd>
            <StyledTd>{patient.country}</StyledTd>
            <StyledTd
              css={{ backgroundColor: determinePriority(patient.priority) }}
            >
              {patient.priority}
            </StyledTd>
            <StyledTd>{patient.photos}</StyledTd>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default PatientTable;
