import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FadeComponentProps {
  animation:
    | "fade"
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "fade-up-right"
    | "fade-up-left"
    | "fade-down-right"
    | "fade-down-left"
    | "flip-up"
    | "flip-down"
    | "flip-left"
    | "flip-right"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "zoom-in"
    | "zoom-in-up"
    | "zoom-in-down"
    | "zoom-in-left"
    | "zoom-in-right"
    | "zoom-out"
    | "zoom-out-up"
    | "zoom-out-down"
    | "zoom-out-left"
    | "zoom-out-right";
  children: ReactNode;
  style?: string;
  isSpan?: boolean;
}

const TextFade = ({
  animation,
  children,
  style,
  isSpan = false,
}: FadeComponentProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isSpan ? (
        <span data-aos={animation} className={`${style}`}>
          {children}
        </span>
      ) : (
        <div data-aos={animation} className={`${style}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default TextFade;
