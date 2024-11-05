import { useEffect, useMemo, useRef, useState } from "react";

export const useSlider = ({ total }: { total: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [step, setStep] = useState(0);
  const x = useMemo(() => {
    const to = step * (containerRef.current?.clientWidth ?? 0);
    return -to;
  }, [containerRef, step]);

  useEffect(() => {
    if (containerRef.current && itemRef.current.length > 0) {
      itemRef.current.map((item) => {
        item.setAttribute(
          "style",
          `width: ${containerRef.current?.clientWidth ?? 0}px`,
        );
      });
    }

    const autoplay = setInterval(() => {
      setStep((prev) => (prev < total - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(autoplay);
  }, [containerRef, itemRef, total]);

  return {
    containerRef,
    itemRef,
    x,
    step,
    setStep,
  };
};
