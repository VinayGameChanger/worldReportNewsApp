import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route,Routes } from 'react-router-dom'

export default function App () {
    return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/'   element={<News key="technology" category="general"/>}/>
        <Route path='/business'  element={<News key="business" category="business"/>}/>
        <Route path='/entertainment'  element={<News key="entertainment" category="entertainment"/>}/>
        <Route path='/general'  element={<News key="general" category="general"/>}/>
        <Route path='/health'  element={<News key="health" category="health"/>}/>
        <Route path='/sports'  element={<News key="sports" category="sports"/>}/>
        <Route path='/technology'  element={<News key="technology" category="technology"/>}/>
        <Route path='/science'  element={<News key="science" category="science"/>}/>
      </Routes>
      </>
    )
  }
