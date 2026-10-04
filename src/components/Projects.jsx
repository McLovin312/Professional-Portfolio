import React from "react";

function Projects() {
  return (
    <section id="projects" class="py-5">
      <div class="container py-lg-4">
        <h2 class="h3 fw-semibold mb-2">Projects</h2>
        <p class="text-secondary mb-4 col-lg-7">
          Coursework, side projects and a few experiments. Source for all of it
          is on GitHub.
        </p>

        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/CS4321_Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">Point of Sale System</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  Senior capstone project. Product lookup, transaction handling
                  and inventory kept in step across a retail counter workflow.
                </p>
                <p class="small mb-0 project-repo">McLovin312/CS4321_Project</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/Inventory-Management-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">Inventory Management System</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  Tracks stock levels, movement history and reorder points so
                  counts stay accurate as items come and go.
                </p>
                <p class="small mb-0 project-repo">
                  McLovin312/Inventory-Management-System
                </p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/c-custom-allocator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">Custom Memory Allocator</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  A replacement for malloc and free written in C, with its own
                  free list, block splitting and coalescing.
                </p>
                <p class="small mb-0 project-repo">
                  McLovin312/c-custom-allocator
                </p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/YAkahoot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">YAkahoot</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  A live quiz application. A host opens a room, players answer
                  from their own devices and scores update as the round runs.
                </p>
                <p class="small mb-0 project-repo">McLovin312/YAkahoot</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/URL-Shortener"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">URL Shortener</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  Generates short links from long URLs, stores the mapping and
                  serves the redirect.
                </p>
                <p class="small mb-0 project-repo">McLovin312/URL-Shortener</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/ChurchPotLock"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">Potluck Planner</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  Coordinates who is bringing which dish for a church event,
                  along with headcount and setup details.
                </p>
                <p class="small mb-0 project-repo">McLovin312/ChurchPotLock</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/kindling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">Kindling</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  An exercise in application structure, built from scratch to
                  test how the pieces fit together without a framework.
                </p>
                <p class="small mb-0 project-repo">McLovin312/kindling</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/java-todo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">Java Task Manager</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  Task tracking in Java with due dates, completion state and
                  persistence between runs.
                </p>
                <p class="small mb-0 project-repo">McLovin312/java-todo</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              class="card h-100 border project-card text-decoration-none text-reset"
              href="https://github.com/McLovin312/Resume-HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="card-body p-4 d-flex flex-column">
                <h3 class="h6 fw-semibold mb-2">HTML Resume</h3>
                <p class="small text-secondary flex-grow-1 mb-3">
                  My resume marked up in semantic HTML and styled by hand. The
                  starting point for this site.
                </p>
                <p class="small mb-0 project-repo">McLovin312/Resume-HTML</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
