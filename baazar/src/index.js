import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import cartReducer from "../src/utils/cartRedux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer:{
   cart : persistedReducer,
  }
});
const persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
