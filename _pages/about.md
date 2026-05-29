---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am an M.Sc. student in Computer Engineering at the University of Massachusetts Amherst (expected Aug 2026), with a focus on AI hardware acceleration. I received a dual B.Sc. in Electrical Engineering and Computer Science from the University of Tehran.

<h2 style="margin-bottom: 0.3em;">Publications</h2>
{% include base_path %}
{% if site.publication_category %}{% for category in site.publication_category %}{% assign has_posts = false %}{% for post in site.publications %}{% if post.category == category[0] %}{% assign has_posts = true %}{% endif %}{% endfor %}{% if has_posts %}
<h3 style="margin-top: 0.6em; margin-bottom: 0.2em;">{{ category[1].title }}</h3>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4;">{% for post in site.publications reversed %}{% if post.category != category[0] %}{% continue %}{% endif %}
<li style="margin-bottom: 0.35em;">{{ post.authors }}. {% if post.paperurl %}<a href="{{ post.paperurl }}">{{ post.title }}</a>{% else %}{{ post.title }}{% endif %}. <em>{{ post.venue }}</em>{% if post.year %} ({{ post.year }}){% endif %}.{% if post.arxivurl %} <a href="{{ post.arxivurl }}" style="font-size: 0.85em;">[arXiv]</a>{% endif %}</li>{% endfor %}
</ul>{% endif %}{% endfor %}{% endif %}
<p style="font-size: 0.85em; margin-top: 0.3em; color: #666;">* Co-first author</p>

<h2 style="margin-bottom: 0.3em;">Service</h2>
<ul style="margin-top: 0; padding-left: 1.3em; line-height: 1.4;">
  <li style="margin-bottom: 0.35em;">Reviewed 3 manuscripts for <em>IEEE Transactions on Electron Devices</em>.</li>
  <li style="margin-bottom: 0.35em;">Reviewed 2 manuscripts for <em>IEEE International Symposium on Circuits and Systems (ISCAS) 2026</em>.</li>
</ul>
