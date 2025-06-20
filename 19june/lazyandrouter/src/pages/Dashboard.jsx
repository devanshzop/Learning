import React from 'react'
import { useState, Suspense, lazy } from 'react';
import Login from './login';

const  Dashboard = () => {
  return (
<div>
  <h2>DashBoard</h2>
 <Login></Login>
 </div>



  )
}

export default Dashboard
