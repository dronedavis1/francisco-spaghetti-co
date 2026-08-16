# FranCisco Spaghetti Co.

A fancy, Apple.com-inspired marketing site for **Franchandler's Spaghetti Company**, a handmade pasta restaurant in San Francisco, California.

## Preview locally

This is a static site — no build step required.

```bash
# from the project root
python -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in a browser.

## Structure

```
index.html            Single-page site (hero, menu, craft, city, experience, visit)
assets/css/styles.css Apple-inspired design system (Inter + Fraunces, wine/gold accent)
assets/js/main.js     Sticky blurred nav, scroll-reveal animation, mobile menu, scroll progress bar
```

## Notes

- Imagery is served from Unsplash's CDN (stock photography of pasta, a chef plating, and the Golden Gate Bridge).
- Not yet deployed to a custom domain — see the repo's GitHub Pages link for a live dev preview.
- Address, phone, and email in the "Visit" section are placeholders — swap in the real details before launch.
