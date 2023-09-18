import { useEffect, useState } from "react";

function Apitest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API route
    fetch("/api/getData")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update the state with the fetched data
        console.log(data); // Log the data to the console
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Data from PostgreSQL Database</h1>
      <ul>
        {data.map((item) => (
          <>
            <li key={item.id}>{item.firstName}</li>
            <li key={item.id}>{item.lastName}</li>
            <li key={item.id}>{item.dateOfBirth}</li>
            <li key={item.id}>{item.country}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Apitest;
