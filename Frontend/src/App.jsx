import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing.jsx'; 
import Authentication from './pages/Authentication.jsx'; 
import { AuthProvider } from './context/AuthContext.jsx'; 

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
          </Routes>
        </AuthProvider>
      </Router>        
    </div>
  )
}

export default App;
