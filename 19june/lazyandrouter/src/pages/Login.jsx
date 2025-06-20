import React from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
    
      <button onClick={()=>{
navigate("/dash")
      }}>Login</button>
    </div>
  )
}

export default Login
