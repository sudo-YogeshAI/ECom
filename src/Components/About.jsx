import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://cdn.statically.io/gh/sudo-YogeshAI/ECom/Yogesh/1612802561-3192.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            
              <h1> Welcome to Vanguard E-Commerce</h1>

             <p>
               We provide a wide range of A-grade products ranging from Electronics to jwellery and clothing. We promise our customers state of the art products and an experience so seamless you would want to visit the site for every need.  
            </p>
            <p>To start you might wanna view products by category or list all of them at once.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;