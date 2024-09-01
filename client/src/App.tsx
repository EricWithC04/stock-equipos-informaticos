import { Routes, Route } from 'react-router-dom'
import Stock from './pages/Stock/Stock'
import NewEquipments from './pages/NewEquipments/NewEquipments'
import Brands from './pages/Brands/Brands'
import Categories from './pages/Categories/Categories'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Stock />} />
      <Route path="/register-equipment" element={<NewEquipments />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  )
}

export default App
