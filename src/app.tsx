import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
          {/* Smooth fade to primary background — tall gradient so no seam */}
          <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #050c1a 100%)" }} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
