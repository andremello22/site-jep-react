
export type AnimacaoScrollProps = {
  children: React.ReactNode;
  className?: string;
};


export const variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    className: ""
  },
};