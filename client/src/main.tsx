import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0f1a",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui",
      fontSize: "32px"
    }}>
      Focus Flow AI
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
