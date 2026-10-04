import React from "react";

function About(){
    return(<section id="about" class="py-5">
    <div class="container py-lg-4">
      <h2 class="h3 fw-semibold mb-4">About</h2>
      <div class="row g-5 align-items-start">
        <div class="col-md-4 col-lg-3">
          <img src="src\assets\profile-picture.jpg" alt="Thomas Lovin" width="480" height="480" class="portrait img-fluid rounded-circle"/>
        </div>
        <div class="col-md-8 col-lg-8">
          <p>
            I started as an electrical and controls technician, wiring panels and keeping
            production equipment online at Mars and Honeywell. Working on live systems
            taught me how automation actually fails: rarely in one clean place, usually at
            the seam between two layers that each look fine on their own.
          </p>
          <p>
            I moved into software support in 2024 and now handle advanced escalations for
            Ignition customers. A typical case involves Python scripts behaving differently
            under load, historian queries slowing down as data volume grows, gateways
            struggling at shift change, or an architecture that outgrew its original sizing.
            The work is disciplined narrowing, then a clear explanation the customer can use.
          </p>
          <p class="mb-0 text-secondary">
            Alongside the day job I finished a B.S. in Computer Information Systems at
            Valdosta State University and keep building small projects to stay close to how
            software is put together. This site is one of them.
          </p>
        </div>
      </div>
    </div>
  </section>);
}

export default About;