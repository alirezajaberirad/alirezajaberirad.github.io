# Portfolio Codex Redesign Summary

This file summarizes the main improvements made together in `portfolio_codex`. The original draft was left untouched; this version became a separate, more personal, more polished portfolio copy.

## Core Direction

- Shifted the website from a project-centered presentation to a person-centered portfolio.
- Made Alireza the center of the story: achievements, education, research judgment, teaching, presentation, athletics, art, and risk-taking all appear as parts of one narrative.
- Preserved the strong editorial feel of the draft, but made the layout, media, section rhythm, and content more intentional.
- Kept the design restrained and professional rather than turning it into a generic landing page.

## Major Content Improvements

- Replaced the intro metric tiles that highlighted only project results with personal achievements:
  - Rank 37 among roughly 150,000 in the national undergraduate entrance exam.
  - Two-time semifinalist in national math and computer olympiads.
  - Top 10 percent in both Electrical Engineering and Computer Science graduating classes.
  - More than 5 papers in venues connected to NeurIPS, Nature, and Science series work.
  - Three-time national karate champion of Iran.
- Changed "Selected Publications" to "Publications" and listed all provided papers/manuscripts rather than only a subset.
- Added a full Education section:
  - NODET high school with math and physics focus.
  - B.Sc. Electrical Engineering, focused on digital logic design.
  - B.Sc. Computer Science as an independent second undergraduate degree, awarded tuition-free after strong first-year performance and national ranking.
  - Sharif University M.S. path and the later move to UMass.
  - Current Ph.D. work at UMass Amherst in edge-intelligence hardware.
- Replaced the redundant "direct leap into the Ph.D." trajectory item with the Prova startup story.
- Updated the trajectory section title to better match the new content:
  - "Building systems, teaching students, and testing ideas in the real world."
- Corrected the Navon item from "Fellowship" to "David H. Navon Scholarship Award."

## Visual And Layout Improvements

- Rebuilt the site in `portfolio_codex` as an independent redesign rather than modifying the original draft.
- Improved section widths so major content aligns with the visual rail between the AJR block and CV block.
- Fixed the Publications section width/centering on wide screens.
- Adjusted section title blocks so they no longer look like awkward square text blocks with too much vertical blank space.
- Increased the cyan section labels, such as "MISSION" and "TRAJECTORY", by one step for better readability.
- Aligned the intro paragraph top with the main "Research that treats hardware limits..." heading.
- Tightened excessive spacing between Education and Research while keeping the page breathable.
- Set the current light-section background rhythm as:
  - Education: white
  - Research chapters: paper
  - Publications: white
  - Trajectory: paper
- Improved education card image handling:
  - Wider media areas.
  - Less aggressive cropping.
  - Soft image backdrops for contained photos.
  - Better UMass photo selection.
- Tuned landing/research image crops:
  - Engine/chip image centered more properly.
  - Symposium/presentation photo centered around Alireza.
- Fixed Beyond the Lab label placement so "Maine coastline" no longer blocks the face.

## Media And Interaction Improvements

- Used the real training video from the extracurricular/sports media and set it to play at `0.7x` speed.
- Added the cat pencil sketch to the Beyond the Lab section.
- Switched the honor cards to certificate-oriented imagery:
  - Navon Scholarship certificate.
  - Graduate Research Poster Session second-place certificate.
  - University of Tehran Best Undergraduate Project certificate.
- Improved honor card framing so certificates work better inside the existing card size.
- Added modal slideshow support:
  - Items can now open multiple images instead of just one.
  - Added previous/next controls, thumbnails, slide count, and arrow-key navigation.
  - Wired slideshow behavior into presentation and award-related items.
- Made research chapter images clickable, not only their "Open notes" buttons.

## Why This Draft Is Stronger Than The Previous One

- The previous draft made the projects sound impressive, but did not always make the person behind them feel central. This version makes the achievements clearly belong to Alireza.
- The narrative is now broader and more human: research, education, teaching, startup experience, public presentation, athletics, travel, and art all contribute to the same profile.
- The education story is now specific and distinctive, especially the independent EE/CS degrees and tuition-free second major.
- The honors section now uses the actual certificates and corrected award language, making it feel more credible and less like decorative filler.
- The layout now has stronger alignment, cleaner section rhythm, better responsive behavior, and fewer accidental blank spaces.
- The media choices are more personal and inspectable: real presentation photos, real certificates, real training footage, and real extracurricular/artwork images.
- The modal slideshow makes the site more extensible: future presentation photos can be added without redesigning the UI.

## Verification Done During The Process

- Rebuilt the site repeatedly with `npm.cmd run build`.
- Ran lint checks with `npm.cmd run lint`.
- Ran the local demo at `http://127.0.0.1:5174/`.
- Used browser screenshots during visual passes for desktop and mobile layouts, especially around Education and Trajectory.

## Useful Follow-Up Ideas

- Add more presentation photos to the existing slideshow galleries.
- Add stronger Prova startup details if available:
  - Team size.
  - Prototype/demo status.
  - Any user validation, investor conversations, or concrete product lessons.
- Consider optimizing the largest image assets before deployment to improve load time.
- Add more detailed accessibility labels for slideshow controls if the site is prepared for public launch.
