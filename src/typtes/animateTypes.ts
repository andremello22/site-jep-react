
export type AnimacaoScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export const variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
