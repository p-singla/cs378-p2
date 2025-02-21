import React from "react";

const MenuItem = ({ item, quantity, addToCart, removeFromCart }) => {
  const imageUrl = `./images/${item.imageName}`; 

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <img src={imageUrl} alt={item.title} className="card-img-top rounded" />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="price">${item.price.toFixed(2)}</p>
          <div className="cart-controls">
            <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>−</button>
            <span className="mx-3">{quantity}</span>
            <button className="btn btn-outline-success" onClick={() => addToCart(item.id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
