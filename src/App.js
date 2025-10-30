import React, { useState } from 'react';
import './App.css';

const initialBalance = 100000000000; // $100 billion
const initialProducts = [
  { id: 1, name: 'Big Mac', price: 2, image: 'https://neal.fun/spend/images/big-mac.jpg', icon: '🍔' },
  { id: 2, name: 'Flip Flops', price: 3, image: 'https://neal.fun/spend/images/flip-flops.jpg', icon: '👡' },
  { id: 3, name: 'Coca-Cola Pack', price: 5, image: 'https://neal.fun/spend/images/coca-cola-pack.jpg', icon: '🥤' },
  { id: 4, name: 'Movie Ticket', price: 12, image: 'https://neal.fun/spend/images/movie-ticket.jpg', icon: '🎫' },
  { id: 5, name: 'Book', price: 15, image: 'https://neal.fun/spend/images/book.jpg', icon: '📖' },
  { id: 6, name: 'Lobster Dinner', price: 45, image: 'https://neal.fun/spend/images/lobster-dinner.jpg', icon: '🦞' },
  { id: 7, name: 'Video Game', price: 60, image: 'https://neal.fun/spend/images/video-game.jpg', icon: '🎮' },
  { id: 8, name: 'Amazon Echo', price: 99, image: 'https://neal.fun/spend/images/amazon-echo.jpg', icon: '📱' },
  { id: 9, name: 'Year of Netflix', price: 100, image: 'https://neal.fun/spend/images/year-of-netflix.jpg', icon: '📺' },
  { id: 10, name: 'Air Jordans', price: 125, image: 'https://neal.fun/spend/images/air-jordans.jpg', icon: '👟' },
  { id: 11, name: 'Airpods', price: 199, image: 'https://neal.fun/spend/images/airpods.jpg', icon: '🎧' },
  { id: 12, name: 'Gaming Console', price: 299, image: 'https://neal.fun/spend/images/gaming-console.jpg', icon: '🎮' },
  { id: 13, name: 'Drone', price: 350, image: 'https://neal.fun/spend/images/drone.jpg', icon: '🚁' },
  { id: 14, name: 'Smartphone', price: 699, image: 'https://neal.fun/spend/images/smartphone.jpg', icon: '📱' },
  { id: 15, name: 'Bike', price: 800, image: 'https://neal.fun/spend/images/bike.jpg', icon: '🚲' },
  { id: 16, name: 'Kitten', price: 1500, image: 'https://neal.fun/spend/images/kitten.jpg', icon: '🐱' },
  { id: 17, name: 'Puppy', price: 1500, image: 'https://neal.fun/spend/images/puppy.jpg', icon: '🐶' },
  { id: 18, name: 'Tuk-Tuk', price: 2300, image: 'https://neal.fun/spend/images/tuk-tuk.jpg', icon: '🛺' },
  { id: 19, name: 'Acre of Farmland', price: 3000, image: 'https://neal.fun/spend/images/acre-of-farmland.jpg', icon: '🌾' },
  { id: 20, name: 'Designer Handbag', price: 5500, image: 'https://neal.fun/spend/images/designer-handbag.jpg', icon: '👜' },
  { id: 21, name: 'Hot Tub', price: 6000, image: 'https://neal.fun/spend/images/hot-tub.jpg', icon: '🛁' },
  { id: 22, name: 'Luxury Wine', price: 7000, image: 'https://neal.fun/spend/images/luxury-wine.jpg', icon: '🍷' },
  { id: 23, name: 'Diamond Ring', price: 10000, image: 'https://neal.fun/spend/images/diamond-ring.jpg', icon: '💍' },
  { id: 24, name: 'Horse', price: 2500, image: 'https://neal.fun/spend/images/horse.jpg', icon: '🐴' },
  { id: 25, name: 'Jet Ski', price: 12000, image: 'https://neal.fun/spend/images/jet-ski.jpg', icon: '🏄' },
  { id: 26, name: 'Rolex', price: 15000, image: 'https://neal.fun/spend/images/rolex.jpg', icon: '⌚' },
  { id: 27, name: 'Ford F-150', price: 30000, image: 'https://neal.fun/spend/images/ford-f150.jpg', icon: '🚗' },
  { id: 28, name: 'Tesla', price: 75000, image: 'https://neal.fun/spend/images/tesla.jpg', icon: '🚗' },
  { id: 29, name: 'Monster Truck', price: 150000, image: 'https://neal.fun/spend/images/monster-truck.jpg', icon: '🚛' },
  { id: 30, name: 'Ferrari', price: 250000, image: 'https://neal.fun/spend/images/ferrari.jpg', icon: '🏎️' },
  { id: 31, name: 'Single Family Home', price: 300000, image: 'https://neal.fun/spend/images/single-family-home.jpg', icon: '🏠' },
  { id: 32, name: 'Gold Bar', price: 700000, image: 'https://neal.fun/spend/images/gold-bar.jpg', icon: '🥇' },
  { id: 33, name: 'McDonalds Franchise', price: 1500000, image: 'https://neal.fun/spend/images/mcdonalds-franchise.jpg', icon: '🍔' },
  { id: 34, name: 'Superbowl Ad', price: 5250000, image: 'https://neal.fun/spend/images/superbowl-ad.jpg', icon: '📺' },
  { id: 35, name: 'Yacht', price: 7500000, image: 'https://neal.fun/spend/images/yacht.jpg', icon: '🚢' },
  { id: 36, name: 'M1 Abrams', price: 8000000, image: 'https://neal.fun/spend/images/m1-abrams.jpg', icon: '🚗' },
  { id: 37, name: 'Formula 1 Car', price: 15000000, image: 'https://neal.fun/spend/images/formula-1-car.jpg', icon: '🏎️' },
  { id: 38, name: 'Apache Helicopter', price: 31000000, image: 'https://neal.fun/spend/images/apache-helicopter.jpg', icon: '🚁' },
  { id: 39, name: 'Mansion', price: 45000000, image: 'https://neal.fun/spend/images/mansion.jpg', icon: '🏰' },
  { id: 40, name: 'Make a Movie', price: 100000000, image: 'https://neal.fun/spend/images/make-a-movie.jpg', icon: '🎬' },
  { id: 41, name: 'Boeing 747', price: 148000000, image: 'https://neal.fun/spend/images/boeing-747.jpg', icon: '✈️' },
  { id: 42, name: 'Mona Lisa', price: 780000000, image: 'https://neal.fun/spend/images/mona-lisa.jpg', icon: '🖼️' },
  { id: 43, name: 'Skyscraper', price: 850000000, image: 'https://neal.fun/spend/images/skyscraper.jpg', icon: '🏢' },
  { id: 44, name: 'Cruise Ship', price: 930000000, image: 'https://neal.fun/spend/images/cruise-ship.jpg', icon: '🚢' },
  { id: 45, name: 'NBA Team', price: 2120000000, image: 'https://neal.fun/spend/images/nba-team.jpg', icon: '🏀' }
];

function App() {
  const [balance, setBalance] = useState(initialBalance);
  const [products, setProducts] = useState(
    initialProducts.map(product => ({ ...product, quantity: 0 }))
  );
  const [purchasedItems, setPurchasedItems] = useState([]);

  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString()}`;
  };


  const handleBuy = (productId) => {
    const product = products.find(p => p.id === productId);
    if (balance >= product.price) {
      const newProducts = products.map(p =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      );
      setProducts(newProducts);
      setBalance(balance - product.price);
      
      // Update purchased items
      const existingItem = purchasedItems.find(item => item.id === productId);
      if (existingItem) {
        setPurchasedItems(purchasedItems.map(item =>
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
            : item
        ));
      } else {
        setPurchasedItems([...purchasedItems, {
          ...product,
          quantity: 1,
          total: product.price
        }]);
      }
    }
  };

  const handleSell = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product.quantity > 0) {
      const newProducts = products.map(p =>
        p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
      );
      setProducts(newProducts);
      setBalance(balance + product.price);
      
      // Update purchased items
      const updatedItems = purchasedItems.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          if (newQuantity === 0) {
            return null; // Remove item if quantity becomes 0
          }
          return { ...item, quantity: newQuantity, total: newQuantity * item.price };
        }
        return item;
      }).filter(item => item !== null);
      setPurchasedItems(updatedItems);
    }
  };

  const canBuy = (product) => balance >= product.price;
  const canSell = (product) => product.quantity > 0;

  return (
    <div className="App">
      <header className="header">
        <div className="bill-gates-section">
          <img src="https://neal.fun/spend/images/bill-gates.jpg" alt="Bill Gates" className="bill-gates-image" />
          <h1>Spend Bill Gates' Money</h1>
        </div>
        <div className="balance">
          {formatCurrency(balance)}
        </div>
      </header>

      <main className="main">
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="product-icon-fallback" style={{display: 'none'}}>
                  {product.icon}
                </div>
              </div>
              <div className="product-name">{product.name}</div>
              <div className="product-price">{formatCurrency(product.price)}</div>
              <div className="product-actions">
                <button
                  className={`sell-btn ${!canSell(product) ? 'disabled' : ''}`}
                  onClick={() => handleSell(product.id)}
                  disabled={!canSell(product)}
                >
                  Sell
                </button>
                <input 
                  type="number" 
                  value={product.quantity} 
                  readOnly 
                  className="quantity-input"
                />
                <button
                  className={`buy-btn ${!canBuy(product) ? 'disabled' : ''}`}
                  onClick={() => handleBuy(product.id)}
                  disabled={!canBuy(product)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {purchasedItems.length > 0 && (
        <div className="receipt">
          <h2>Your Receipt</h2>
          <div className="receipt-items">
            {purchasedItems.map(item => (
              <div key={item.id} className="receipt-item">
                <span className="receipt-item-name">{item.name}</span>
                <span className="receipt-item-quantity">x{item.quantity}</span>
                <span className="receipt-item-total">{formatCurrency(item.total)}</span>
              </div>
            ))}
            <div className="receipt-total">
              <span>TOTAL</span>
              <span className="receipt-total-amount">
                {formatCurrency(purchasedItems.reduce((sum, item) => sum + item.total, 0))}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
