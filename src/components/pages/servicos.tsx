import { logo, manutencao_imp, manutencao_notebook, manutencao_redes } from "../../assets";
import Cards from "../cards";

export function Servicos() {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-4 w-full  p-5 ">
            <div className="mb-10" >
                <h1 className="inline text-5xl font-bold mb-4 text-white bg-gradient-to-r from-indigo-600 to-pink-500" >Conheça os nossos Serviços</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2">
            <div className=" p-5"> 
               
                <Cards>
                        <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Manutenção de Impressoras</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                        <div className="gap-6 p-6 items-center">
                        <p className="text-black">Realizamos manutenção preventiva e corretiva em impressoras de todos os modelos. Nossa equipe técnica especializada garante o funcionamento ideal dos equipamentos, evitando interrupções e garantindo a produtividade da sua empresa.</p>
                        </div>
                        <img className="w-full h-64 md:h-80  shadow-md object-cover"
                        loading="lazy" 
                        src={manutencao_imp}
                         alt="" />
                         </div>
                </Cards>

            </div>
            <div className=" p-5">
                <Cards>
                    <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Infra estrutura de redes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" gap-6 p-6 items-center">
                    <p className="text-black">
                        Oferecemos serviços de infraestrutura de redes para garantir que sua 

                    </p>
                    </div>
                    <img className="w-full h-64 md:h-80  shadow-md object-cover"
                    loading="lazy" 
                    src={manutencao_redes} 
                    alt="" />
                    </div>
                </Cards>
            </div>
            <div className=" p-5">
                <Cards>
                    <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Suporte Técnico</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" gap-6 p-6 items-center">
                    <p className="text-black">Oferecemos suporte técnico especializado para resolver problemas de hardware e software em equipamentos de informática. Nossa equipe está pronta para atender suas necessidades, garantindo o funcionamento ideal dos equipamentos e a continuidade das operações da sua empresa.</p>
                    </div>
                    <img className="w-full h-64 md:h-80 object-cover shadow-md"
                    loading="lazy" 
                    src={manutencao_notebook} 
                    alt="" />
                    </div>
                </Cards>
            </div>
            <div className=" p-5">
                <Cards>
                    <h3 className="flex items-center justify-center h-1/4 text-xl sm:text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-3 rounded-t-md text-center">Contrato de suporte</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" gap-6 p-6 items-center">
                    <p className="text-black"> Nossa equipe de suporte tecnico especializado esta pronta para atender suas necessidades, garantindo o funcionamento ideal dos equipamentos e a continuidade das operacoes da sua empresa</p>
                    </div>
                    <img className="w-full h-64 md:h-80 object-cover shadow-md"
                    loading="lazy" 
                    src={logo} 
                    alt="" />
                    </div>
                </Cards>
            </div>
            </div>
            
        </div>
    );
}