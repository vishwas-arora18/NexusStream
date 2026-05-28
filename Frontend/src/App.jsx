import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing.jsx'; // Maine extension lagaya hai taaki panga na ho
import Authentication from './pages/Authentication.jsx'; // Capital 'A' ke sath exact file link kari hai
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path="/auth" element={<Authentication/>}></Route>
        </Routes>
      </Router>        
    </div>
  )
}

export default App
