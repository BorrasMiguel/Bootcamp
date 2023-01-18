import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [userId, setUserId] = useState()

  const navigate = useNavigate();

  function handleClick(event) {
    navigate(`/record/${userId}`)
  }

  return (
    <div>
        <input type="text" onChange={e => setUserId(e.target.value)} value={userId}/>
        <button onClick={handleClick}>Ir al perfil de usuario {userId}</button>

    </div>
  )
}
