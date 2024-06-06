# UNITH Candidate Front-End Test Assignment

## What the Application does

- A fully responsive React SPA, that renders 10 card list in each page, paginated, with a detailed page for each Item with a go home button.

## Technologies

- TypeScript
- React
- Tailwind CSS
- Redux
- Docker
- Axios

## Project Installation

```bash
git clone https://github.com/RottabMahmoud/unith.git
cd unith
npm install  
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

Used TailwindCSS for stylings, & axios for API calls.

```bash
npm install redux react-redux @reduxjs/toolkit react-router-dom axios tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Project Hierarchy
```bash
  UNITH    
    ├─ public
    │  ├─ vite.svg
    ├─ src                   
    │  ├─ App.jsx            
    │  ├─ components         
    │  │  ├─ ImageDetail.tsx      
    │  │  ├─ ImageList.tsx
    │  ├─ store              
    │  │  ├─ imageSlice.ts 
    │  │  └─ index.ts
    │  ├─ App.css        
    │  ├─ App.tsx             
    │  ├─ index.css             
    │  ├─ main.tsx             
    │  ├─ vite.env.d.ts             
    ├─ .gitignore 
    ├─ .dockerignore 
    ├─ Dockerfile 
    ├─ node_modules
    ├─ index.html
    ├─ package.json
    ├─ package-lock.json
    ├─ postcss.config.js
    ├─ tsconfig.json
    ├─ tailwind.config.cjs
    ├─ vite.config.cjs
    ├─ README.md
    └─ yarn.lock
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://rottab.vercel.app"> <img src="https://img.shields.io/badge/Mahmoud%20Rottab-Porfolio" alt="Mahmoud Rottab" /> </a>
  