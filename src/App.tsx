import { Routes, Route } from "react-router-dom"
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import Reserve from "./pages/Reserve"
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollTop";



function App() {
  return (
      <section className="font-geist">
        <Header />
        <main>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/reserve" element={<Reserve />} />
          </Routes>
        </main>
        <Footer />
      </section>
  );
}

export default App;
