import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const app = document.querySelector(".App");
    if (app) {
      app.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
