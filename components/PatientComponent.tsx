import { Patient } from "components/Patient";

const PatientDirectory = () => {
  let directory: Patient[] = [
    new Patient(1, "Juan", 32, "Colombia"),
    new Patient(2, "Esteban", 18, "Italy"),
    new Patient(3, "Maria", 29, "Argentina"),
  ];

  return (
    <>
      <h1>Patients Directory</h1>
      <ul>
        {directory.map((patient) => (
          <li key={patient.id}>
            {patient.name} is {patient.age} years old and is from
            {patient.nationality}.
          </li>
        ))}
      </ul>
    </>
  );
};

export default PatientDirectory;
