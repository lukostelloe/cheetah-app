import { addPatient } from "../../../db";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, dateOfBirth, country } = req.body;

      if (!firstName || !lastName || !dateOfBirth || !country) {
        // Handle validation errors
        return res.status(400).json({ message: "All fields are required" });
      }

      // Insert the patient data into the database using the function from db.js
      await addPatient(firstName, lastName, dateOfBirth, country);

      res.status(200).json({ message: "Patient added successfully" });
    } catch (error) {
      console.error("Error adding patient:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
