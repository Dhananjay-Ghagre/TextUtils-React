import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React,{startTransition, useState} from 'react'
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Switch

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{ //startTransition
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2a2145';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils- Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title = 'TextUtils- Light Mode'
    }
    
  }
  
  /*return (
    <>
      //<Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/>
        <Alert alert={alert}/>
        <div className="container my-3">
      //    <Routes>
      //    <Route exact path="/about" element={<About />} />
      //  <Route exactf path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
      //    </Routes>
        </div>
      //</Router>
    </>
  );*/

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
  
}

export default App; 
