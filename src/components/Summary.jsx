import React from "react";

function Summary(){
    return(<section id="hero" class="py-5 border-bottom">
    <div class="container py-lg-4">
      <div class="row g-5">
        <div class="col-lg-7">
          <h2 class="h3 fw-semibold mb-4">Summary</h2>
          <p>
            I work on the software that runs plant floors. My background starts in the
            panel with motor controls, power systems and industrial networks, then moves
            up into the platform layer, where the work is Python scripting, SQL databases,
            OPC UA connectivity and gateway performance.
          </p>
          <p class="mb-0 text-secondary">
            That range is the reason customers get an answer instead of a handoff. When a
            value on a screen is wrong, I can trace it back through the tag, the
            connection, the network and the device until the cause is proven rather than
            assumed, then write it up clearly enough for the customer to act on.
          </p>
        </div>
        <div class="col-lg-5">
          <dl class="mb-0">
            <div class="d-flex justify-content-between gap-3 border-top py-3">
              <dt class="fw-normal text-secondary">Current role</dt>
              <dd class="mb-0 text-end fw-medium">Software Support Engineer II</dd>
            </div>
            <div class="d-flex justify-content-between gap-3 border-top py-3">
              <dt class="fw-normal text-secondary">Employer</dt>
              <dd class="mb-0 text-end fw-medium">Inductive Automation</dd>
            </div>
            <div class="d-flex justify-content-between gap-3 border-top py-3">
              <dt class="fw-normal text-secondary">Platform</dt>
              <dd class="mb-0 text-end fw-medium">Ignition SCADA</dd>
            </div>
            <div class="d-flex justify-content-between gap-3 border-top py-3">
              <dt class="fw-normal text-secondary">Core tools</dt>
              <dd class="mb-0 text-end fw-medium">Python, SQL, OPC UA</dd>
            </div>
            <div class="d-flex justify-content-between gap-3 border-top border-bottom py-3">
              <dt class="fw-normal text-secondary">Education</dt>
              <dd class="mb-0 text-end fw-medium">B.S. Computer Information Systems</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>);
}

export default Summary;