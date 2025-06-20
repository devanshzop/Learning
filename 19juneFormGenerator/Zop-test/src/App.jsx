import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formbox from './compnents/formbox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div  className=''>
        <div>Start a New Form</div>
        <div className='grid grid-cols-5 text-center items-center g-4 p-4'>
          <Formbox/>
           <Formbox/> 
            <Formbox/>
             <Formbox/>
              <Formbox/>
             
        </div>
      
    </div>

    </>
  )
}

export default App
