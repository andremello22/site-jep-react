import icoWhats from "../assets/iconWhats.svg"


export function IconWhatsApp() {

    return (

         <a
            href="https://wa.me/5521979445181"
            target="_blank"
            rel="noopener noreferrer"
            className="
                animate-bounce
                fixed
                bottom-6
                right-6
                z-50
                bg-green-500
                hover:bg-green-600
                text-white
                p-3
                rounded-full
                shadow-lg
                transition
                duration-300
                hover:scale-110
            "
            >
            <img className="w-10 h-10 hover:scale-110 transition" src={icoWhats} alt="" />
            </a>
    )
}