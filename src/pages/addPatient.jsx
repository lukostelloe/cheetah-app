import { useState } from "react";

export default function AddPatientForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(0);
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addPatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, dateOfBirth, country }),
      });

      if (response.ok) {
        console.log("Patient data submitted successfully");
        // Clear form fields if needed
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
        setCountry("");
      } else {
        console.error("Error submitting patient data");
      }
    } catch (error) {
      console.error("Error submitting patient data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        type="number"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        placeholder="Date of Birth"
        required
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Add Patient
      </button>
    </form>
  );
}
