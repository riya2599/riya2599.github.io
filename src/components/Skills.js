import { createElementFromHTML, createList } from '../utils/dom.js';

export const createSkills = ({ skillGroups, professionalStrengths, skills = {} }) => {
  const groups =
    skillGroups ||
    [
      { title: 'Programming Languages', icon: 'fa-code', items: skills.languages || [] },
      { title: 'ML Frameworks', icon: 'fa-cube', items: skills.frameworks || [] },
      { title: 'Tools and Platforms', icon: 'fa-wrench', items: skills.tools || [] },
      { title: 'Research Areas', icon: 'fa-flask', items: skills.research || [] }
    ].filter((group) => group.items.length > 0);

  const strengths = professionalStrengths || [];

  return createElementFromHTML(`
    <main class="page-content">
      <section class="content-section">
        <div class="section-heading">
          <h1>Technical breadth with strong CS fundamentals</h1>
          <p class="page-subtitle">Programming, AI methods, development tools, and core computer science foundations.</p>
        </div>
      </section>

      <section class="skills-grid">
        ${createList(
          groups,
          (group) => `
            <article class="skill-category glass-panel">
              <h3><i class="fa-solid ${group.icon}"></i> ${group.title}</h3>
              <div class="skill-tags">
                ${createList(group.items, (item) => `<span class="skill-tag">${item}</span>`)}
              </div>
            </article>
          `
        )}
      </section>

      ${
        strengths.length > 0
          ? `
            <section class="glass-panel prose-panel">
              <h2>Professional strengths</h2>
              <div class="focus-tags">
                ${createList(strengths, (item) => `<span class="tag subtle-tag">${item}</span>`)}
              </div>
            </section>
          `
          : ''
      }
    </main>
  `);
};
