import { createElementFromHTML, createList } from '../utils/dom.js';

export const createResearch = ({ publications, researchTheme }) =>
  createElementFromHTML(`
    <section id="research" class="content-section">
      <div class="section-heading">
        <h2>Research and Publications</h2>
        <p class="section-subtitle">
          Current focus: ${researchTheme}. Earlier peer-reviewed work includes machine learning for text analysis
          and ensemble methods for cybercrime classification.
        </p>
      </div>
      <div class="publications-list">
        ${createList(
          publications,
          (pub) => `
            <article class="publication-item glass-panel">
              <div class="pub-header">
                <span class="year">${pub.year}</span>
                <span class="pub-type">${pub.type}</span>
              </div>
              <h3>${pub.title}</h3>
              <p class="authors">${pub.authors}</p>
              <p class="venue"><i class="fa-solid fa-book"></i> ${pub.venue}</p>
              ${pub.doi ? `<p class="doi"><i class="fa-solid fa-link"></i> DOI: ${pub.doi}</p>` : ''}
            </article>
          `
        )}
      </div>
    </section>
  `);
