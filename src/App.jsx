import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Rider from "./pages/Rider";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Loader";
import Impact from "./pages/Impact";
import Invest from "./pages/Invest";
import Term from "./pages/Term";
function App() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    fetchLoader();
  }, []);

  const fetchLoader = async () => {
    // simulate a delay of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // set isLoading to false once the delay is over
    setisLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Rider" element={<Rider />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/Invest" element={<Invest />} />
            <Route path="/term" element={<Term />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
