# CosmoAtlas

## Explore the Universe, One World at a Time

CosmoAtlas is an interactive 3D atlas that lets people explore the
universe through a browser. It brings together planets, moons, stars,
galaxies, and black holes in one place, allowing users to move from our
nearby cosmic neighbourhood to objects far beyond the Solar System.

The main idea is simple: make the universe easier and more exciting to
explore. Instead of reading about each object separately, users can
enter an interactive space, look around, select objects, compare their
sizes, and discover information about them.

## What the Project Offers

### Explore different parts of the universe

Users can explore several areas of space:

-   **Local Group:** Discover nearby galaxies and how they are
    positioned in relation to one another.
-   **Milky Way:** Explore our galaxy and understand where our Solar
    System is located.
-   **Solar System:** Visit the Sun, planets, dwarf planets, and
    selected moons.
-   **Exoplanetary Systems:** Discover planets that orbit stars beyond
    our Solar System.
-   **Supermassive Black Holes:** Explore visual representations of some
    of the most fascinating objects in the universe.

### Discover planets and moons

Users can select a planet or moon to see it up close and learn about it.
The experience brings together the appearance of each object and the
information available about it.

### Explore planetary surfaces

Users can experience selected locations on Mars and the Moon through
360-degree panoramic views. They can look around the scene and get a
closer feeling of what these places look like.

### Compare the sizes of celestial objects

The atlas allows users to compare objects such as the Moon, Earth,
Jupiter, and the Sun. This helps make the enormous differences in size
across the universe easier to understand.

### See how objects move

Users can explore planetary orbits and view approximate object positions
for a selected time. This makes it easier to understand how planets move
around their stars.

### Explore black holes

The atlas includes visual scenes of supermassive black holes and their
surrounding features. These scenes help users understand the appearance
and scale of these extraordinary objects.

## How the Experience Works

A user begins on the home page and enters the interactive atlas. From
there, they choose an area of the universe to explore.

They can move between different areas, select objects, open information
about them, compare sizes, view planetary surfaces, or explore orbital
positions.

The experience is designed around discovery. Users should be able to
move naturally from one interesting object to another without needing to
understand astronomy in advance.

## Main User Journey

``` mermaid
flowchart TD
    A([Open CosmoAtlas])
    B[View Home Page]
    C[Enter Interactive Atlas]
    D[Choose an Area of Space]
    E[Explore the 3D View]
    F[Select a Celestial Object]
    G[Discover Information]
    H{What Would You Like to Do?}
    I[Explore Another Area]
    J[Compare Object Sizes]
    K[View a Planetary Surface]
    L[Explore Orbits and Positions]
    M[Continue Discovering]

    A --> B --> C --> D --> E --> F --> G --> H
    H --> I --> D
    H --> J --> M
    H --> K --> M
    H --> L --> M
    M --> E
```

## How the Project Is Organized

CosmoAtlas is divided into a few understandable parts:

-   **Website pages:** The pages users visit, such as the home page and
    exploration page.
-   **Interactive atlas:** The main experience where users explore
    space.
-   **Images and textures:** The visual material used to show planets,
    moons, clouds, and rings.
-   **Panoramas:** The 360-degree images used for surface exploration.
-   **Star information:** Data used to display stars and nearby stellar
    objects.
-   **Landing-page artwork:** Images and icons shown on the home page.
-   **Fonts and styles:** The visual appearance of the website.
-   **Server:** The part that makes the website available on the user's
    computer.

## Project File Structure

``` text
CosmoAtlas/
│
├── index.html
├── explore.html
├── about.html
├── contact.html
├── faq.html
├── privacy.html
│
├── package.json
├── package-lock.json
├── server.mjs
├── README.md
│
├── assets/
│   ├── application files
│   ├── styles
│   └── supporting files
│
├── textures/
│   └── atlas-v1/
│       ├── planetary textures
│       ├── cloud textures
│       ├── ring textures
│       └── manifest.json
│
├── panoramas/
│   ├── lunar images
│   └── Martian images
│
├── stellar/
│   └── star catalog data
│
├── landing/
│   ├── landing-page artwork
│   ├── feature images
│   └── icons
│
├── fonts/
│   └── font files
│
└── src/
    └── visualization components
```

### What the main files do

  File or folder   Purpose
  ---------------- -------------------------------------------
  `index.html`     Main home page
  `explore.html`   Interactive universe exploration page
  `about.html`     Information about the project
  `contact.html`   Contact page
  `faq.html`       Answers to common questions
  `privacy.html`   Privacy information
  `package.json`   Project details and available commands
  `server.mjs`     Starts the local website
  `assets/`        Main website files and visual resources
  `textures/`      Planet, cloud, and ring images
  `panoramas/`     360-degree surface images
  `stellar/`       Star information
  `landing/`       Home page images and icons
  `fonts/`         Fonts used by the website
  `src/`           Source files for selected visual features



## Run the Project on Your Computer

### Requirements

-   Node.js
-   npm
-   A modern web browser

### Step 1: Open the project folder

Open a terminal inside the `CosmoAtlas` folder.

### Step 2: Install the required packages

``` bash
npm install
```

### Step 3: Start the website

``` bash
npm start
```

### Step 4: Open CosmoAtlas

Open these addresses in your browser:

-   Home page: `http://localhost:8080`
-   Interactive atlas: `http://localhost:8080/explore`

### Useful commands

  Command             What it does
  ------------------- ---------------------------------------------
  `npm install`       Installs the packages needed by the project
  `npm start`         Starts the website
  `node server.mjs`   Starts the server directly
  `npm run`           Shows the commands available in the project

If `npm start` does not work, check the available commands in
`package.json`.

## The Overall Idea

CosmoAtlas aims to turn learning about space into an experience of
exploration. It brings different parts of the universe into one
interactive destination, where users can discover celestial objects,
understand their relationships, compare their sizes, and explore
selected planetary landscapes.

The goal is to make the vastness of the universe feel more accessible,
visual, and engaging for anyone curious about space.
