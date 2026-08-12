import { createElementFromHTML, createList } from '../utils/dom.js';

export const createEducation = ({ education }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="content-section">
        <div class="section-heading">
          <h1>Academic progress</h1>
          <p class="page-subtitle">A progression from strong school performance to advanced training in computer science and artificial intelligence.</p>
        </div>
      </section>

      <section class="education-cards">
        ${createList(
          education,
          (edu) => {
            const result = edu.score || edu.gpa;

            return `
              <article class="education-card glass-panel">
                <div class="edu-header">
                  <div>
                    <h3>${edu.degree}</h3>
                    <p class="institution"><i class="fa-solid fa-building"></i> ${edu.institution}</p>
                  </div>
                  <span class="year">${edu.year}</span>
                </div>
                ${edu.focus ? `<p class="focus"><strong>Focus:</strong> ${edu.focus}</p>` : ''}
                ${edu.advisor ? `<p class="advisor"><strong>Advisor:</strong> ${edu.advisor}</p>` : ''}
                ${result ? `<p class="score"><strong>Score:</strong> ${result}</p>` : ''}
                ${edu.honors ? `<p class="honors"><i class="fa-solid fa-medal"></i> ${edu.honors}</p>` : ''}
                ${edu.notes ? `<p class="edu-notes">${edu.notes}</p>` : ''}
              </article>
            `;
          }
        )}
      </section>
    </main>
  `);
