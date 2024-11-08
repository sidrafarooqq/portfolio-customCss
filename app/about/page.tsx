'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function About() {
  const route = useRouter()
  return (
    <div>
      <div className="about-page">
        <img 
          src="https://c8.alamy.com/comp/JK3HH2/integration-between-programming-languages-and-code-development-of-JK3HH2.jpg" 
          alt="Sidra Farooq" 
          className="about-image"
        />
        
        <div className="text-container">
          <p className="about-text">
            <b>Welcome to my About page!</b> 
            <i>
              I am a dedicated web developer with a strong foundation in HTML, CSS, and TypeScript. My journey in web development began with a fascination for how websites work, and it has since evolved into a passion for creating engaging and user-friendly digital experiences. Currently, I am expanding my skill set by learning Next.js and React.js, which allows me to build dynamic applications that enhance user interaction and functionality. I love tackling challenges and finding innovative solutions that bring ideas to life. Whether it s developing a responsive design or optimizing performance, I am committed to delivering high-quality work.
            </i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;