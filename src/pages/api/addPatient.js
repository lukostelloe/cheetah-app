import { addPatient } from "../../../db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, dateOfBirth, country } = req.body;

    try {
      await addPatient(firstName, lastName, dateOfBirth, country);
      res.status(200).json({ message: "Patient inserted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error inserting patient" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
