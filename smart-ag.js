document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  if (nav) {
    nav.innerHTML = '<a href="#services">Services</a><a href="#workflow">Workflow</a><a href="#outputs">Outputs</a><a href="#equipment">Equipment</a><a class="nav-cta" href="#contact">Contact</a>';
  }

  const main = document.querySelector('main');
  const contact = document.querySelector('#contact');
  const engage = document.querySelector('#engage');
  if (!main || !contact) return;
  if (engage) engage.remove();

  const services = document.createElement('section');
  services.id = 'services';
  services.className = 'section section-pad muted';
  services.innerHTML = `
    <div class="section-heading centered">
      <p class="eyebrow">What You'll See</p>
      <h2>Field conditions made easier to act on</h2>
      <p>Drone, RGB, multispectral, and satellite imagery can reveal crop patterns that are hard to see from the road.</p>
    </div>
    <div class="value-grid">
      <article class="value-card"><img src="media/icons/soil-health.svg" alt="" /><h3>Crop Health Assessment</h3><p>Identify areas that are thriving, lagging, or under stress before problems become obvious.</p></article>
      <article class="value-card"><img src="media/icons/nutrient.svg" alt="" /><h3>Water & Nutrient Status</h3><p>Highlight areas that may need irrigation, nutrient review, or field verification.</p></article>
      <article class="value-card"><img src="media/icons/pest.svg" alt="" /><h3>Pest Pressure</h3><p>Spot signs of pest pressure or crop damage for targeted scouting.</p></article>
      <article class="value-card"><img src="media/icons/field.svg" alt="" /><h3>Field Variability Mapping</h3><p>Compare blocks, rows, and zones so management decisions can focus where they matter most.</p></article>
      <article class="value-card"><img src="media/icons/agriculture.svg" alt="" /><h3>Growth Tracking</h3><p>Compare field conditions over time to monitor crop response, progress, and change.</p></article>
      <article class="value-card"><img src="media/icons/target.svg" alt="" /><h3>Targeted Operations</h3><p>Turn field findings into action zones, prescriptions, and equipment-ready files where appropriate.</p></article>
    </div>
  `;
  main.insertBefore(services, contact);
});
