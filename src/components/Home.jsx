import img from './d.png'
import v from './vs-removebg.png'
import React from 'react'

import d from './d.png'
import ds from './ds.png'
import dv from './dv.png'
import apd from './apd.png'
import brain from './brain.png'

function Home() {

  return (
    <>
     <section className="home" id="home">
  <div className="home-content">
    <h3>HELLO , It's Me </h3>
    <h1>Venkat <span>Sai!</span></h1>
    <h3>And I'm a <span className="multiple-text" /></h3>
    <p>I believe that web development is indeed an important and 
      growing field with a lot of potential for the future.</p>
    <a><button>Download CV
</button></a>

  </div>
  <div className="profession-container">
    <div className="profession-box">
      <div className="profession" style={{'-i': 0}}><i className="bx bx-code-alt" />
        <h3>Web Devloper</h3>
      </div>
      <div className="circle" />
    </div>
    
    <div className="overlay">
      
    </div>
    <div className="home-img">
      <img src={img} alt />
    </div>        
  </div>
  </section>

  <section className="about" id="about">
  <div className="about-img">
    <img src={v} alt />
  </div>
  <div className="about-content">
    <h2 className="heading">About <span>Me</span></h2>
    <h3>Frontend Developer</h3>
    <p>Frontend development is a key aspect of building modern websites and web applications. Frontend developers are responsible for creating the user-facing parts of a website or application, including the layout, design, and interactivity. They work with HTML, CSS, and JavaScript to build the visual and interactive components of a
      website or application.</p>
    <a href="#" className="btn">Read More</a>
  </div>
</section>
<section class="services" id="services">
        <h2 class="heading">My <span>Services</span></h2>
        <div class="services-container">
            <div class="services-box">
                <i class='bx bx-code-alt'></i>
                <h3>Web Development</h3>
                <p>Web development services are essential for businesses and organizations looking to establish a strong online presence. Web development involves the creation of websites and web applications, 
                    and can include everything from simple brochure sites to complex e-commerce platforms.</p>
                    <a href="#" class="btn">Read More</a>
            </div>
            <div class="services-box">
                <i class='bx bx-paint'></i>
                <h3>Graphic design</h3>
                <p>Graphic design is the art and practice of creating visual content to communicate messages or ideas to a target audience. It encompasses a wide range of mediums, 
                    including print, digital, and multimedia.

                </p>
                <a href="#" class="btn">Read More</a>
            </div>
            <div class="services-box">
                <i class='bx bx-bar-chart-alt'></i>
                <h3>App Development</h3>
                <p>An app developer is a professional who creates 
                  mobile applications for different platforms such as iOS, Android, and Windows
                </p>
                <a href="#" class="btn">Read More</a>
            </div>
        </div>
    </section>
    <section className="portfolio" id="portfolio">
  <h2 className="heading">Latest  <span>Project</span></h2>
  <div className="portfolio-container">
    <div className="portfolio-container">
      <div className="portfolio-box">
        <img className='portfolio-box-img' src={apd} alt />
        <div className="portfolio-layer" />
        <h4>Web Design</h4>
        <p>
          Three.js is a JavaScript library that makes it easier to create 3D graphics and animations in web browsers. It provides a wide range of tools and features that can be used to create complex 3D scenes, games,
          simulations, and visualizations.
        </p>
        <a href="#"><i className="bx bx-link-external" /></a>
      </div>
    </div>
  </div>
</section>




  
    </>
  )
}

export default Home