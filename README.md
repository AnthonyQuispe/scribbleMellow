ScribbelMeMellow 🎨🛍️

Welcome to the official GitHub project for ScribbelMeMellow.com — an eCommerce website where users can explore and buy original art and stickers by scribbelmemelliow.

⸻

🚀 Tech Stack
• Frontend: React, HTML, JavaScript
• Styling: SCSS (with BEM naming convention)
• Backend: Firebase + Firestore
• Deployment: Firebase Hosting

⸻

🧱 Project Structure

Landing Page Sections:
• 🔝 Navigation
• 💥 Hero Section
• 🛍️ Product Section
• 💸 Discount/Sale Section
• 🌟 Featured Collection
• 👩‍🎨 About Section
• 📬 Contact Section
• 🦶 Footer

⸻

🗂 Folder Structure

/src
/pages
/Landing
/components
/Navbar
/Hero
/Products
/Discount
/Featured
/About
/Contact
/Footer
/styles
\_variables.scss
\_mixins.scss
\_typography.scss
global.scss
/assets
/images
/icons
/firebase
firebase-config.js
App.js
index.js

⸻

🔖 BEM + SCSS Example

.product-card {
&**image { ... }
&**title { ... }
&\_\_price { ... }

&--on-sale {
border: 2px solid red;
}
}

⸻

🎯 Objectives
• ✅ create a React component structure
• ✅ Use SCSS with BEM
• ✅ Manage data with Firebase + Firestore
• ✅ Build mobile responsive UIs

⸻

🧩 Tasks & GitHub Issues

Starter Issues
• Setup project scaffolding (React + SCSS)
• Create NavBar component
• Build Hero Section
• Create Product Card UI component
• Add dummy product data in Firestore
• Set up Firebase config and hosting
• Build mobile responsive styles first

Intermediate Issues
• Add Firestore queries to display products
• Implement Discount section logic
• Create Featured Collection layout
• Add About & Contact sections

⸻

🛠️ Getting Started

Clone the Repo

git clone https://github.com/YOUR_USERNAME/ScribbelMeMellow.git
cd ScribbelMeMellow

Install Dependencies

npm install

Run Locally

npm run start

⸻

🔐 Firebase Setup

You will need to create your own Firebase project and add your configuration to /src/firebase/firebase-config.js.

⸻
