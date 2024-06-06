# UNITH Candidate Front-End Test Assignment

## What the Application does

- A fully responsive 3D animated portfolio built using React, JavaScript, Tailwind CSS, Framer Motion, React Three Fiber, and Three.js.

## Technologies

- JavaScript
- React
- Tailwind CSS
- Framer Motion
- React Three Fiber
- React Tilt
- React Vertical Timeline
- Three.js

## Some of the challenges I've faced and how I've tackled them

- Applying Animations, used animation libraries like React Three Fiber, Framer motion, and Reacht Tilt for applying animations.
- Adding 3D Objects, used 3d objects library, to import and start using 3d objects in my UI.

## Project Installation

```bash
git clone https://github.com/RottabMahmoud/3D_portfolio
cd 3d_portfolio
npm install --legacy-peer-deps 
```

## To Start the App

```bash
npm run dev
```

## For Building

```bash
npm run build
```
## Usage

Used TailwindCSS for stylings, React Tilt, React Vertical Timeline, and React Framer Motion for animations.
Used React Three Fiber for 3d Objects.

```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

## Project Hierarchy
```bash
  3D_PORTFOLIO    
    ├─ public
    │  ├─ desktip_pc ## 3D Object
    │  ├─ planet     ## 3D Object
    │  ├─ logo.svg
    ├─ src                   
    │  ├─ App.jsx            
    │  ├─ components         
    │  │  ├─ About.jsx      
    │  │  ├─ Contact.jsx
    │  │  ├─ Education.jsx
    │  │  ├─ Experience.jsx
    │  │  ├─ Hero.jsx      
    │  │  ├─ index.jsx  
    │  │  ├─ Loader.jsx       
    │  │  ├─ NavBar.jsx       
    │  │  ├─ Tech.jsx       
    │  │  ├─ Works.jsx       
    │  ├─ hoc              
    │  │  ├─ index.js 
    │  │  └─ SectionWrapper.jsx
    │  ├─ logos       ## Logos Folder        
    │  ├─ utils             
    │  │  └─ motion.js                
    │  │─ index.css
    │  │─ main.jsx
    │  │─ styles.js
    ├─ .gitignore 
    ├─ node_modules
    ├─ index.html
    ├─ package.json
    ├─ package-lock.json
    ├─ postcss.config.cjs
    ├─ tailwind.config.cjs
    ├─ vite.config.cjs
    ├─ README.md
    └─ yarn.lock
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://rottab.vercel.app"> <img src="https://img.shields.io/badge/Mahmoud%20Rottab-Porfolio" alt="Mahmoud Rottab" /> </a>
  