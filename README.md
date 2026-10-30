# CosmoAtlas

CosmoAtlas is a browser based, interactive 3D atlas for exploring the cosmos, from nearby moons to distant galaxies.

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080) for the landing page or [http://localhost:8080/explore](http://localhost:8080/explore) for the interactive atlas.

## Features

- Navigate the Local Group, Milky Way, Solar System, exoplanetary systems, and supermassive black holes.
- Explore planetary surfaces with 360° panoramas from Mars and the Moon.
- Compare planetary sizes, from the Moon to the Sun and beyond.
- View orbital positions and celestial events based on JPL orbital elements.

## Project layout

- `index.html`, `explore.html`, `about.html`, `contact.html`, `faq.html`, `privacy.html`: site pages
- `server.mjs`: zero dependency local server with clean URL routing
- `assets/`: application bundles, styles, and workers
- `textures/atlas-v1/`: planetary surface, cloud, and ring textures with a manifest
- `panoramas/`: lunar and Martian 360° imagery
- `stellar/`: nearby star catalog data
- `landing/`: landing page artwork, icons, and feature images
- `fonts/`: bundled Neuton font
- `src/`: source for the black hole hero component
