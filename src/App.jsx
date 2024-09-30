import Aos, { offset } from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import ScrollToTop from "./components/common/ScrollTop";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import MasyDase from "./pages/home/masydase";
import NotFound from "./pages/404";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100, // Ajuste del offset para iniciar la animación antes de que el elemento entre al viewport.
    });
    Aos.refresh(); // Refresca AOS para asegurarse de que se detecten todos los elementos.
  }, []);
  window.addEventListener("scroll", () => {
    Aos.refresh();
  });
  return (
    <div className="main-page-wrapper">
      <Routes>
        <Route path="/">
          <Route index element={<MasyDase />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollTopBehaviour />
      <ScrollToTop />
    </div>
  );
}

export default App;
