# Premium Google Login Demo

This repository hosts a **premium‑styled** static web application that demonstrates client‑side Google login using **Google Identity Services**. The design features glassmorphism, gradient backgrounds, smooth micro‑animations, and modern typography.

## Features
- Google Sign‑In button (popup mode) powered by Google Identity Services.
- Elegant UI with glass‑like card, gradient backdrop, and subtle animations.
- Responsive and accessible layout.
- No backend required – all authentication happens in the browser.

## Setup & Development
1. **Obtain a Google OAuth Client ID**
   - Visit the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a **OAuth 2.0 Client ID** for a **Web application**.
   - Add `http://localhost` (or your domain) to **Authorized JavaScript origins**.
   - Copy the **Client ID**.

2. **Configure the project**
   - Open `index.html` and replace `YOUR_GOOGLE_CLIENT_ID` with the client ID from step 1.
   - (Optional) Adjust the UI theme by editing `style.css`.

3. **Run locally**
   ```bash
   # Using a simple static server (Python example)
   cd d:/login
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in your browser.

4. **Build / Deploy**
   - The site is static; you can host it on GitHub Pages, Netlify, Vercel, or any static file server.

## Repository Structure
```
login/
├─ index.html      # Main HTML page with Google login button
├─ style.css       # Premium CSS (glassmorphism, gradients, animations)
├─ script.js       # Client‑side JS handling Google ID token
├─ README.md       # This documentation
└─ .gitignore      # Git ignore patterns
```

## License
MIT – feel free to customize and extend!
