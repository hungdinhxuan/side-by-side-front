import React, { useEffect, useState } from "react";
import '../Styles/BackToTop.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <div className="scroll-to-top" style={{ textAlign: "right", display: isVisible ? "block" : "none", background: "#fff"}}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <i class="fa fa-arrow-alt-circle-up" style={{fontSize: "50px"}}></i>
        </div>
      )}
    </div>
  );
}
