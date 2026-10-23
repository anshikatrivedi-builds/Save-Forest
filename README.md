# 🌲 Save Forest

A 3D, interactive, single-page website that raises awareness about protecting our forests. Built with plain **HTML, CSS and JavaScript**, with no frameworks, libraries or images to install.

## ✨ Features

- **3D parallax hero** with layered mountains and pine trees that move on scroll and mouse movement
- **Animated statistics counters** that start when you scroll to them
- **3D flip cards** showing the main threats to forests (tap to flip on mobile)
- **3D tilt cards** that follow your mouse in the "How You Can Help" section
- **Virtual forest planter**: click the ground to plant trees and watch the CO₂ counter grow
- **Green pledge form** with a personalised thank-you message
- **Scroll reveal animations**, a sticky navbar and 3D-style buttons
- **Fully responsive** for desktop, tablet and mobile, with a hamburger menu

## 📁 Project Structure

```
save-forest/
├── index.html    # Page structure and content
├── style.css     # Styling, 3D effects and animations
├── script.js     # Parallax, counters, tilt, planting and form logic
└── README.md     # Project documentation
```

## 🚀 How to Run

1. Download or copy all files into one folder (e.g. `save-forest`).
2. Double-click `index.html` to open it in any modern browser.

No installation or build step is needed.

Optionally, use **VS Code** with the *Live Server* extension (right-click `index.html` → *Open with Live Server*) for auto-reload while editing.

## 🎨 Customisation

| What to change | Where |
| --- | --- |
| Colours | `:root` variables at the top of `style.css` |
| Fonts | Google Fonts link in `index.html` and `font-family` in `style.css` |
| Text and sections | `index.html` |
| Statistics numbers | `data-count` attributes in the Impact section of `index.html` |
| Tree emojis | `trees` array in `script.js` |
| CO₂ per tree | The `22` value in `script.js` (kg per tree per year) |

## 🛠️ Built With

- **HTML5**: semantic structure
- **CSS3**: Grid, Flexbox, 3D transforms, keyframe animations, `clip-path`
- **JavaScript (ES6)**: IntersectionObserver, DOM events
- **Google Fonts**: Playfair Display and Poppins (needs internet; falls back to default fonts offline)

## 🌐 Browser Support

Works on the latest versions of Chrome, Edge, Firefox, Safari and mobile browsers.

## 📤 Deployment

You can host it free on:
- **GitHub Pages**: push the folder to a repo, then go to *Settings → Pages*
- **Netlify**: drag and drop the folder at app.netlify.com/drop
- **Vercel**: import the repo or upload the folder

## 🌱 Future Ideas

- Donation and volunteer sections
- Photo gallery of forests and wildlife
- Contact form with a backend
- Dark mode toggle
- Multi-language support

## 📄 License

Free to use, modify and share for educational and non-commercial purposes.

> *"The best time to plant a tree was 20 years ago. The second best time is now."*