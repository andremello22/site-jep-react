import Cabecalho from "./cabecalho" 
import Rodape from "./rodape"
import { Outlet } from "react-router-dom";
import { Mapa } from "./mapa";
import { IconWhatsApp } from "./iconWhatsApp";





function Layout() {

    return(
        <div  className="flex flex-col min-h-screen">
        <Cabecalho />
        <main className="flex-grow">
            <Outlet/>
            
            <IconWhatsApp />       

        </main>
        <Mapa />
        <Rodape />
        </ div>
    )

}export default Layout