# CS601 - Assignment 5: Inventory App

## 📄 Project Description
This project is a modern React-based Inventory Management Application developed for METCS601 – Assignment 5. It enables a local grocery store named "Fresh Eats" to visually display a list of products "Inventory Items" including SKU, name, quantity, and price with a responsive and stylish interface. The app is fully client-side and uses **React** and **Vite** for fast performance and scalability.

---

## 📁 Project Structure

```
/CS601_HW5_HernandezPena
├── inventory-app/
│   ├── public/
│   │   ├── inventory.json                  # Inventory data
│   │   ├── logo.png                        # Local store's logo
│   │   └── menu-icon.png                   # Hamburger menu's logo for smaller screens
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx                  # Component for copyright and navigation links
│   │   │   ├── Header.jsx                  # Component for store's logo and name
│   │   │   ├── InventoryItem.jsx           # Component for rendering each item information
│   │   │   ├── InventoryList.jsx           # Component for fetching the list of inventory items
│   │   │   └── Menu.jsx                    # Component for top navigation bar with links
│   │   ├── App.jsx                         # Acts as the root layout for the application
│   │   ├── App.css                         # CSS file for styling the entire application
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html                          # Holds the entire application in the root container
│   ├── package.json                        # Project metadata
│   ├── package-lock.json                   # Dependency tree for reproducibility
│   └── vite.config.js
└── README.md                               # Project Documentation
```

---

## ✨ Key Features

- 📺 Displays inventory items with SKU, name, quantity, and price.
- 🧩 Modular components: Header, Menu, InventoryList, InventoryItem, Footer.
- 🎨 Responsive layout with CSS Grid, media queries, and hover effects.
- 🖼️ Store branding via logo and mobile-friendly menu icon.
- 📥 Fetches data from a JSON file located in the `public` directory.
- 📱 Mobile-optimized layout with conditional hiding, scaling, and icon fallback.

---

## 🛠️ Technologies Used

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) for development & build
- [JavaScript (JSX)](https://reactjs.org/docs/introducing-jsx.html)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ESLint](https://eslint.org/) for linting
- GitHub for version control and hosting

---

## 💾 Inventory Data

Located in `public/inventory.json`, the file includes the following fields per item:

```json
{
  "sku": "001",
  "name": "Apples",
  "qty": 30,
  "price": 1.75
}
```

---

## 🌐 GitHub Repository
This project's live repository may be found on GitHub at:
   ```
   https://github.com/joelhdzp/CS601_HW5_HernandezPena
   ```

---

## 🚀 How to Run Locally

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### 1. Clone the repository

```bash
git clone https://github.com/joelhdzp/CS601_HW5_HernandezPena.git
cd CS601_HW5_HernandezPena/inventory-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌟 Highlights

- Clean semantic layout using React component architecture.
- Full responsive design from desktop to mobile.
- Uses `::after` pseudo-element for compact mobile menu icon.
- Accessible structure with descriptive `alt` attributes and roles.
- Code structured for reusability and future extensibility.

---

## 👨‍💻 Author
**Joel Hernandez Pena**  
MET CS601 – Web Application Development  
Boston University
