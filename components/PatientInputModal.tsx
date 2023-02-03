import React from "react";
import Button from "./Button";

//cosnt AddPatient = () =>{
//adds the patient to the mockPatient array }

function PatientInputModal() {
  return (
    <div>
      <form>
        <input placeholder="name"></input>
        <input placeholder="age"></input>
        <input placeholder="nationality"></input>
        <Button label="Add" />
      </form>
    </div>
  );
}

export default PatientInputModal;
