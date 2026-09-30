# Computer Science Department website

A static, academic web project by Rafael Véclin and Maël Prouteau for Efrei P2-INT2. It presents a sample Computer Science department site with program, faculty and professor pages, an event carousel, and an interactive quiz. It is a student project, not an official Efrei website.

[View the live demo](https://meta122.github.io/WebProgrammingVeclinProuteauINT2/)\n\n![Campus photograph used by the site](assets/photo-efrei.jpg)

## Features

- Multi-page navigation across Home, Programs, Professors, Faculties, Quiz and About
- CSS layout and styling
- JavaScript carousel on the home page
- Quiz form with client-side input checks, scoring, an attempt history table and a three-attempt limit

The quiz runs in the browser and does not submit answers to a server. Its form asks for personal details as part of the original exercise; use fictional details when trying the demo.

## Run locally

No build step or third-party package is needed. Open [html/index.html](html/index.html) using a local static server such as Live Server. From a terminal at the repository root, one option is:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/html/`. Relative links load the CSS, JavaScript and assets from their sibling directories. Opening the file directly may also work, but a local server matches how the site is intended to run.

## Repository layout

- `html/`: pages
- `css/style.css`: visual styles
- `js/carousel.js` and `js/Quiz.js`: interactions
- `assets/`: images used by the site
- Root `index.html`: entry point forwarding static hosts to `html/index.html`

GitHub Pages publishes the repository root from the `main` branch. The root entry point forwards visitors to `html/index.html`.

## Team and license

This is a two-person academic project by Rafael Véclin and Maël Prouteau. The repository does not record a reliable per-person task split, so none is attributed here.

The code is MIT licensed; see [LICENSE](LICENSE). Images and Efrei branding in `assets/` may have separate rights and are not granted under the MIT license by this repository.
