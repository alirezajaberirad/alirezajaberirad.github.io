# Portfolio Codex V2 Improvements

This version was copied from `portfolio_claude` and refined as a separate working draft.

## What changed

- Added `Publications` to the main navigation and active-section tracking so the publication list is easier to reach.
- Changed publication rows to include status chips, making journals, conferences, and under-review work easier to scan.
- Improved visual affordances for galleries and multi-photo items with image-count badges and slide labels inside the modal.
- Cleaned up the theme toggle and back-to-top controls so they feel more intentional and less placeholder-like.
- Tightened mobile navigation with a hamburger menu, a fixed-width theme control, and a mobile-safe header layout.
- Removed unused routing dependency, reduced scroll-driven React renders, and added richer metadata plus `robots.txt` for cleaner indexing.
- Preserved the stronger content structure from the prior draft: education, research chapters, publications, trajectory, honors, extracurriculars, and contact.

## Verification

- `npm.cmd run lint`
- `npm.cmd run build`
- Visual checks in desktop and true 390px mobile viewport using the local production build.
