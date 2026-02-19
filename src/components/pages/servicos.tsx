import { logo, manutencao_imp, manutencao_notebook, manutencao_redes } from "../../assets";
import { Contatos } from "../../typtes/interfaces";
import Cards from "../cards";

export function Servicos() {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-4 w-full  p-5 ">
            <div className="mb-10" >
                <h1 className="md:inline  text-5xl font-bold mb-4 text-white bg-gradient-to-r from-indigo-600 to-pink-500 p-5 rounded-tr-xl rounded-bl-xl" >Conheça os nossos Serviços</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2">
            <div className=" p-5"> 
               
                <Cards className="h-auto min-h-[380px]">
                        <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Manutenção de Impressoras</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                        <div className="gap-6 p-6 items-center">
                        <p className="text-black text-start font-bold bg-purple-500/50 p-1 rounded-md">
                            Você sabia que a manutenção preventiva 
                            aumenta a vida útil das suas impressoras e evita paradas inesperadas?</p>
                            <p className="text-black text-start">
                             Com cuidados regulares, garantimos que seus equipamentos 
                            funcionem sempre com eficiência e produtividade.</p>
                        </div>
                        <img className="w-full h-64 md:h-80  shadow-md object-cover"
                        loading="lazy" 
                        src={manutencao_imp}
                         alt="" />
                         </div>
                         </a>
                </Cards>

            </div>
            <div className=" p-5">
                <Cards className="h-auto min-h-[380px]">
                    <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Infra estrutura de redes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" gap-6 p-6 items-center">
                    <p className="text-black text-start font-bold bg-purple-500/50 p-1 rounded-md">
                        Você sabia que uma rede bem estruturada reduz 
                        falhas e melhora a segurança da sua empresa?</p>
                        <p className="text-black text-start">
                        Nossa equipe projeta e mantém soluções de rede confiáveis 
                        para que você esteja sempre conectado sem preocupações
                    </p>
                    </div>
                    <img className="w-full h-64 md:h-80  shadow-md object-cover"
                    loading="lazy" 
                    src={manutencao_redes} 
                    alt="" />
                    </div>
                    </a>
                </Cards>
            </div>
            <div className=" p-5">
                <Cards className="h-auto min-h-[380px]">
                    <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Suporte Técnico</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" gap-6 p-6 items-center">
                    <p className="text-black text-start font-bold bg-purple-500/50 p-1 rounded-md">
                        Você sabia que pequenos ajustes e limpezas periódicas podem evitar grandes 
                        problemas em computadores e notebooks? </p>
                        <p className="text-black text-start">
                        Com nossa manutenção preventiva, seus equipamentos 
                        permanecem rápidos e seguros por muito mais tempo.
                    </p>
                    </div>
                    <img className="w-full h-64 md:h-80 object-cover shadow-md"
                    loading="lazy" 
                    src={manutencao_notebook} 
                    alt="" />
                    </div>
                    </a>
                </Cards>
            </div>
            <div className=" p-5">
                <Cards className="h-auto min-h-[380px]">
                    <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Contrato de suporte</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" gap-6 p-6 items-center">
                    <p className="text-black text-start font-bold bg-purple-500/50 p-1 rounded-md">
                        Você sabia que ter um contrato de manutenção garante suporte
                        contínuo e tranquilidade no dia a dia?</p>
                       <p className="text-black text-start">Com planos personalizados, sua empresa conta com atendimento 
                        rápido e redução de custos inesperados
                    </p>
                    </div>
                    <img className="w-full h-64 md:h-80 object-cover shadow-md"
                    loading="lazy" 
                    src={logo} 
                    alt="" />
                    </div>
                    </a>
                </Cards>
            </div>
            </div>
            
        </div>
    );
}