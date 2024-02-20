// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormAction from './components/FormAction';

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home user={user} /> } />
        <Route path="/form" element={ <FormAction setUser={setUser} /> } />
      </Routes>
    </Router>
  );
}

export default App;


