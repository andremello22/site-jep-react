import { useInView } from "motion/react";
import { useRef } from "react";
import { variants } from "../typtes/animateTypes";
import type { AnimacaoScrollProps} from "../typtes/animateTypes";
import { motion } from "framer-motion";

export function AnimacaoScroll({ children, className }: AnimacaoScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

    return (
      <motion.div 
           ref={ref}
           className={className}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
                duration: 0.6,
                ease: "easeOut",
             }}
            >
        {children}
      </motion.div>
    );

}