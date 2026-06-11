import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./Pages/pages/About.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
