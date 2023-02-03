import React from "react";
import NewPatientComponent from "../../components/NewPatientComponent";
import { useState } from "react";
import PatientInputModal from "components/PatientInputModal";
import { mockPatients } from "mockData/mockPatients";
import Button from "components/Button";

function Newdirectory() {
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  return (
    <>
      <h2>Patient Directory Refactored</h2>
      <ul>
        {mockPatients.map((patient) => (
          <li key={patient.name}>
            <NewPatientComponent
              name={patient.name}
              age={patient.age}
              nationality={patient.country}
            />
          </li>
        ))}
      </ul>
      <Button
        onClick={() => setPatientModalOpen(!patientModalOpen)}
        label="Add Patient"
      />

      {patientModalOpen && <PatientInputModal />}
    </>
  );
}

export default Newdirectory;
