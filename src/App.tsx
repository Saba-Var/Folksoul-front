import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login } from 'pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
