---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div style="display: flex; gap: 1.2em; margin-bottom: 1em; border-bottom: 1px solid #ddd; padding-bottom: 0.4em;">
  <a href="#publications" style="text-decoration: none; color: inherit; font-weight: 600; font-size: 0.95em;">Publications</a>
  <a href="#presentations" style="text-decoration: none; color: inherit; font-weight: 600; font-size: 0.95em;">Presentations</a>
  <a href="#service" style="text-decoration: none; color: inherit; font-weight: 600; font-size: 0.95em;">Service</a>
</div>

I am Alireza Jaberi Rad, a graduate researcher at the University of Massachusetts Amherst, where I develop emerging hardware solutions to accelerate artificial intelligence systems. By bridging deep insights into **machine learning algorithms** and their underlying mathematics, I design highly efficient **hardware architectures** capable of executing computationally intensive tasks.

In the Nanodevices and Integrated Systems Laboratory, my research spanned a broad range of projects, a selection of which is highlighted here. I began by designing a **retina-inspired computing device** that processes two-dimensional inputs simultaneously, performing **matrix multiplication and convolution** — the core operations of most machine learning algorithms — in a single, highly efficient step. I then designed a novel **hyperdimensional computing** algorithm optimized for emerging hardware platforms, validating it on a language classification task. This work deepened my understanding across **Natural Language Processing**, **image processing**, **DNA sequencing**, and **gene expression classification**, enabling me to identify which application domains are best suited to our computing paradigm. Through collaborative projects, I also moved into event-driven applications and **spiking neural networks**, implementing the HOTS (Hierarchy of Time Surfaces) algorithm on an in-memory computing system-on-a-chip developed by TetraMem.

Prior to graduate school, I earned a dual degree in Computer Science and Electrical Engineering at the University of Tehran, specializing in Artificial Intelligence and Digital Logic Design. The intersection of these disciplines shaped my passion for problems that demand deep understanding of both software and hardware. Inspired by a conversation with the late Professor Abbas Nowzari Dalini, I focused my undergraduate thesis on hardware accelerators for neural networks — work that won the **Best Undergraduate Project Award** at the University of Tehran.

I graduated in the top 10% of both my CS and EE cohorts and received **Exceptional Talent** M.Sc. admission offers from the University of Tehran and Sharif University of Technology. Driven by a desire to maximize the impact of my research, I chose to pursue graduate studies in the United States to engage with the world's leading research institutions and technology companies.

<h2 id="publications" style="margin-bottom: 0.3em;">Publications</h2>
{% include base_path %}
{% if site.publication_category %}{% for category in site.publication_category %}{% assign has_posts = false %}{% for post in site.publications %}{% if post.category == category[0] %}{% assign has_posts = true %}{% endif %}{% endfor %}{% if has_posts %}
<h3 style="margin-top: 0.6em; margin-bottom: 0.2em;">{{ category[1].title }}</h3>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4; font-size: 1em;">{% for post in site.publications reversed %}{% if post.category != category[0] %}{% continue %}{% endif %}
<li style="margin-bottom: 0.35em;">{{ post.authors }}. {% if post.paperurl %}<a href="{{ post.paperurl }}">{{ post.title }}</a>{% else %}{{ post.title }}{% endif %}. <em>{{ post.venue }}</em>{% if post.year %} ({{ post.year }}){% endif %}.{% if post.arxivurl %} <a href="{{ post.arxivurl }}" style="font-size: 0.85em;">[arXiv]</a>{% endif %}</li>{% endfor %}
</ul>{% endif %}{% endfor %}{% endif %}
<p style="font-size: 0.85em; margin-top: 0.3em; color: #666;">* Co-first author</p>

<h2 id="presentations" style="margin-bottom: 0.3em;">Presentations</h2>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4; font-size: 1em;">
  <li style="margin-bottom: 0.35em;">Talk, <em>UMass Graduate Research Symposium</em>, UMass Amherst, 2026. &ldquo;Seeing Like the Eye, Thinking Like the Brain for Faster and Greener AI.&rdquo;</li>
  <li style="margin-bottom: 0.35em;">Poster, <em>ECE Graduate Research Poster Session</em>, UMass Amherst, 2025. &ldquo;Hardware–Algorithm Co-Design for Hyperdimensional Computing Based on Memristive System-on-Chip.&rdquo;</li>
  <li style="margin-bottom: 0.35em;">Talk, <em>ECE 3-Minute Thesis Competition</em>, UMass Amherst, 2025. &ldquo;A New Era of AI: Efficient Software + Brain-Inspired Hardware.&rdquo;</li>
  <li style="margin-bottom: 0.35em;">Poster, <em>MLNCP Workshop @ NeurIPS</em>, Vancouver, 2024. &ldquo;Hardware–Algorithm Co-Design for Hyperdimensional Computing Based on Memristive System-on-Chip.&rdquo;</li>
</ul>

<h2 id="service" style="margin-bottom: 0.3em;">Service</h2>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4;">
  <li style="margin-bottom: 0.35em;">Reviewed 3 manuscripts for <em>IEEE Transactions on Electron Devices</em>.</li>
  <li style="margin-bottom: 0.35em;">Reviewed 2 manuscripts for <em>IEEE International Symposium on Circuits and Systems (ISCAS) 2026</em>.</li>
</ul>
