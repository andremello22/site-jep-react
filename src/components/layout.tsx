import Cabecalho from "./cabecalho" 
import icoWhats from "../assets/iconWhats.svg"
import Rodape from "./rodape"
import { Outlet } from "react-router-dom";





function Layout() {

    return(
        <div  className="flex flex-col min-h-screen">
        <Cabecalho />
        <main className="flex-grow">
            <Outlet/>
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

        </main>
        <Rodape />
        </ div>
    )

}export default Layout