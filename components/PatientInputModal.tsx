import React, { useState } from "react";
import Button from "./Button";
import { styled } from "@stitches/react";
import { mockPatients } from "mockData/mockPatients";

// Styles
const FormWrapper = styled("div", {
  backgroundColor: "Aquamarine",
  width: "50%",
  position: "fixed",
  top: "15%",
  left: "50%",
  transform: "translate(-50%,50%)",
  zIndex: 99,
});

const Backdrop = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 98,
});

const StyledForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
});

function PatientInputModal() {
  const [patientModalOpen, setPatientModalOpen] = useState(true);
  const [patientList, setPatientList] = useState(mockPatients);

  const [newPatient, setNewPatient] = useState({
    name: "",
    dob: 0,
    country: "",
  });

  // @ts-expect-error
  const addNewPatient = (e) => {
    e.preventDefault();
    setPatientList((mockPatients) => [newPatient, ...mockPatients]);
    setPatientModalOpen(false);
  };

  return (
    <>
      {patientModalOpen && (
        <Backdrop>
          <FormWrapper>
            <StyledForm onSubmit={addNewPatient}>
              <label htmlFor="name">Name:</label>
              <input
                value={newPatient.name}
                name="name"
                placeholder="Name"
                onChange={(e) =>
                  setNewPatient({ ...newPatient, name: e.target.value })
                }
              />

              <label htmlFor="dob">DOB:</label>
              <input
                name="dob"
                placeholder="Age"
                onChange={(e) =>
                  // @ts-expect-error
                  setNewPatient({ ...newPatient, dob: e.target.value })
                }
              />
              <label htmlFor="Nationality">Nationality:</label>
              <input
                name="nationality"
                placeholder="Nationality"
                onChange={(e) =>
                  setNewPatient({ ...newPatient, country: e.target.value })
                }
              />

              <Button label="Add" />
            </StyledForm>
          </FormWrapper>
        </Backdrop>
      )}
    </>
  );
}

export default PatientInputModal;
