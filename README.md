# Abubakri Bello - Modern Portfolio Redesign

A premium, state-of-the-art portfolio website for an Automation & AI Systems Consultant. This project features a modern dark mode aesthetic with glassmorphism, vibrant gradients, and high-performance interactive elements.

## 🚀 Key Features
- **Modern Design System**: Centralized design tokens for colors, typography, and effects.
- **Tools Carousel**: Infinite horizontal scrolling showcase of the technology stack.
- **Glassmorphism**: Subtle blur and transparency effects for a high-end feel.
- **Responsive Grids**: Case studies and industry sectors use smooth horizontal scrolling on smaller screens.
- **Dedicated Case Studies**: 5 custom detail pages for deep-dive success stories.
- **Scroll Reveal**: Smooth fade-in animations as you navigate the page.

## 📁 Project Structure
- `index.html`: The main homepage content and structure.
- `styles.css`: Core layout and component styling.
- `design-tokens.css`: The "Brain" of the design—contains all variables, colors, and keyframes.
- `script.js`: Handles interactions, scroll animations, and navbar behavior.
- `case-study-*.html`: Individual detail pages for various projects.

---

## 🛠️ How to Modify & Expand

### 1. Adding a New Case Study
1.  **Create the Page**: Duplicate an existing case study file (e.g., `case-study-voice-agent.html`) and rename it.
2.  **Update Content**: Open the new file and update the `h1`, context section, lists, and testimonials.
3.  **Add to Homepage**:
    - Open `index.html` and find the `<div class="case-study-grid">`.
    - Duplicate an existing `<a href="..." class="case-study-card">` block.
    - Update the `href` to point to your new file and change the text/tags.

### 2. Adding a Tool to the Carousel
1.  Open `index.html` and locate `<!-- Tools Carousel -->`.
2.  Find the `tool-card` list.
3.  Duplicate one `tool-card` div:
    ```html
    <div class="tool-card">
        <div class="tool-icon">ICON_EMOJI</div>
        <div class="tool-name">Tool Name</div>
    </div>
    ```
4.  **Note**: Because the carousel is an infinite loop, you must add the new tool to **both** the primary list and the duplicated list inside the carousel container to ensure a seamless loop.

### 3. Changing Colors & Branding
- Open `design-tokens.css`.
- Locate the `:root` variables block.
- Update `--color-accent-blue`, `--color-bg-primary`, or `--gradient-primary`. Changing these values will update the entire site instantly.

### 4. Modifying Section Layouts
- **Horizontal Grids**: The Case Studies and Industries grids are set to `display: flex`.
- To change how many items show or their size, adjust the `flex: 0 0 [WIDTH]px` property in `styles.css` for `.case-study-card` or `.industry-card`.

---

## 🌐 Deployment
This site is designed for hosting on **GitHub Pages**. Simply push your changes to the `main` branch, and the site will update automatically at `abubakribello.github.io`.

---

© 2026 Abubakri Bello. Designed for impact.