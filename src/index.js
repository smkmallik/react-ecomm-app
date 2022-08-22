import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./contexts/cart-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { ProductProvider } from "./contexts/product-context";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
