const pgp = require("pg-promise")();
const db = pgp({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

async function addPatient(firstName, lastName, dateOfBirth, country) {
  try {
    await db.none(
      "INSERT INTO patients (firstName, lastName, dateOfBirth, country) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, dateOfBirth, country]
    );
    console.log("Patient inserted successfully");
  } catch (error) {
    console.error("Error inserting patient:", error);
    throw error;
  }
}

export { addPatient, db };
