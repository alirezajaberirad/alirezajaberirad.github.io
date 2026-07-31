---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span id="top"></span>

I am a graduate researcher at the University of Massachusetts Amherst working on efficient machine learning and hardware-algorithm co-design. I have developed a novel hyperdimensional computing algorithm and studied its performance across natural language processing, image processing, DNA sequencing, and gene expression classification. I have also contributed to event-based, brain-inspired processing with applications in computer vision, and designed architectures that perform matrix multiplication and convolution in a single step.

Before joining UMass, I earned dual degrees in Computer Science (AI focus) and Electrical Engineering (digital system design focus) at the University of Tehran, where I graduated in the top 10% of both cohorts, won the Best Undergraduate Project Award for my thesis on hardware accelerators for neural networks, and received Exceptional Talent M.Sc. admission offers from the University of Tehran and Sharif University of Technology.

Research Interests: **Efficient AI, Hardware-Software Co-Design, NLP, AI for Science, LLMs**

<style>
.two-col-list { margin: 0; padding: 0; }
.two-col-row { display: flex; gap: 0.6em; align-items: flex-start; padding: 0.5em 0; border-bottom: 1px solid var(--global-border-color); }
.two-col-list > .two-col-row:first-child { padding-top: 0; }
.two-col-row:last-child { border-bottom: none; padding-bottom: 0; }
.two-col-left { flex: 0 0 165px; max-width: 165px; font-weight: 600; }
.two-col-right { flex: 1; min-width: 0; }
@media (max-width: 600px) {
  .two-col-row { flex-direction: column; gap: 0.15em; padding: 0.6em 0; }
  .two-col-left { flex: none; max-width: none; }
}
.links-mobile-only { display: none; }
@media screen and (max-width: 1023px) {
  .links-mobile-only { display: block; }
}
.pub-badge { display: inline-block; font-size: 0.75em; line-height: 1.6; padding: 0.05em 0.6em; margin-left: 0.4em; border: 1.5px solid var(--global-border-color); border-radius: 4px; color: var(--global-text-color); text-decoration: none; white-space: nowrap; }
.pub-badge:hover { color: var(--global-link-color-hover); border-color: var(--global-link-color-hover); }
.pub-status--accepted { color: var(--global-link-color); font-weight: 600; }
.pub-status--review { color: var(--global-text-color-light); }
</style>

<h2 id="news" style="margin-bottom: 0.3em;">News</h2>
<div id="news-list" class="two-col-list">
  <div class="two-col-row news-item"><div class="two-col-left">July 2026</div><div class="two-col-right">My Nature Communications paper is published now! <a href="https://doi.org/10.1038/s41467-026-76067-5">access here</a></div></div>
  <div class="two-col-row news-item"><div class="two-col-left">July 2026</div><div class="two-col-right">My first-authored paper accepted at Advanced Intelligent Systems!</div></div>
  <div class="two-col-row news-item"><div class="two-col-left">July 2026</div><div class="two-col-right">My co-first authored paper accepted at Nature Communications!</div></div>
  <div class="two-col-row news-item"><div class="two-col-left">July 2026</div><div class="two-col-right">Our Cognitive Radio Receiver paper accepted at Science Advances!</div></div>
</div>
<button id="news-toggle" onclick="var l=document.getElementById('news-list');l.classList.toggle('news-expanded');this.textContent=l.classList.contains('news-expanded')?'Show less':'Show older news';" style="display: none; margin-bottom: 1em; background: none; border: none; color: var(--global-link-color); cursor: pointer; padding: 0; font-size: 0.9em;">Show older news</button>
<script>
(function() {
  var list = document.getElementById('news-list');
  var items = list.querySelectorAll('.news-item');
  var btn = document.getElementById('news-toggle');
  if (items.length > 3) {
    for (var i = 3; i < items.length; i++) {
      items[i].classList.add('news-older');
    }
    btn.style.display = 'inline-block';
  }
})();
</script>
<style>
#news-list .news-older { display: none; }
#news-list.news-expanded .news-older { display: flex; }
</style>

<h2 id="publications" style="margin-bottom: 0.3em;">Publications</h2>
{% include base_path %}
<!-- post.priority = status_tier*10 + author_rank (1=published, 2=accepted, 3=under review; author_rank 1=first author, 1.5=co-first, 2=second author, ...); sorted ascending so published/first-author work surfaces first -->
{% assign sorted_pubs = site.publications | sort: 'priority' %}
<div class="two-col-list">{% for post in sorted_pubs %}
<div class="two-col-row"><div class="two-col-left">{{ post.venue }}</div><div class="two-col-right">{{ post.authors }}. {{ post.title }}{% if post.status == 'Accepted' %} (<span class="pub-status--accepted">Accepted</span>){% elsif post.status %} (<span class="pub-status--review">{{ post.status }}</span>){% endif %}.{% if post.paperurl %} <a href="{{ post.paperurl }}" class="pub-badge">Paper</a>{% endif %}{% if post.arxivurl %} <a href="{{ post.arxivurl }}" class="pub-badge">arXiv</a>{% endif %}</div></div>{% endfor %}
</div>
<p style="font-size: 0.85em; margin-top: 0.3em; color: var(--global-text-color-light);">* Co-first author</p>

<style>
#pres-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center; }
#pres-overlay.active { display: flex; }
#pres-overlay img { max-width: 90%; max-height: 90vh; object-fit: contain; border-radius: 4px; }
#pres-close { position: absolute; top: 1rem; right: 1.5rem; color: white; font-size: 2rem; cursor: pointer; background: none; border: none; line-height: 1; padding: 0; }
</style>

<div id="pres-overlay" onclick="document.getElementById('pres-overlay').classList.remove('active')">
  <button id="pres-close" onclick="document.getElementById('pres-overlay').classList.remove('active')">&#x2715;</button>
  <img id="pres-img" src="" alt="">
</div>

<script>
function showPres(src, alt) {
  var overlay = document.getElementById('pres-overlay');
  document.body.appendChild(overlay);
  document.getElementById('pres-img').src = src;
  document.getElementById('pres-img').alt = alt;
  overlay.classList.add('active');
}
</script>

<h2 id="presentations" style="margin-bottom: 0.3em;">Presentations</h2>
<div class="two-col-list">
  <div class="two-col-row"><div class="two-col-left">Talk<br><span style="font-weight: 400;">2026</span></div><div class="two-col-right"><a href="javascript:void(0)" onclick="showPres('/images/2026_UMass_Symposium_Lightning_Talk_0.PNG','2026 UMass Symposium Lightning Talk')" style="color:inherit; font-weight: 500;">Seeing Like the Eye, Thinking Like the Brain for Faster and Greener AI</a><br><span style="font-size: 0.85em; opacity: 0.65;">UMass Graduate Research Symposium</span></div></div>
  <div class="two-col-row"><div class="two-col-left">Poster<br><span style="font-weight: 400;">2025</span></div><div class="two-col-right"><a href="javascript:void(0)" onclick="showPres('/images/2025_Graduate_Research_Poster_Session.jpg','2025 ECE Poster Session')" style="color:inherit; font-weight: 500;">Hardware–Algorithm Co-Design for Hyperdimensional Computing Based on Memristive System-on-Chip</a><br><span style="font-size: 0.85em; opacity: 0.65;">ECE Graduate Research Poster Session</span></div></div>
  <div class="two-col-row"><div class="two-col-left">Talk<br><span style="font-weight: 400;">2025</span></div><div class="two-col-right"><a href="javascript:void(0)" onclick="showPres('/images/2025_Graduate_Researh_3Minute_Thesis_Talk.PNG','2025 3-Minute Thesis Talk')" style="color:inherit; font-weight: 500;">A New Era of AI: Efficient Software + Brain-Inspired Hardware</a><br><span style="font-size: 0.85em; opacity: 0.65;">ECE 3-Minute Thesis Competition</span></div></div>
  <div class="two-col-row"><div class="two-col-left">Poster<br><span style="font-weight: 400;">2024</span></div><div class="two-col-right"><a href="javascript:void(0)" onclick="showPres('/images/2024_NeurIPS_Poster.jpg','2024 NeurIPS Poster')" style="color:inherit; font-weight: 500;">Hardware–Algorithm Co-Design for Hyperdimensional Computing Based on Memristive System-on-Chip</a><br><span style="font-size: 0.85em; opacity: 0.65;">MLNCP Workshop @ NeurIPS, Vancouver</span></div></div>
</div>

<h2 id="service" style="margin-bottom: 0.3em;">Service</h2>
<div class="two-col-list">
  <div class="two-col-row"><div class="two-col-left">IEEE TED</div><div class="two-col-right">Reviewed 3 manuscripts.</div></div>
  <div class="two-col-row"><div class="two-col-left">IEEE ISCAS 2026</div><div class="two-col-right">Reviewed 2 manuscripts.</div></div>
</div>

<div class="links-mobile-only">
<h2 id="links" style="margin-bottom: 0.3em;">Links</h2>
<ul style="margin-top: 0; padding-left: 0; list-style: none; line-height: 1.6;">
  <li style="margin-bottom: 0.35em;"><a href="mailto:ajaberirad@umass.edu" style="color:inherit;"><i class="fas fa-fw fa-envelope icon-pad-right" aria-hidden="true"></i>Email</a></li>
  <li style="margin-bottom: 0.35em;"><a href="https://scholar.google.com/citations?user=KVbWQFYAAAAJ&hl=en" style="color:inherit;"><i class="ai ai-google-scholar-square ai-fw icon-pad-right" aria-hidden="true"></i>Google Scholar</a></li>
  <li style="margin-bottom: 0.35em;"><a href="https://orcid.org/0009-0002-8701-524X" style="color:inherit;"><i class="ai ai-orcid ai-fw icon-pad-right" aria-hidden="true"></i>ORCID</a></li>
  <li style="margin-bottom: 0.35em;"><a href="https://www.researchgate.net/profile/Alireza-Jaberi-Rad" style="color:inherit;"><i class="fab fa-fw fa-researchgate icon-pad-right" aria-hidden="true"></i>ResearchGate</a></li>
  <li style="margin-bottom: 0.35em;"><a href="https://github.com/alirezajaberirad" style="color:inherit;"><i class="fab fa-fw fa-github icon-pad-right" aria-hidden="true"></i>GitHub</a></li>
  <li style="margin-bottom: 0.35em;"><a href="https://www.linkedin.com/in/alirezajaberirad" style="color:inherit;"><i class="fab fa-fw fa-linkedin icon-pad-right" aria-hidden="true"></i>LinkedIn</a></li>
</ul>
</div>

<p style="margin-top: 1.5em;"><a href="/files/Alireza_Jaberi_Rad_CV.pdf" style="font-weight: 600;">Full CV →</a></p>
