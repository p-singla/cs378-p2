import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./index.css";
import Header from "./components/Header";
import MenuItem from './components/MenuItem';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart; // Do nothing if item not in cart
      const updatedCart = { ...prevCart };
      updatedCart[id] -= 1;
      if (updatedCart[id] <= 0) delete updatedCart[id]; // Remove item if count reaches 0
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const calculateTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const item = menuItems.find((item) => item.id === parseInt(id));
      return total + item.price * quantity;
    }, 0).toFixed(2);
  };

  const placeOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert("No items in cart.");
      return;
    }

    let orderSummary = "Order placed:\n";
    menuItems.forEach((item) => {
      if (cart[item.id]) {
        orderSummary += `${item.title}: ${cart[item.id]}x\n`;
      }
    });
    orderSummary += `\nTotal: $${calculateTotal()}`;
    alert(orderSummary);
  };

  return (
    <div>
      <Header /> 
      <div className="menu">
        <div className="row g-4">
          {menuItems.map((item) => (
            <MenuItem
            key={item.id}
            item={item}
            quantity={cart[item.id] || 0}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          ))}
        </div>
      </div>

      <div className="cart text-center my-4">
        <h3>Cart</h3>
        <p>Total: ${calculateTotal()}</p>
        <button className="btn btn-danger mx-2" onClick={clearCart}>Clear all</button>
        <button className="btn btn-success mx-2" onClick={placeOrder}>Order</button>
      </div>

    </div>
  );
}

export default App;
