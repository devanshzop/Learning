import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const Dashboard = lazy(() => import('./pages/dashboard'));
import Login from './pages/login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Suspense fallback={<p><i>Loading...</i></p>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
