import { useState , useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(
    function () {
      function handleResize() {
        setIsMobile(window.innerWidth <= 840);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
    },
    [setIsMobile]
  );

    return isMobile;
}


