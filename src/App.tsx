import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Home,
  Login,
  Dashboard,
  Members,
  About,
  SocialLinks,
  Main,
} from 'pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route path='Main' element={<Main />} />
          <Route path='Members' element={<Members />} />
          <Route path='Social-Links' element={<SocialLinks />} />
          <Route path='About' element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
