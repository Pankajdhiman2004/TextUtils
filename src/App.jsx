import { useState } from 'react';
import reactLogo from './assets/react.svg';
import favicon from '/favicon.ico';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0e2a51';
      showAlert('Dark mode has been set', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert('Light mode has been set', 'success');
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze"
              mode={mode}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
