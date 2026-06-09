import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './features/home/HomePage'
import HistoryPage from './features/history/HistoryPage'
import TañarandyPage from './features/tañarandy/TañarandyPage'
import MuseumsPage from './features/museums/MuseumsPage'
import PlazasPage from './features/plazas/PlazasPage'
import GastronomyPage from './features/gastronomy/GastronomyPage'
import MapPage from './features/map/MapPage'

function App() {

  return (
    <div className='min-h-screen '>
      <Navbar />
      <main className=''>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/historia" element={<HistoryPage />} />
          <Route path="/tañarandy" element={<TañarandyPage />} />
          <Route path="/museos" element={<MuseumsPage />} />
          <Route path="/plazas" element={<PlazasPage />} />
          <Route path="/gastronomia" element={<GastronomyPage />} />
          <Route path="/mapa" element={<MapPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
