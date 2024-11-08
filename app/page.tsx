import React from 'react'
import Home from './Home/page'
import About from './about/page'
import Projects from './projects/page'
import Contact from './contact/page'
import Footer from './footer/page'
import Skills from './skills/page'

export default function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>



    </div>
  )
}
