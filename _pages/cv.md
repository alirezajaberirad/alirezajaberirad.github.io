---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

**University of Massachusetts Amherst** — Sep 2023 – Aug 2026 (Expected)  
M.Sc. in Computer Engineering | Focus: AI Hardware Acceleration | GPA: 3.68/4.0  
Amherst, MA

**University of Tehran** — Sep 2017 – Jun 2022  
Dual B.Sc. in Electrical Engineering and Computer Science | Tehran, Iran  
CS focus: AI, GPA: 3.71/4.0, Ranked 3/40 | EE focus: Digital Logic Design, GPA: 3.70/4.0, Ranked 11/135

*Selected Coursework:* Neuromorphic Engineering, VLSI Design, FPGA-Based Embedded System Design, Machine Learning, Artificial Intelligence, Algorithms

---

## Research Experience

**Analog Twin for Digital Circuits** — Dec 2024 – Present  
*Biologically Inspired Neural and Dynamical Systems Lab, UMass Amherst*
- Implemented a neural-network based approach for leveraging analog memristive accelerator for digital logic.
- Designed an analog activation function and verified end-to-end behavior in SPICE simulation.
- Built a Python behavioral simulator for the analog twin with physical memristor properties.
- Built a 28 nm CMOS framework benchmarking analog twins against digital counterparts on speed, area, and energy.
- Engineered a verification flow for analog-twin functionality on a Tetramem memristive system-on-chip (SoC).

**Hyperdimensional Computing – Hardware/Algorithm Co-Design** — May 2024 – May 2025  
*Published at NeurIPS 2024 | Journal extension under review at Nature Communications*
- Designed an HDC algorithm leveraging memristors' physical stochasticity as a computational feature.
- Implemented the algorithm on a Tetramem MX100 SoC using PyTorch and the Tetramem SDK in Python.
- Achieved highest-ever accuracy on a 21-European-language classification task: 99.35% software / 95.24% hardware.
- Reduced hardware resource use by 90% via hardware–algorithm co-design and 10k-to-1k hypervector-size reduction.

**3D Memristive Arrays for Single-Step Matrix Operations** — Sep 2023 – Jan 2026  
*Journal paper under review at Advanced Intelligent Systems*
- Architected a stackable, retina-inspired 3D memristive array processing 2D images instantly without serialization.
- Demonstrated one-shot (O(1)) matrix multiplication and matrix–kernel convolution in a single analog read.
- Verified the design on a large-scale CMOS prototype, achieving 92.96% precision on an edge-detection benchmark.
- Verified on a nanoscale 3D memristive array, achieving 89.31% precision on an edge-detection task.
- Delivered 365× lower energy and orders-of-magnitude lower latency than the CMOS digital baseline.

---

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Technical Skills

**Languages:** Python, C, C++, Verilog, MATLAB, SystemC  
**ML / AI:** PyTorch, NumPy, Pandas, Matplotlib, neural networks, hyperdimensional computing  
**FPGA & Embedded:** Intel/Altera FPGAs, Xilinx FPGAs, Quartus, Qsys, microcontrollers  
**IC & Hardware Design:** Cadence Virtuoso, Cadence Innovus, HSPICE, LTspice, Altium Designer  
**Tools & Workflow:** Git, Linux, Tetramem SDK

---

## Teaching & Service

<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Honors & Awards

- **Selected as one of 10 lightning-talk presenters** at the UMass Graduate Research Symposium. (2026)
- **David H. Navon Scholarship Award** for outstanding research contribution in microelectronics. (2025)
- **Second place**, ECE Graduate Research Poster Session, UMass Amherst. (2025)
- **Best Undergraduate Project Award** for designing an ASIC neural-network accelerator, University of Tehran. (2022)
- **Exceptional-talent M.Sc. admission award** for Sharif University of Technology and University of Tehran. (2022)
- **FOE Award** for ranking in the top 10% of both EE and CS cohorts, University of Tehran. (2019)
- Awarded a **tuition-free second major** (103/32,000 University of Tehran students qualified). (2018)
- **Ranked 37/150,000** in the Iranian National University Entrance Examination. (2017)
- **Semi-finalist**, Iranian National Mathematics Olympiad and National Computer Olympiad. (2015–2016)
