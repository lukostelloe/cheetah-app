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

//create patientinformation page
//create seperate file with fake patient data

//file called mockPatients
//inside would be an object with patient name, id, nationality, year of birth

//with that patient object, import it into this file, and use create a function that swaps between patients and displays their information
//patient.name, patient.id, etc.....

//components can be created and then injected into JSX
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

//react component

//function defining the component
//function logic
//return statement, which returns visible information
