import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Admin from './pages/Admin'
import ServiceDetails from './pages/ServiceDetails'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
      </Routes>
    </Layout>
  )
}

export default App

