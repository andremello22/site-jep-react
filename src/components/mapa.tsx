import { AnimacaoScroll } from "./utils/animacaoScroll";
export function Mapa(){
    return(
        <AnimacaoScroll>
            <div className="w-full flex flex-col items-center justify-center h-[350px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg mb-10">
                <h4 className="text-4xl mb-2">Estamos aqui</h4>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.820234847202!2d-43.189694!3d-22.809124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99781e7df0c8a9%3A0x3b3a3c109d5f0133!2sR.%20Inambi%20-%20Jardim%20Carioca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021921-620!5e0!3m2!1spt-BR!2sbr!4v1769899382876!5m2!1spt-BR!2sbr"
                className="w-150 h-125 border-0 rounded-lg font-extrabold"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
            </div>
            </AnimacaoScroll>
    )
}