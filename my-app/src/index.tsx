import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const UserContext = React.createContext({
  title: "learn typescript (Default)",
  id: 0,
  description: "always run to learn (Default)",
});
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{
      title: "my TIME",
      id: 3,
      description: "running"
    }}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
