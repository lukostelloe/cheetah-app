import React, { useState } from "react";
import Button from "./Button";
import { styled } from "@stitches/react";

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
  const [patientList, setPatientList] = useState([]);
  const [newPatient, setNewPatient] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
  });

  const addNewPatient = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/addPatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPatient),
      });

      if (response.ok) {
        alert("Patient added successfully");
        setNewPatient({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          country: "",
        });
        setPatientModalOpen(false);
      } else {
        alert("Error adding patient");
      }
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Error adding patient");
    }
  };

  console.log(newPatient);

  return (
    <>
      {patientModalOpen && (
        <Backdrop>
          <FormWrapper>
            <StyledForm onSubmit={addNewPatient}>
              <label htmlFor="firstName">First Name:</label>
              <input
                value={newPatient.firstName}
                name="firstName"
                placeholder="First Name"
                onChange={(e) =>
                  setNewPatient({ ...newPatient, firstName: e.target.value })
                }
              />
              <label htmlFor="lastName">Surname:</label>
              <input
                value={newPatient.lastName}
                name="lastName"
                placeholder="Surname"
                onChange={(e) =>
                  setNewPatient({ ...newPatient, lastName: e.target.value })
                }
              />

              <label htmlFor="dateOfBirth">Date Of Birth:</label>
              <input
                value={newPatient.dateOfBirth}
                name="dateOfBirth"
                placeholder="Date Of Birth"
                onChange={(e) =>
                  setNewPatient({ ...newPatient, dateOfBirth: e.target.value })
                }
              />
              <label htmlFor="country">Country of Origin:</label>
              <input
                value={newPatient.country}
                name="country"
                placeholder="Country of Origin"
                onChange={(e) =>
                  setNewPatient({ ...newPatient, country: e.target.value })
                }
              />

              <Button label="Add" type="submit" />
            </StyledForm>
          </FormWrapper>
        </Backdrop>
      )}
    </>
  );
}

export default PatientInputModal;
