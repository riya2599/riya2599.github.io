import { createElementFromHTML, createList } from '../utils/dom.js';

export const createProjects = ({ projects }) =>
  createElementFromHTML(`
    <section id="projects" class="content-section">
      <div class="section-heading">
        <h2>Selected Academic Projects</h2>
      </div>
      <div class="projects-list">
        ${createList(
          projects,
          (project) => `
            <article class="project-item glass-panel">
              <div class="project-header">
                <h3>${project.title}</h3>
                ${
                  project.link
                    ? `<a href="${project.link}" class="project-link" aria-label="View ${project.title}">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>`
                    : ''
                }
              </div>
              <p class="project-description">${project.description}</p>
              <div class="project-meta">
                <div class="tech-stack">
                  ${createList(project.technologies, (tech) => `<span class="tech-badge">${tech}</span>`)}
                </div>
                <p class="project-impact"><i class="fa-solid fa-circle-info"></i> ${project.impact}</p>
              </div>
            </article>
          `
        )}
      </div>
    </section>
  `);
