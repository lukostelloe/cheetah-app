import React from "react";
import NewPatientComponent from "../../components/NewPatientComponent";
import { useState } from "react";
import PatientInputModal from "components/PatientInputModal";
import { mockPatients } from "mockData/mockPatients";
import Button from "components/Button";
import PatientTable from "components/PatientTable";
import { SectionHeader } from "components/SectionHeader";

function Newdirectory() {
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  return (
    <>
      <h2>Patient Directory Refactored</h2>
      <Button
        onClick={() => setPatientModalOpen(!patientModalOpen)}
        label="Add Patient"
      />
      {patientModalOpen && <PatientInputModal />}
      <SectionHeader>Recent Patients:</SectionHeader>
      <ul>
        {mockPatients.map((patient) => (
          <li key={patient.name}>
            <NewPatientComponent
              name={patient.name}
              age={patient.dob}
              nationality={patient.country}
            />
          </li>
        ))}
      </ul>
      <SectionHeader>Patients Table:</SectionHeader>
      <PatientTable />
    </>
  );
}

export default Newdirectory;
