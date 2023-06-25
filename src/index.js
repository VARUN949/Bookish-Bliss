import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StatusContextProvider } from './contexts/LoginStatus.contexts'
import { FilterBooksProvider } from "./contexts/FilteredBooks"
import {SearchStringContexPorvider} from "./contexts/SearchBooks.contexts"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StatusContextProvider>
        <FilterBooksProvider>
          <SearchStringContexPorvider>
               <App />
          </SearchStringContexPorvider>
        </FilterBooksProvider>
      </StatusContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
