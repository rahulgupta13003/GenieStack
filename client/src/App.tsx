import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Community from './pages/Community'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Preview from './pages/Preview'
import View from './pages/View'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/projects/:projectId' element={<Projects />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/preview/:projectId' element={<Preview />} />
        <Route path='/preview/:projectId/::versionId' element={<Preview />} />
        <Route path='/communinty' element={<Community />} />
        <Route path='/view/:projectId' element={<View />} />
      </Routes>
    </div>
  )
}

export default App
