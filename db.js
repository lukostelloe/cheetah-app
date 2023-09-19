const pgp = require("pg-promise")();
const db = pgp({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function addPatient(firstName, lastName, dateOfBirth, country) {
  try {
    await db.none(
      "INSERT INTO patients (first_name, last_name, date_of_birth, country) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, dateOfBirth, country]
    );
    console.log("Patient inserted successfully");
  } catch (error) {
    console.error("Error inserting patient:", error);
    throw error;
  }
}

export { addPatient };
