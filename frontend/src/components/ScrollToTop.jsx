import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Current route ka path milta hai

  useEffect(() => {
    window.scrollTo(0, 0); // Page ko top pr scroll kare
  }, [pathname]); // Jab bhi route/path change ho, ye chale

  return null; // Ye component render nahi karega
}

export default ScrollToTop;
