import './App.css';
import About from './components/About';
import CustomForm from './components/CustomForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');
  let togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
    }
    else{
      setmode('light');
    }
  }
  return (
    <>
      <Navbar NavbarTitle="TextUtils Pro" mode={mode} togglemode={togglemode} />
            <CustomForm BoxTitle="Enter Text For Analyzation"/>
            <About/>
    </>
  );
}

export default App;
