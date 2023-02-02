import React from "react";
import NewPatientComponent from "../../components/NewPatientComponent";
import { useState } from "react";
import PatientInputModal from "components/PatientInputModal";
import { mockPatients } from "mockData/mockPatients";

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
      <button
        onClick={() =>
          patientModalOpen
            ? setPatientModalOpen(false)
            : setPatientModalOpen(true)
        }
      >
        Add Patient
      </button>
      {patientModalOpen && <PatientInputModal />}
    </>
  );
}

export default Newdirectory;
