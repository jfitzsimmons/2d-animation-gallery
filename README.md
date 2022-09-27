# 2D Generative Animation Gallery

Animations coded with Pixi.js, utilizes WebGL and styled with Sass.

[![generative 2d animation Preview Image](https://github.com/jfitzsimmons/2d-animation-gallery/blob/main/preview.png)](https://jfitzsimmons.github.io/2d-animation-gallery/ 'generative 2d animation gallery')

> **What goes into a piece of generative art?**  
> Often, generative art draws inspiration from modern art, especially pop art that makes heavy use of orderly geometric patterns.
>
> - Randomness is crucial for creating generative art. The art should be different each time you run the generation script.
> - Algorithms — As generative artists, we use code basics like loops, control flow and specialized functions.
> - Geometry — Most generative art incorporates shapes, and the math from high school geometry class can aid in some really cool effects.

[An introduction to Generative Art: what it is, and how you make it](https://www.freecodecamp.org/news/an-introduction-to-generative-art-what-it-is-and-how-you-make-it-b0b363b50a70/)

## Installation

### Prerequisites

npm (or yarn): [npm](https://www.npmjs.com/)

git: [git](https://git-scm.com/)

### Steps

Navigate to your chosen directory and clone the gallery.

```bash
git clone https://github.com/jfitzsimmons/2d-animation-gallery.git
```

(webpack & gh-pages)

```
npm install
```

```bash
npm run build
npm run dev
```

## Deploy

### Prerequisites

You'll need a Github account: [create account](https://github.com/join)

Update homepage in package.json to your own

```
"homepage": "https://yourhandle.github.io/2d-animation-gallery/",
```

```bash
npm run deploy
```

## Built With

- [Pixi.js](https://pixijs.com/) - Create beautiful digital content with the fastest, most flexible 2D WebGL renderer.
- [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) - WebGL (Web Graphics Library) is a JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser.
- [Sass](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
