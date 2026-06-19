import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx' // Memanggil komponen utama App
import './index.css'        // Memanggil Tailwind CSS
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TemanAsuhKatalog from './pages/home'
import Login from './pages/login.tsx'
import TemanAsuhApp from './App.tsx'
// Merender aplikasi React ke dalam elemen HTML dengan id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='home' element={<TemanAsuhKatalog />} />
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard' element={<TemanAsuhApp/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
