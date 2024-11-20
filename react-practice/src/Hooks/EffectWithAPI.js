import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

const EffectWithAPI = () => {
  // use state to store the data locally
  const [data, setData] = useState([]);

  // Create an async function to fetch data
  const getData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
       // Set the state with the fetched data
      setData(response.data);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
  };

  // use effect to get the api using axios
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
<table>
    <thead>
    <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
    </thead>
    <tbody>
        {data?.map((user) => {
            return(
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    <td>{user.website}</td>
                </tr>
            )
        })}
    </tbody>
</table>
    </div>
  )
};

export default EffectWithAPI;
