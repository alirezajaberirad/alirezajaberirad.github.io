import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import heroImg from './assets/photos/hero.png';
import labImg from './assets/photos/lab.jpg';
import whiteboardImg from './assets/photos/whiteboard.jpg';
import chipFabImg from './assets/photos/chip_fab.jpg';
import symposiumImg from './assets/photos/symposium.png';
import threeMinuteThesisImg from './assets/photos/3m_thesis.png';
import awardImg from './assets/photos/award.jpg';
import posterSessionImg from './assets/photos/poster_session.jpg';
import navonScholarshipImg from './assets/photos/navon_scholarship_award.jpeg';
import posterAwardCertificateImg from './assets/photos/poster_award_certificate.jpg';
import tehranBestProjectImg from './assets/photos/tehran_best_undergrad_project_award.jpg';
import rank37Img from './assets/photos/rank_37_group.jpg';
import tehranGraduationImg from './assets/photos/tehran_ee_graduation.png';
import tehranCsGraduationImg from './assets/photos/tehran_cs_graduation.png';
import firstTalkImg from './assets/photos/first_talk.jpg';
import karateImg from './assets/photos/karate.png';
import tableTennisImg from './assets/photos/table_tennis_2.jpg';
import yosemiteImg from './assets/photos/yosemite.jpg';
import acadiaImg from './assets/photos/acadia.jpg';
import cavingImg from './assets/photos/caving.jpg';
import sprayPaintingImg from './assets/photos/spray_painting.png';
import hydrodippingImg from './assets/photos/hydrodipping.png';
import catSketchImg from './assets/photos/cat_sketch.png';

const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Journey', href: '#journey' },
  { label: 'Beyond', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
];

const metrics = [
  { value: '37 / 150K', label: 'national undergrad entrance exam rank' },
  { value: '2x', label: 'math and computer olympiad semi-finalist' },
  { value: 'Top 10%', label: 'in both EE and CS graduating classes' },
  { value: '5+', label: 'papers in NeurIPS, Nature and Science venues' },
  { value: '3x', label: 'Iran national karate champion' },
];

const VIDEO_PLAYBACK_RATE = 0.7;
const siteAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
const cvHref = siteAsset('Alireza_Jaberi_Rad_CV_May_2026.pdf');
const neuripsPosterHref = siteAsset('2024_NeurIPS_Poster.jpg');
const trainingVideoHref = siteAsset('media/training-rhythm.mov');

const setVideoPlaybackRate = (event) => {
  event.currentTarget.playbackRate = VIDEO_PLAYBACK_RATE;
};

const education = [
  {
    date: '2017 / Ahwaz, Iran',
    title: 'NODET high school',
    text: 'Graduated from the National Organization for Development of Exceptional Talents with a math and physics focus.',
    image: rank37Img,
  },
  {
    date: '2017 - 2022 / University of Tehran',
    title: 'B.Sc. Electrical Engineering',
    text: 'Started undergraduate study in Electrical Engineering with a focus on digital logic design, graduating within the top 10% of the class.',
    image: tehranGraduationImg,
  },
  {
    date: '2018 - 2022 / University of Tehran',
    title: 'B.Sc. Computer Science',
    text: 'Based on my national entrance rank and top-10% first-year standing, I was awarded a tuition-free second major; chose Computer Science with an artificial-intelligence focus and graduated with a second degree in 2022.',
    image: tehranCsGraduationImg,
  },
  {
    date: '2022 - 2023 / Sharif University of Technology',
    title: 'M.S. path in Computer Engineering',
    text: 'Started a master\'s program at Sharif, then made the deliberate pivot to leave it and join the Ph.D. program at UMass Amherst.',
    mark: 'SUT -> UMass',
  },
  {
    date: '2023 - Present / UMass Amherst',
    title: 'Ph.D. in edge-intelligence hardware',
    text: 'Researching memristive systems, analog in-memory computing, and hardware-algorithm co-design for deployable AI.',
    image: firstTalkImg,
  },
];

const researchChapters = [
  {
    eyebrow: 'Chapter 01 / Verification',
    title: 'Analog twins for digital circuits',
    summary:
      'Digital logic reimagined as neural-network surrogates that can be mapped onto analog memristive accelerators.',
    image: whiteboardImg,
    previewClass: 'preview-engine',
    layout: 'compact-preview',
    theme: 'cyan',
    details: [
      'Converted digital logic into neural-network surrogates for analog inference.',
      'Designed an analog activation function and verified end-to-end behavior in SPICE.',
      'Built a Python simulator for cycle-to-cycle and device-to-device memristor variation.',
      'Engineered a verification flow for analog-twin functionality on a Tetramem SoC.',
    ],
  },
  {
    eyebrow: 'Chapter 02 / NeurIPS 2024',
    title: 'Hyperdimensional computing on memristive hardware',
    summary:
      'A hardware-algorithm co-design flow that turns in-memory stochasticity into a computational advantage.',
    image: labImg,
    theme: 'red',
    link: neuripsPosterHref,
    linkLabel: 'Open NeurIPS poster',
    details: [
      'Designed an HDC algorithm that uses memristive stochasticity as signal rather than noise.',
      'Implemented and benchmarked the system on a Tetramem memristive SoC in Python and PyTorch.',
      'Reached 99.35% software accuracy and 95.24% hardware accuracy on language classification.',
      'Reduced hardware resource use by 90% through tight algorithm-SoC co-design.',
    ],
  },
  {
    eyebrow: 'Chapter 03 / 3D Circuits',
    title: 'Stackable memristive arrays for one-shot matrix operations',
    summary:
      'Retina-inspired 3D crossbar arrays that ingest images directly and compute without serialization.',
    image: chipFabImg,
    theme: 'amber',
    details: [
      'Architected a stackable 3D memristive crossbar array for direct 2D image ingestion.',
      'Demonstrated one-shot matrix multiplication and matrix-kernel convolution in a single analog read.',
      'Verified the design on a CMOS prototype with 92.96% precision on edge detection.',
      'Fabricated a nanoscale 3D array and achieved 89.31% edge-detection precision in silicon.',
      'Delivered 365x lower energy and sharply lower latency than an equivalent CMOS digital flow.',
    ],
  },
  {
    eyebrow: 'Chapter 04 / Communication',
    title: 'Making emerging hardware legible',
    summary:
      'Talks, posters, and lab work that translate device-level research into systems-level arguments.',
    image: symposiumImg,
    gallery: [
      { src: symposiumImg, label: 'UMass Symposium presentation' },
      { src: threeMinuteThesisImg, label: 'Three-minute thesis presentation' },
      { src: firstTalkImg, label: 'First UMass research talk' },
      { src: posterSessionImg, label: 'Graduate research poster session' },
    ],
    previewClass: 'preview-symposium',
    layout: 'compact-preview',
    theme: 'green',
    details: [
      'Presented hardware-algorithm co-design work at the 2026 UMass Symposium.',
      'Condensed years of neuromorphic engineering into a 3-minute thesis narrative.',
      'Built visual explanations for interdisciplinary audiences across devices, circuits, and AI.',
    ],
  },
];

const publications = [
  {
    title: 'Single-Step Analogue In-Memory Matrix Computation in Three-Dimensional Circuits.',
    meta: 'A. Jaberi Rad, et al. / Advanced Intelligent Systems',
    status: 'Journal',
    href: 'https://doi.org/10.1002/aisy.70500',
  },
  {
    title: 'Hyperdimensional In-Memory Computing with Analogue Memristive Crossbar Arrays.',
    meta: 'Y. Huang*, A. Jaberi Rad*, et al. / Nature Communications',
    status: 'Journal',
    href: 'https://doi.org/10.1038/s41467-026-76067-5',
  },
  {
    title: 'Hardware-Algorithm Co-Design for Hyperdimensional Computing Based on Memristive System-on-Chip.',
    meta: 'Y. Huang, A. Jaberi Rad, et al. / MLNCP Workshop @ NeurIPS 2024',
    status: 'Conference',
    href: 'https://openreview.net/pdf?id=rRIZblLJHb',
  },
  {
    title: 'Event-based Neuromorphic Sensing System with Flexible Haptic Sensors and a Memristive System on a Chip.',
    meta: 'W. Zhao, Y. Huang, A. Tewari, A. Jaberi Rad, et al. / Nature Sensors, 2026',
    status: 'Journal',
    href: 'https://www.nature.com/articles/s44460-025-00013-z',
  },
  {
    title: 'Cognitive Radio Receiver with Analogue In-Memory Computing.',
    meta: 'C. He, Y. Huang, A. Korkmaz, A. Jaberi Rad, et al. / Science Advances',
    status: 'Accepted',
  },
  {
    title: 'Tunable Diffusive Memristor Arrays for Neuromorphic Temporal Computing.',
    meta: 'Y. Ling, Z. Xiong, Y. Huang, A. Jaberi Rad, et al. / Nature Materials, under review',
    status: 'Under review',
  },
];

const timeline = [
  {
    date: 'Jul 2024 / UMass Amherst',
    title: 'Summer Engineering Institute supervisor',
    text: 'Led K-12 students building a UI for a hyperdimensional-computing software simulation, while teaching neural-network fundamentals and Python coding practices.',
  },
  {
    date: 'Jan 2021 - Jun 2021 / University of Tehran',
    title: 'FPGA-based audio processing accelerator',
    text: 'Built a real-time signal-processing and denoising accelerator on FPGA hardware, achieving 100x speedup over a software baseline.',
  },
  {
    date: 'Sep 2019 - Jun 2020 / Caro Lucas Innovation Center',
    title: 'Co-founder, Prova start-up',
    text: 'Co-founded Prova, a virtual try-on concept for fashion ecommerce. Earned a free start-up validation course, worked across CLIC teams, and learned the hard parts of validating an idea, leading a team, and speaking with investors before the venture ended.',
  },
];

const honors = [
  {
    title: 'David H. Navon Scholarship Award',
    label: '2025 / UMass Amherst',
    image: navonScholarshipImg,
    gallery: [
      { src: navonScholarshipImg, label: 'Scholarship award certificate' },
      { src: awardImg, label: 'Award ceremony' },
    ],
    details: ['Recognized for academic record and research in solid-state and microelectronics.'],
  },
  {
    title: 'Graduate Research Poster Award',
    label: '2nd place / 2025',
    image: posterAwardCertificateImg,
    gallery: [
      { src: posterAwardCertificateImg, label: 'Second-place certificate' },
      { src: posterSessionImg, label: 'Poster session presentation' },
    ],
    details: ['Won second place at the 2025 ECE Graduate Research Poster Session at UMass Amherst.'],
  },
  {
    title: 'Best Undergraduate Project',
    label: 'University of Tehran',
    image: tehranBestProjectImg,
    details: ['Recognized by the University of Tehran for undergraduate project work.'],
  },
];

const beyond = [
  {
    title: 'Karate',
    label: '3x national champion',
    image: karateImg,
    details: ['Undefeated champion in Khuzestan province from 2005 to 2014.'],
  },
  {
    title: 'Table tennis',
    label: 'UMass team',
    image: tableTennisImg,
    details: ['Competed with the UMass Table Tennis team at the divisional tournament at Boston College.'],
  },
  {
    title: 'Training',
    label: 'Team practice',
    video: trainingVideoHref,
    details: ['A focused training session with the team before tournament play.'],
  },
  {
    title: 'Yosemite',
    label: 'Long trails',
    image: yosemiteImg,
    details: ['Hiking through the granite trails and high views of Yosemite National Park.'],
  },
  {
    title: 'Acadia',
    label: 'Maine coastline',
    image: acadiaImg,
    details: ['Exploring the rugged coastal terrain of Acadia National Park.'],
  },
  {
    title: 'Caving',
    label: 'Underground systems',
    image: cavingImg,
    details: ['A different kind of field work: slow, careful, physical, and collaborative.'],
  },
  {
    title: 'Spray painting',
    label: 'Artwork',
    image: sprayPaintingImg,
    details: ['A handmade piece built through layered texture, masking, and controlled overspray.'],
  },
  {
    title: 'Hydrodipping',
    label: 'Artwork',
    image: hydrodippingImg,
    details: ['A material experiment in color, surface tension, and pattern transfer.'],
  },
  {
    title: 'Pencil sketch',
    label: 'Artwork',
    image: catSketchImg,
    details: ['A pencil sketch built through line work, shading, and careful observation.'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const staggered = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function DetailModal({ item, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const rawSlides =
    item && !item.video ? item.gallery || (item.image ? [{ src: item.image, label: item.title }] : []) : [];
  const slides = rawSlides.map((slide) => (typeof slide === 'string' ? { src: slide, label: item.title } : slide));
  const activeSlide = slides[slideIndex] || slides[0];
  const hasSlideshow = slides.length > 1;

  const showPreviousSlide = () => {
    setSlideIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setSlideIndex((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    if (!item) return undefined;
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, [item]);

  useEffect(() => {
    if (!item) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (!hasSlideshow) return;
      if (event.key === 'ArrowLeft') setSlideIndex((current) => (current - 1 + slides.length) % slides.length);
      if (event.key === 'ArrowRight') setSlideIndex((current) => (current + 1) % slides.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasSlideshow, item, onClose, slides.length]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.article
            className="modal-panel"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.28 }}
          >
            <button className="modal-close" onClick={onClose} type="button">
              Close
            </button>
            <div className="modal-media">
              {item.video ? (
                <video
                  src={item.video}
                  controls
                  autoPlay
                  muted
                  preload="metadata"
                  playsInline
                  onLoadedMetadata={setVideoPlaybackRate}
                  onPlay={setVideoPlaybackRate}
                />
              ) : (
                <div className="modal-gallery">
                  <img className="modal-slide" src={activeSlide.src} alt="" decoding="async" />
                  {activeSlide.label && <span className="modal-slide-label">{activeSlide.label}</span>}
                  {hasSlideshow && (
                    <>
                      <button className="modal-nav modal-prev" type="button" onClick={showPreviousSlide}>
                        Prev
                      </button>
                      <button className="modal-nav modal-next" type="button" onClick={showNextSlide}>
                        Next
                      </button>
                      <span className="modal-count">
                        {slideIndex + 1} / {slides.length}
                      </span>
                      <div className="modal-thumbs" aria-label="Gallery thumbnails">
                        {slides.map((slide, index) => (
                          <button
                            className={`modal-thumb ${index === slideIndex ? 'is-active' : ''}`}
                            key={`${slide.src}-${slide.label || index}`}
                            type="button"
                            onClick={() => setSlideIndex(index)}
                            aria-label={`Show image ${index + 1}`}
                          >
                            <img src={slide.src} alt="" loading="lazy" decoding="async" />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="modal-copy">
              <p className="eyebrow">{item.eyebrow || item.label}</p>
              <h2 id="modal-title">{item.title}</h2>
              <ul>
                {item.details?.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {item.link && (
                <a className="inline-link" href={item.link} target="_blank" rel="noreferrer">
                  {item.linkLabel}
                </a>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('mission');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollProgressRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      return;
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current?.style.setProperty('--progress', `${total > 0 ? (scrolled / total) * 100 : 0}%`);
      setShowBackToTop((visible) => {
        const nextVisible = scrolled > 500;
        return visible === nextVisible ? visible : nextVisible;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const sectionIds = ['mission', 'education', 'research', 'publications', 'journey', 'beyond', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '');
      if (!id) return;

      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="site-shell">
      <div ref={scrollProgressRef} className="scroll-progress" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#mission" aria-label="Alireza Jaberi Rad home">
          AJR
        </a>
        <button
          className={`hamburger ${mobileMenuOpen ? 'is-open' : ''}`}
          type="button"
          onClick={() => setMobileMenuOpen((p) => !p)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.replace('#', '') ? 'is-active' : undefined}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setIsDark((p) => !p)}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? 'Light' : 'Dark'}
        </button>
        <a className="nav-cv" href={cvHref} target="_blank" rel="noreferrer">
          CV
        </a>
      </header>

      <main>
        <section className="hero-section" id="mission">
          <div className="hero-image" aria-hidden="true">
            <img src={heroImg} alt="" fetchPriority="high" decoding="async" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">Ph.D. Candidate @ UMass Amherst</p>
            <h1>Alireza Jaberi Rad</h1>
            <p className="hero-copy">
              I build edge-intelligence systems where memory devices, analog circuits, and machine-learning algorithms
              are designed as one stack.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#research">
                Explore research
              </a>
              <a className="secondary-action" href={cvHref} target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>
          </motion.div>
          <div className="hero-index" aria-label="Current research focus">
            <span>Focus</span>
            <strong>hardware-software co-design for memristive AI</strong>
          </div>
        </section>

        <section className="metric-band" aria-label="Research highlights">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="intro-section">
          <motion.div
            className="intro-copy"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="eyebrow">Mission</p>
            <h2>Research that treats hardware limits as design material.</h2>
          </motion.div>
          <motion.p
            className="intro-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            My work sits between devices, circuits, algorithms, and system validation. The goal is practical edge
            intelligence: compute close to the data, use the physics of emerging memory, and make the resulting systems
            measurable enough to trust.
          </motion.p>
        </section>

        <section className="education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Education that sharpened the path toward hardware intelligence.</h2>
          </div>
          <motion.div
            className="education-grid"
            variants={staggered}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {education.map((item) => (
              <motion.article className="education-card" key={item.title} variants={fadeUp}>
                <div
                  className={`education-media ${item.image ? 'has-image' : 'has-mark'}`}
                  style={item.image ? { '--education-image': `url(${item.image})` } : undefined}
                >
                  {item.image ? <img src={item.image} alt="" loading="lazy" decoding="async" /> : <strong>{item.mark}</strong>}
                </div>
                <div className="education-copy">
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="research-section" id="research">
          <div className="section-heading">
            <p className="eyebrow">Research chapters</p>
            <h2>From device physics to deployable intelligence.</h2>
          </div>
          <div className="chapter-stack">
            {researchChapters.map((chapter, index) => (
              <motion.article
                className={`chapter chapter-${chapter.theme} ${chapter.layout || ''}`}
                key={chapter.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <button
                  className={`chapter-media ${chapter.previewClass || ''}`}
                  type="button"
                  style={{ '--media-image': `url(${chapter.image})` }}
                  onClick={() => setActiveItem(chapter)}
                >
                  <img src={chapter.image} alt="" loading="lazy" decoding="async" />
                  {chapter.gallery && <span className="media-badge">{chapter.gallery.length} photos</span>}
                </button>
                <div className="chapter-copy">
                  <span className="chapter-number">{String(index + 1).padStart(2, '0')}</span>
                  <p className="eyebrow">{chapter.eyebrow}</p>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.summary}</p>
                  <button className="text-action" type="button" onClick={() => setActiveItem(chapter)}>
                    Open notes
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="publication-section" id="publications">
          <div className="section-heading compact">
            <p className="eyebrow">Publications</p>
            <h2>Papers and manuscripts across in-memory intelligence.</h2>
          </div>
          <motion.div
            className="publication-list"
            variants={staggered}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {publications.map((publication) => (
              <motion.article className="publication-item" key={publication.title} variants={fadeUp}>
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.meta}</p>
                </div>
                <span className="publication-status">{publication.status}</span>
                {publication.href && (
                  <a href={publication.href} target="_blank" rel="noreferrer">
                    View paper
                  </a>
                )}
              </motion.article>
            ))}
          </motion.div>
          <a
            className="scholar-link"
            href="https://scholar.google.com/citations?user=KVbWQFYAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar profile
          </a>
        </section>

        <section className="timeline-section" id="journey">
          <div className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2>Building systems, teaching students, earning recognition, and learning from startup work.</h2>
          </div>
          <div className="timeline-grid">
            <motion.div
              className="timeline-list"
              variants={staggered}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {timeline.map((item) => (
                <motion.article className="timeline-item" key={item.title} variants={fadeUp}>
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.image && (
                    <button
                      className="text-action subtle"
                      type="button"
                      onClick={() =>
                        setActiveItem({
                          ...item,
                          label: item.date,
                          details: [item.text],
                        })
                      }
                    >
                      Open memory
                    </button>
                  )}
                </motion.article>
              ))}
            </motion.div>
            <motion.div
              className="honor-grid"
              variants={staggered}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {honors.map((honor) => (
                <motion.button
                  className="honor-card"
                  key={honor.title}
                  type="button"
                  onClick={() => setActiveItem(honor)}
                  variants={fadeUp}
                >
                  <img src={honor.image} alt="" loading="lazy" decoding="async" />
                  <strong>{honor.title}</strong>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="beyond-section" id="beyond">
          <div className="section-heading compact">
            <p className="eyebrow">Beyond the lab</p>
            <h2>Competition, mountains, art, and the habits that keep the work grounded.</h2>
          </div>
          <motion.div
            className="beyond-gallery"
            variants={staggered}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {beyond.map((item) => (
              <motion.button
                className={`gallery-tile ${item.video ? 'has-video' : ''}`}
                key={item.title}
                type="button"
                onClick={() => setActiveItem(item)}
                variants={fadeUp}
              >
                {item.video ? (
                  <video
                    className="tile-media"
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    preload="metadata"
                    playsInline
                    onLoadedMetadata={setVideoPlaybackRate}
                    onPlay={setVideoPlaybackRate}
                  />
                ) : (
                  <img className="tile-media" src={item.image} alt="" loading="lazy" decoding="async" />
                )}
                <div className="tile-caption">
                  <strong>{item.title}</strong>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build something precise, useful, and a little unreasonable.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:ajaberirad@umass.edu">Email</a>
          <a href="https://linkedin.com/in/alirezajaberirad" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/alirezajaberirad" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://scholar.google.com/citations?user=KVbWQFYAAAAJ&hl=en" target="_blank" rel="noreferrer">
            Scholar
          </a>
        </div>
      </footer>

      <DetailModal key={activeItem?.title || 'empty-modal'} item={activeItem} onClose={() => setActiveItem(null)} />
      <button
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        Top
      </button>
    </div>
  );
}

export default App;
