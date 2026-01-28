import { AnimacaoScroll } from "./utils/animacaoScroll";

export default function Cards({ children }: any) {
  return (
    
    <AnimacaoScroll
      className="
        w-full
        max-w-sm
        sm:max-w-md
        md:max-w-3xl
        lg:max-w-5xl
        xl:max-w-6xl
        mx-auto

        bg-gradient-to-r 
        from-indigo-300
        to-pink-500 
        p-[2px]
        rounded-xl

        shadow-[0_0_10px_rgba(99,102,241,0.6),0_0_15px_rgba(236,72,153,0.5)]

        transition-all
        duration-700
        ease-out

        hover:scale-[1.03]
        hover:-translate-y-2
        hover:shadow-[0_0_25px_rgba(99,102,241,0.8),0_0_40px_rgba(236,72,153,0.6)]
      "
    >
      <div className="w-full h-full bg-white rounded-xl overflow-hidden">
        {children}
      </div>
    </AnimacaoScroll>
 
  
  );
}
