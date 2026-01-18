import Cabecalho from "./cabecalho" 
import Rodape from "./rodape"
import { Outlet } from "react-router-dom";





function Layout() {

    return(
        <div  className="flex flex-col min-h-screen">
        <Cabecalho />
        <main className="flex-grow">
            <Outlet/>
        </main>
        <Rodape />
        </ div>
    )

}export default Layout