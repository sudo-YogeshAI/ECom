import React from "react";
import './About.css';

function About() {
  return (
    <div className ='container'>
      
    <div className="about">
      
            <img
              class="image"
              src="https://cdn.statically.io/gh/sudo-YogeshAI/ECom/Yogesh/1612802561-3192.jpg"
              alt=""
            />
          </div>
          <div >
            <br /><br />
            <h2 className='About' >Hi! We are Vanguard E-Commerce</h2>
            
              <br /><br/>
              <hr />
              <br /><br/>
              <section className='More'>
                <div className='info'>
                <b>
                We are More than just an e-commerce site. 
                </b><br></br>
                <b>We are a community. We. Are. Family.</b>
                </div>
              </section>
            <div className ='boring'>
              <ul className='list'>
                <li>Wide Range of A-grade products</li>
                <li>From Electronics to jwellery and Clothing</li>
                <li>State of the art products</li>
                <li>Seamless and addictive experience</li>

              </ul>
            
            <p>To start you might wanna view products by category or list all of them at once.</p>
            </div>
          </div>
          </div>
  );
}

export default About;