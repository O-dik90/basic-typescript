import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

interface ContextProps{
  title?:string
  id?:number
  description?:string
}

export const UserContext = React.createContext<ContextProps | null>(null);
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
