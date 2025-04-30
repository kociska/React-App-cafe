import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team.jsx";
import OurMenu from "./pages/OurMenu.jsx";
import Nav from "./Nav";
import Footer from "./Footer";
import theme from "./ui/Theme.js";
import { ThemeProvider} from "@emotion/react";
import PinkStripe from "./PinkStripe";
import ChocoStripe from "./ChocoStripe";
import "../styles.css";


export default function App() {
  return (
    <ThemeProvider theme={ theme }>
    <BrowserRouter>
      <Nav />
      <PinkStripe />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/ourmenu" element={<OurMenu />} /> 
        <Route path="/team" element={<Team />} />  
      </Routes>
    </BrowserRouter>
    
    <ChocoStripe />
    <Footer />
    </ThemeProvider>
  );
}
