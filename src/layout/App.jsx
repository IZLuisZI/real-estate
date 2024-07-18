import { useState } from "react";
import Header from "../sections/Header";
import MainSection from "../sections/MainSection";
import Product from "../sections/Product";
import Services from "../sections/Services";
import Testimonials from "../sections/testimonials";
import Sponsors from "../sections/Sponsors";
import Projects from "../sections/Projects";
function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Services />
      <Product />
      <Testimonials />
      <Sponsors />
      <Projects />
    </>
  );
}

export default App;
