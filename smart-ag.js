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

  const workflow = document.createElement('section');
  workflow.id = 'workflow';
  workflow.className = 'section section-pad';
  workflow.innerHTML = `
    <div class="section-heading centered">
      <p class="eyebrow">Service Flow</p>
      <h2>Imagery → analysis → operation layer → delivery</h2>
    </div>
    <div class="flow-grid">
      <article class="flow-card"><span>01</span><h3>Field Review</h3><p>Crop stress, variability, anomaly detection, weed detection, boundaries, obstacles, and RGB / multispectral / satellite review.</p></article>
      <article class="flow-card"><span>02</span><h3>Treatment & Action Planning</h3><p>Scouting priorities, sampling zones, treatment plans, zonation, prescription planning, and targeted operations.</p></article>
      <article class="flow-card"><span>03</span><h3>Monitoring</h3><p>Progress tracking, treatment effectiveness, date-to-date comparison, crop health monitoring, and field documentation.</p></article>
      <article class="flow-card"><span>04</span><h3>Export & Share</h3><p>PDF reports, interactive map links, GIS-compatible files, prescription maps, and equipment-ready exports.</p></article>
    </div>
  `;

  const outputs = document.createElement('section');
  outputs.id = 'outputs';
  outputs.className = 'section section-pad dark';
  outputs.innerHTML = `
    <div class="section-heading light">
      <p class="eyebrow">Outputs</p>
      <h2>Useful maps, reports, and files</h2>
      <p>Outputs are selected based on the field question and the next action: review, scouting, sampling, treatment planning, monitoring, or equipment handoff.</p>
    </div>
    <div class="outputs-layout">
      <div class="output-column"><h3>Digital Maps</h3><ul class="check-list"><li>HD aerial maps / orthomosaics</li><li>Digital surface models</li><li>Crop health maps</li><li>Field variability maps</li><li>Anomaly and weed pressure maps</li><li>Field boundaries and obstacles</li></ul></div>
      <div class="output-column"><h3>Vegetation Indices</h3><ul class="check-list"><li>NDVI — general crop vigor</li><li>NDRE — dense or later-season canopy stress</li><li>GNDVI — vigor and chlorophyll patterns</li><li>LCI — chlorophyll / nutrition signal</li><li>MCARI — chlorophyll stress signal</li><li>SIPI2 — pigment stress signal</li></ul></div>
      <div class="output-column"><h3>Targeted Operations</h3><ul class="check-list"><li>Scouting / sampling zone maps</li><li>Treatment planning maps</li><li>Zonation maps</li><li>Spot-spray planning maps</li><li>Variable-rate prescription maps</li><li>Machine-readable prescription files</li></ul></div>
      <div class="output-column export-column"><h3>Export & Share</h3><ul class="check-list"><li>PDF reports</li><li>Interactive map links</li><li>GIS-compatible files</li><li>Machine-readable prescription maps</li><li>Equipment-ready exports</li><li>John Deere Operations Center compatible files</li></ul></div>
    </div>
  `;

  const equipment = document.createElement('section');
  equipment.id = 'equipment';
  equipment.className = 'section section-pad muted';
  equipment.innerHTML = `
    <div class="section-heading centered">
      <p class="eyebrow">Equipment-Ready Exports</p>
      <h2>Outputs for drones, tractors, and sprayers</h2>
      <p>We help turn field intelligence into compatible files and workflows for field equipment where supported.</p>
    </div>
    <div class="equipment-grid">
      <article class="equipment-card"><img src="media/dji-agras-t50.jpg" alt="DJI Agras T50 agricultural drone sprayer" /><div><h3>Drone Sprayers</h3><p>Prescription and targeted operation workflows for drone application, including DJI systems.</p></div></article>
      <article class="equipment-card"><img src="media/john-deere-sprayer.avif" alt="John Deere agricultural sprayer" /><div><h3>John Deere Workflows</h3><p>Files compatible with John Deere Operations Center and supported John Deere equipment workflows.</p></div></article>
      <article class="equipment-card"><img src="media/hardi-alpha-evo.webp" alt="HARDI Alpha Evo self-propelled sprayer" /><div><h3>Self-Propelled Sprayers</h3><p>Application-ready outputs for compatible field sprayers, including HARDI-style workflows.</p></div></article>
    </div>
  `;

  const claims = document.createElement('section');
  claims.id = 'claims';
  claims.className = 'section section-pad';
  claims.innerHTML = `
    <div class="claims-panel">
      <div><p class="eyebrow">Potential Value</p><h2>Target better. Document better. Waste less.</h2><p>Where field conditions and equipment workflows support it, targeted operations can help reduce unnecessary application and focus inputs where they are needed.</p></div>
      <ul class="claim-list"><li><strong>Up to 5%</strong><span>yield and grain quality improvement potential</span></li><li><strong>Up to 15%</strong><span>input savings potential through variable-rate application</span></li><li><strong>50–90%</strong><span>spot-spray input reduction potential where targeted application is appropriate</span></li></ul>
    </div>
  `;

  [services, workflow, outputs, equipment, claims].forEach((section) => main.insertBefore(section, contact));
});
