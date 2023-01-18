import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Record() {

  const [userData, setUserData] = useState({});

  const {user} = useParams();

  const URL = "https://reqres.in/api/users/";

  useEffect(() => {
    fetch(`${URL}${user}`)
    .then(response => response.json())
    .then(data => setUserData(data))
  }, [user]);
  

  return (
    <div>
        <h1>Record of {user}</h1>

        <ul>
          <li>{userData.data?.email}</li>
          <li>{userData.data?.first_name}</li>
          <li>{userData.data?.last_name}</li>
          <img src={userData.data?.avatar} alt="Profile" />
        </ul>
    </div>
  )
}
