import { useState,useEffect,useContext } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import TechStack from './components/TechStack/TechStack'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer'
import data from './data.js'
import { SiteContext } from './context/SiteContext'


function App() {
 const {siteTexts,setSiteTexts} = useContext(SiteContext);

 
 

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
