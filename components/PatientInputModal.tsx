import React from "react";

//cosnt AddPatient = () =>{
//adds the patient to the mockPatient array }

function PatientInputModal() {
  return (
    <div>
      <form>
        <input placeholder="name"></input>
        <input placeholder="age"></input>
        <input placeholder="nationality"></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default PatientInputModal;
