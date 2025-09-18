import type React from "react";
import Hero from "./pages/Home/sections/Hero/Hero";
import Projects from "./pages/Home/sections/Projects/Projects";
import About from "./pages/Home/sections/About/About";
import Footer from "./pages/Home/sections/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
    <Hero />
    <About />
    <Projects />
    <Footer />
    </>
  )
};

export default App;
