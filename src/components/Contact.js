import { createElementFromHTML, createList } from '../utils/dom.js';

export const createContact = ({ email, office, university, location, socialLinks, researchTheme }) =>
  createElementFromHTML(`
    <main class="page-content">
      <section class="content-section">
        <div class="section-heading">
          <h1>Academic Contact</h1>
          <p class="page-subtitle">
            For research discussions related to ${researchTheme}, please use the contact information below.
          </p>
        </div>
      </section>

      <section class="contact-methods glass-panel">
        <h2>Contact Information</h2>
        <div class="contact-grid">
          <div class="contact-method">
            <h3><i class="fa-solid fa-envelope"></i> Email</h3>
            <p><a href="mailto:${email}" class="contact-link">${email}</a></p>
          </div>

          <div class="contact-method">
            <h3><i class="fa-solid fa-building-columns"></i> Affiliation</h3>
            <p>${office}</p>
            <p>${university}</p>
            <p>${location}</p>
          </div>
        </div>
      </section>

      <section class="contact-social glass-panel">
        <h2>Academic Links</h2>
        <div class="social-links contact-social-links">
          ${createList(
            socialLinks || [],
            (link) => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">
                <i class="${link.iconStyle || 'fa-brands'} ${link.icon}"></i>
                <span>${link.label}</span>
              </a>
            `
          )}
        </div>
      </section>
    </main>
  `);
