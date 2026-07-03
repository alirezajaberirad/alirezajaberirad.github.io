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

<h2 id="news" style="margin-bottom: 0.3em;">News</h2>
<ul id="news-list" style="margin-top: 0; padding-left: 1.3em; line-height: 1.4;">
  <li style="margin-bottom: 0.35em;"><strong>2026:</strong> My co-first authored paper accepted at Nature Communications!</li>
</ul>
<button id="news-toggle" onclick="var l=document.getElementById('news-list');l.classList.toggle('news-expanded');this.textContent=l.classList.contains('news-expanded')?'Show less':'Show older news';" style="display: none; margin-bottom: 1em; background: none; border: none; color: #4078c0; cursor: pointer; padding: 0; font-size: 0.9em;">Show older news</button>
<script>
(function() {
  var list = document.getElementById('news-list');
  var items = list.querySelectorAll('li');
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
#news-list.news-expanded .news-older { display: list-item; }
</style>

<h2 id="publications" style="margin-bottom: 0.3em;">Publications</h2>
{% include base_path %}
{% if site.publication_category %}{% for category in site.publication_category %}{% assign has_posts = false %}{% for post in site.publications %}{% if post.category == category[0] %}{% assign has_posts = true %}{% endif %}{% endfor %}{% if has_posts %}
<h3 style="margin-top: 0.6em; margin-bottom: 0.2em;">{{ category[1].title }}</h3>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4; font-size: 1em;">{% for post in site.publications reversed %}{% if post.category != category[0] %}{% continue %}{% endif %}
<li style="margin-bottom: 0.35em;">{{ post.authors }}. {% if post.paperurl %}<a href="{{ post.paperurl }}">{{ post.title }}</a>{% else %}{{ post.title }}{% endif %}. <em>{{ post.venue }}</em>{% if post.year %} ({{ post.year }}){% endif %}.{% if post.arxivurl %} <a href="{{ post.arxivurl }}" style="font-size: 0.85em;">[arXiv]</a>{% endif %}</li>{% endfor %}
</ul>{% endif %}{% endfor %}{% endif %}
<p style="font-size: 0.85em; margin-top: 0.3em; color: #666;">* Co-first author</p>

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
  document.getElementById('pres-img').src = src;
  document.getElementById('pres-img').alt = alt;
  document.getElementById('pres-overlay').classList.add('active');
}
</script>

<h2 id="presentations" style="margin-bottom: 0.3em;">Presentations</h2>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4; font-size: 1em;">
  <li style="margin-bottom: 0.35em;">Talk, <em>UMass Graduate Research Symposium</em>, UMass Amherst, 2026. <a href="javascript:void(0)" onclick="showPres('/images/2026_UMass_Symposium_Lightning_Talk_0.PNG','2026 UMass Symposium Lightning Talk')" style="color:inherit;">&ldquo;Seeing Like the Eye, Thinking Like the Brain for Faster and Greener AI.&rdquo;</a></li>
  <li style="margin-bottom: 0.35em;">Poster, <em>ECE Graduate Research Poster Session</em>, UMass Amherst, 2025. <a href="javascript:void(0)" onclick="showPres('/images/2025_Graduate_Research_Poster_Session.jpg','2025 ECE Poster Session')" style="color:inherit;">&ldquo;Hardware–Algorithm Co-Design for Hyperdimensional Computing Based on Memristive System-on-Chip.&rdquo;</a></li>
  <li style="margin-bottom: 0.35em;">Talk, <em>ECE 3-Minute Thesis Competition</em>, UMass Amherst, 2025. <a href="javascript:void(0)" onclick="showPres('/images/2025_Graduate_Researh_3Minute_Thesis_Talk.PNG','2025 3-Minute Thesis Talk')" style="color:inherit;">&ldquo;A New Era of AI: Efficient Software + Brain-Inspired Hardware.&rdquo;</a></li>
  <li style="margin-bottom: 0.35em;">Poster, <em>MLNCP Workshop @ NeurIPS</em>, Vancouver, 2024. <a href="javascript:void(0)" onclick="showPres('/images/2024_NeurIPS_Poster.jpg','2024 NeurIPS Poster')" style="color:inherit;">&ldquo;Hardware–Algorithm Co-Design for Hyperdimensional Computing Based on Memristive System-on-Chip.&rdquo;</a></li>
</ul>

<h2 id="service" style="margin-bottom: 0.3em;">Service</h2>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4;">
  <li style="margin-bottom: 0.35em;">Reviewed 3 manuscripts for <em>IEEE Transactions on Electron Devices</em>.</li>
  <li style="margin-bottom: 0.35em;">Reviewed 2 manuscripts for <em>IEEE International Symposium on Circuits and Systems (ISCAS) 2026</em>.</li>
</ul>

<p style="margin-top: 1.5em;"><a href="/files/Alireza_Jaberi_Rad_CV.pdf" style="font-weight: 600;">Full CV →</a></p>
