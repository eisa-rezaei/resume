import {useState, useEffect, useCallback} from "react";

export const useSizeCheckker = () => {
  const [sizeCheck, setSizeCheck] = useState(window.innerWidth > 600);
  const width = window.innerWidth > 600;

  const checkSize = useCallback(() => {
    setSizeCheck(width);
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, [width, checkSize]);

  return sizeCheck;
};
