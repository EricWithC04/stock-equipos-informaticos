import { Routes, Route } from 'react-router-dom'
import Stock from './pages/Stock/Stock'
import NewEquipments from './pages/NewEquipments/NewEquipments'
import Brands from './pages/Brands/Brands'
import Categories from './pages/Categories/Categories'
import './App.css'
import Landing from './pages/Landing/Landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/stock" element={<Stock />} />
      <Route path="/register-equipment" element={<NewEquipments />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  )
}

export default App
