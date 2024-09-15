import { Routes, Route } from 'react-router-dom'
import Stock from './pages/Stock/Stock'
import NewEquipments from './pages/NewEquipments/NewEquipments'
import Brands from './pages/Brands/Brands'
import Categories from './pages/Categories/Categories'
import './App.css'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/stock" element={<Stock />} />
      <Route path="/register-equipment" element={<NewEquipments />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  )
}

export default App
