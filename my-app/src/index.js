import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartContextProvider } from "./store/cart-context";
import { HistoryContextProvider } from "./store/history-context";
import { NotificationContextProvider } from "./store/notification-context";
import { ProductContextProvider } from "./store/product-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <NotificationContextProvider>
      <HistoryContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartContextProvider>
      </HistoryContextProvider>
    </NotificationContextProvider>
  </ProductContextProvider>
);
