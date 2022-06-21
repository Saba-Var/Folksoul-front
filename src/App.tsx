import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Dashboard } from 'pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
