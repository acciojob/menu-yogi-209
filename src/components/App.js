import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

function App() {
  const [menuItems] = useState([
    { id: 1, title: "Pancakes", category: "Breakfast", price: "$5.99", img: "pancakes.jpg" },
    { id: 2, title: "Eggs Benedict", category: "Breakfast", price: "$8.99", img: "eggs.jpg" },
    { id: 3, title: "Cheeseburger", category: "Lunch", price: "$10.99", img: "burger.jpg" },
    { id: 4, title: "Caesar Salad", category: "Lunch", price: "$7.99", img: "salad.jpg" },
    { id: 5, title: "Chocolate Shake", category: "Shakes", price: "$4.99", img: "choco.jpg" },
    { id: 6, title: "Strawberry Shake", category: "Shakes", price: "$4.99", img: "strawberry.jpg" },
  ]);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main id="main">
      <div className="menu-section">
        <h2>Our Menu</h2>
        <div className="btn-container">
          <button id="filter-btn-1" onClick={() => setActiveCategory("Breakfast")}>
            Breakfast
          </button>
          <button id="filter-btn-2" onClick={() => setActiveCategory("Lunch")}>
            Lunch
          </button>
          <button id="filter-btn-3" onClick={() => setActiveCategory("Shakes")}>
            Shakes
          </button>
        </div>
        <Menu items={filteredItems} />
      </div>
    </main>
  );
}

export default App;
