// pages/api/getData.js

import { Client } from "pg";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    // Create a PostgreSQL client instance
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });

    // Connect to the database
    await client.connect();

    // Execute your SQL query to retrieve data from the "patients" table in the "patients" schema
    const result = await client.query("SELECT * FROM patients.patients");

    // Close the database connection
    await client.end();

    // Send the data as JSON response
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};
