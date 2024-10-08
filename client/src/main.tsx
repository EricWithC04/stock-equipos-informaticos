import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.tsx'
import { UpdateStockProvider } from './context/UpdateStockContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <UpdateStockProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UpdateStockProvider>
    </UserProvider>
  </StrictMode>,
)
