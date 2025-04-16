

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/header.jsx'
import Productcard from './components/product-card.jsx'
import Adminpage from './pages/adminpage.jsx'
import LoginPage from './pages/loginpage.jsx'



function App() {
 

  return (
  <BrowserRouter>
  <Routes path="/*">
  <Route path="/login" element={<LoginPage />} />
  <Route path="/admin/*" element={<Adminpage />} />
  <Route path="/" element={<h1>Home</h1>} />
  <Route path="/*" element={<h1>404 error page</h1>} />
  </Routes>
  </BrowserRouter>
  )
}



export default App
