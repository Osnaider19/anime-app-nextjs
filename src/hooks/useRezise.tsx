import { useEffect, useState } from "react";

export const useResize = (threshold: number) => {
  //
  const [isBelowThreshold, setIsBelowThreshold] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsBelowThreshold(window.innerWidth < threshold);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isBelowThreshold;
};
