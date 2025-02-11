import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./styles/reset.css"
import "./styles/index.css"

// biome-ignore lint: non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
