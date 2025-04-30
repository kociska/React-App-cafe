import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
/* To jest oficjalny sposób od React 18 i jest wymagany przez niektóre nowe paczki (w tym react-router-dom 7+).  W React 18 zalecany sposób renderowania aplikacji wygląda trochę inaczej niż w starszych wersjach. Jeśli  plik index.js używa starego sposobu renderowania (zamiast createRoot), może to powodować błędy – szczególnie z nowszymi wersjami routera. [my research]*/

//ReactDOM.render(<App />, document.getElementById("root"));
