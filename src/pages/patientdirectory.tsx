import React from "react";
import NewPatientComponent from "../components/NewPatientComponent";
import { useState, useEffect } from "react";
import PatientInputModal from "@/components/PatientInputModal";
import { mockPatients } from "mockData/mockPatients";
import Button from "@/components/Button";
import PatientTable from "@/components/PatientTable";
import { SectionHeader } from "@/components/SectionHeader";

function Patientdirectory() {
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("/api/getData")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

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
        {data.map((patient: any) => (
          <li key={patient.id} style={{ listStyleType: "none" }}>
            <NewPatientComponent
              firstName={patient.firstName}
              lastName={patient.lastName}
              dateOfBirth={patient.dateOfBirth}
              nationality={patient.country}
              priority={patient.priority}
            />
          </li>
        ))}
      </ul>
      <SectionHeader>Patients Table:</SectionHeader>
      <PatientTable data={data} />
    </>
  );
}

export default Patientdirectory;
