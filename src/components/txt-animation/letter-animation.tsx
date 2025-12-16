import { motion } from "motion/react";
import { type ReactNode } from "react";

interface LetterAnimationProps {
  children: ReactNode;
  delay?: number;
  letterDelay?: number;
  duration?: number;
}

const LetterAnimation = ({
  children,
  delay = 0,
  letterDelay = 0.05,
  duration = 0.5,
}: LetterAnimationProps) => {
  const text = String(children);
  const letters = text.split("");

  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration,
            delay: delay + index * letterDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
            filter: {
              duration: duration * 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          }}
          style={{
            display: "inline-block",
            willChange: "transform, opacity, filter",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          layout={false}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
};

export default LetterAnimation;
