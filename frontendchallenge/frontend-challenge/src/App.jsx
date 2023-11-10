import { useState,useEffect } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import TechStack from './components/TechStack/TechStack'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer'

function App() {
 

  return (
    <>
    <Hero />
    <TechStack />
    <Profile/>
    <ProjectsContainer/>
    <Footer />
    </>
  )
}

export default App
