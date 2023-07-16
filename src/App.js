import './App.css';
import { useState } from 'react';
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
      document.body.style.backgroundColor = '#3f4916';
      showAlert(" Dark mode has been Enabled", "success");
      // this.modeIs("Enable Dark Mode");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#e8f2bf';
      showAlert(" Light mode has been Enabled", "success");
      // this.modeIs("Enable Light Mode");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TheTextEditor" aboutText="TheAbout" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
