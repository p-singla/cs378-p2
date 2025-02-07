import React from "react";

const MenuItem = ({ title, description, price, imageName }) => {
  const imageUrl = `/images/${imageName}`; 

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <img src={imageUrl} alt={title} className="card-img-top rounded" />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="price">${price.toFixed(2)}</p>
          <button className="btn btn-custom">Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
