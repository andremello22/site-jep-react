import { Link } from "react-router-dom";
import Cards from "../cards";

export function Sobre() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full  p-5 mt-10">
            <div className=" p-5">
                <Cards className="h-auto min-h-[380px]">
                    <h1 className='text-4xl font-extrabold mb-4 text-white bg-gradient-to-r from-indigo-600 to-pink-500 p-5' >Sobre nós</h1>
                    <p className="text-black text-start mb-4 p-2">
                     &nbsp;&nbsp;&nbsp;&nbsp;   A <p className="font-bold inline">J&P Impressoras</p> é uma empresa de tecnologia com mais de 10 anos de atuação no mercado de serviços,
                         situada na Ilha do Governador, Rio de Janeiro. Ao longo dessa trajetória, 
                         conquistamos a confiança de nossos clientes oferecendo soluções eficientes 
                        e inovadoras para manutenção e suporte em equipamentos de informática e impressão.

                    </p>
                    <p className="text-black text-start mb-4 p-2">
                        &nbsp;&nbsp;&nbsp;&nbsp; Nossa missão é contribuir com o desenvolvimento da comunidade em que estamos inseridos, 
                        promovendo acesso a serviços de qualidade e fortalecendo a produtividade das empresas que atendemos.
                         Acreditamos que a tecnologia deve ser uma aliada no crescimento sustentável,
                         e por isso trabalhamos com dedicação, responsabilidade e foco em resultados.

                    </p>
                    <p className="text-black text-start mb-4 p-2">
                        &nbsp;&nbsp;&nbsp;&nbsp;Mais do que prestar serviços, buscamos construir relacionamentos duradouros,
                         pautados na confiança e na excelência. 
                         A <p className="font-bold inline">J&P Impressoras</p> é movida pelo compromisso de oferecer sempre o melhor, 
                        ajudando nossos clientes a alcançar seus objetivos com tranquilidade e segurança.
                    </p>
                </Cards>

            </div>
            <Link to={"/pages/home"} className="m-auto bg-purple-500/50 font-extrabold text-2xl text-white border outline p-3 rounded-md  transition delay-300 duration-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-600 mb-10"> Voltar para página principal </Link>
        </div>
    );
}