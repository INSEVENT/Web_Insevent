import React, { useRef, useEffect, useState } from "react";
function Talkshow() {
    const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = sectionRef1.current;
      const section2 = sectionRef2.current;
      const sectionTop1 = section1.getBoundingClientRect().top;
      const sectionTop2 = section2.getBoundingClientRect().top;
      const sectionHeight1 = section1.offsetHeight;
      const sectionHeight2 = section2.offsetHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop1 < windowHeight && !showContent1) {
        if (sectionTop1 + sectionHeight1 > 0) {
          setShowContent1(true);
        }
      }

      if (sectionTop2 < windowHeight && !showContent2) {
        if (sectionTop2 + sectionHeight2 > 0) {
          setShowContent2(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showContent1, showContent2]);
    return(
        <>
            <div ref={sectionRef1} className={showContent1 ? "slide-in header-ts" : ""}>TALKSHOW</div>
            <div ref={sectionRef2} className={showContent2 ? "slide-in ts" : ""}>COMING SOON</div>
        </>
    )
}
export default Talkshow;