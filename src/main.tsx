import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AboutUs from './pages/AboutUs.tsx'
import CountryPage from './pages/CountryPage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import ServiceDetailPage from './pages/ServiceDetailPage.tsx'
import MedicalPage from './pages/MedicalPage.tsx'
import MedicalDetailPage from './pages/MedicalDetailPage.tsx'
import SeatMatrixPage from './pages/SeatMatrixPage.tsx'
import LanguagesPage from './pages/LanguagesPage.tsx'
import TrainingPlacementPage from './pages/TrainingPlacementPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/study/:slug" element={<CountryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/medical" element={<MedicalPage />} />
        <Route path="/medical/:slug" element={<MedicalDetailPage />} />
        <Route path="/seat-matrix" element={<SeatMatrixPage />} />
        <Route path="/languages" element={<LanguagesPage />} />
        <Route path="/training-placement" element={<TrainingPlacementPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
