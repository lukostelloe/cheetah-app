import React from "react";
import PatientComponent from "../components/PatientComponent";
import { useState, useEffect } from "react";
import PatientInputModal from "@/components/PatientInputModal";
import Button from "@/components/Button";
import PatientTable from "@/components/PatientTable";
import { SectionHeader } from "@/components/SectionHeader";
import { Page } from "@/components/Page";
import CollapsibleTable from "@/components/MuiTable";

function Patients() {
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
    <Page>
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
            <PatientComponent
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
      {/* <PatientTable data={data} /> */}
      <CollapsibleTable data={data} />
    </Page>
  );
}

export default Patients;
