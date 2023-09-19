import { styled } from "@stitches/react";
import React from "react";

const PatientWrapper = styled("div", {
  width: "50%",
  margin: "10px",
  padding: "2px",
  border: "1px solid #3778C4",
  borderRadius: "5px",
});

const StyledListItem = styled("li", {
  margin: "3px",
});

function PatientComponent({
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
        {<StyledListItem>Name: {firstName ? firstName : "N/A"}</StyledListItem>}
        {
          <StyledListItem>
            Surname: {lastName ? lastName : "N/A"}
          </StyledListItem>
        }
        {
          <StyledListItem>
            DOB: {dateOfBirth ? dateOfBirth : "N/A"}
          </StyledListItem>
        }
        {
          <StyledListItem>
            Country: {nationality ? nationality : "N/A"}
          </StyledListItem>
        }
        {
          <StyledListItem>
            Priority: {priority ? priority : "N/A"}
          </StyledListItem>
        }
      </ul>
    </PatientWrapper>
  );
}

export default PatientComponent;
