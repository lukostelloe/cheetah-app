import React from "react";
import { mockPatients } from "mockData/mockPatients";
import { styled } from "@stitches/react";

const Table = styled("table", {
  width: "100%",
  padding: "20px",
  border: "1px solid black",
});

const TH = styled("th", {
  border: "1px solid black",
});

const TD = styled("td", {
  border: "1px solid black",
});

function PatientTable() {
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
    <Table>
      <thead>
        <tr>
          <TH>Firstname</TH>
          <TH>Age</TH>
          <TH>Country</TH>
          <TH>Priority</TH>
          <TH>Photos</TH>
        </tr>
      </thead>
      <tbody>
        {mockPatients.map((patient) => (
          <tr key={patient.name}>
            <TD>{patient.name}</TD>
            <TD>{patient.dob}</TD>
            <TD>{patient.country}</TD>
            <TD css={{ backgroundColor: determinePriority(patient.priority) }}>
              {patient.priority}
            </TD>
            <TD>{patient.photos}</TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PatientTable;
