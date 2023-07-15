import './App.css';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 2000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert(" Dark mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been Enabled", "success");
    }
  }

  return (
    <>
    
      <Router>
        <Navbar title="#TheTitle" aboutText="TheAbout" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<AboutUs/>}></Route>
            
            <Route exact path="/" element={<TextForm heading="Enter The Text To Analize" mode={mode} showAlert={showAlert} />}>
            </Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
