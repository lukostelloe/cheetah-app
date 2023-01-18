import { Patient } from "@/Patient";

export const PatientDirectory = () => {
  let juan = new Patient(2, "Juan", 32, "colombian");
  return (
    <>
      <h1>Patients Directory</h1>
      <ul>
        <li>
          Patient {juan.name} is {juan.age} years old and is {juan.nationality}.
        </li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default PatientDirectory;
