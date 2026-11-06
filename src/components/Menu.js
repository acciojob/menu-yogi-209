
import React from "react";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, category, price, img } = item;
        let testId = "";
        if (category === "Breakfast") testId = "menu-item-breakfast";
        else if (category === "Lunch") testId = "menu-item-lunch";
        else if (category === "Shakes") testId = "menu-item-shakes";

        return (
          <article key={id} data-test-id={testId} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{category}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
