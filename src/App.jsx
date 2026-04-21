import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Rider from "./pages/Rider";
import Impact from "./pages/Impact";
import Invest from "./pages/Invest";
import Term from "./pages/Term";
import Contact from "./pages/Contact";
import Loader from "./Components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary text-white selection:bg-primary/30 selection:text-white">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/Service"
              element={
                <PageWrapper>
                  <Service />
                </PageWrapper>
              }
            />
            <Route
              path="/Rider"
              element={
                <PageWrapper>
                  <Rider />
                </PageWrapper>
              }
            />
            <Route
              path="/impact"
              element={
                <PageWrapper>
                  <Impact />
                </PageWrapper>
              }
            />
            <Route
              path="/Invest"
              element={
                <PageWrapper>
                  <Invest />
                </PageWrapper>
              }
            />
            <Route
              path="/term"
              element={
                <PageWrapper>
                  <Term />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default App;
