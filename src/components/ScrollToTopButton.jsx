import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 700);

  // Detecta scroll y ancho de pantalla
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 200);
    const handleResize = () => setIsMobileView(window.innerWidth < 700);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Estilos dinámicos según viewport
  const style = {
    position: "fixed",
    zIndex: 9999,
    cursor: "pointer",
    padding: "10px 15px",
    fontSize: "20px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "all 0.3s ease",
    right: isMobileView ? "50%" : "20px",
    bottom: isMobileView ? "20px" : "auto",
    transform: isMobileView ? "translateX(50%)" : "none",
    display: showButton ? "block" : "none",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  };

  return (
    <button onClick={scrollToTop} style={style} aria-label="Scroll to top">
      ↑
    </button>
  );
};

export default ScrollToTopButton;