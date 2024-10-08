import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import LoginForm from './components/login.js';
import SignupForm from './components/signup.js';

function App() {

  return (
    <div className="App">
      <Router>
          <div className='App-container'>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
          </div>
      </Router>  
    </div>
  );
}

export default App;
