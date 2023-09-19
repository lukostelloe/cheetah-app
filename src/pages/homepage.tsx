import { useState } from "react";
import { styled } from "@stitches/react";

const patientAbdiel: string = "Abdiel";
const patientLuke: string = "Luke";

const LoginDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid grey",
  margin: "50px",
  padding: "10px",
});

const PatientDetails = ({
  patientid,
  patientNat,
}: {
  patientid: number;
  patientNat: string;
}) => {
  return (
    <>
      <>Patient id: {patientid}</> <button>Click</button> <br></br>
      <>Patient nationality: {patientNat}</>
    </>
  );
};

const PatientList = () => {
  return (
    <ul>
      <li>
        <button>john</button>
      </li>
      <li>
        <button>steve</button>
      </li>
      <li>
        <button>mary</button>
      </li>
    </ul>
  );
};

export const HomePage = () => {
  const [activePatient, setActivePatient] = useState(patientAbdiel);
  const patientChange = () =>
    activePatient === patientAbdiel
      ? setActivePatient(patientLuke)
      : setActivePatient(patientAbdiel);
  const currentPatientNumber = activePatient === patientAbdiel ? 1 : 2;

  return (
    <LoginDiv>
      <h2>Welcome to Cheetah!</h2>
      <h3>Current Patient:</h3>
      <h3>{activePatient}</h3>
      <PatientDetails patientid={currentPatientNumber} patientNat="france" />
      <button onClick={patientChange}>Change patient</button>
      <PatientList />
    </LoginDiv>
  );
};

export default HomePage;
