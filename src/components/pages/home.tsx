import '../../styles/home_styles.css';
import Cards from '../cards';
import Formulario from '../formulario';
import { type formulrio, Contatos } from '../typtes/interfaces';
import { useState } from 'react';

export default function Home() {
    
    const initFormulario :formulrio = {
        nome : "",
        telefone : 0,
        wa : false,
        email : "",
        servico : ""
    }
    const[formulario, setFormualio] = useState<formulrio>(initFormulario)


    return (
        <div className="flex flex-col w-full  ">
           
            
            <div className=' p-10 flex-col w-full justify-center items-center '>
                <div className='"w-full max-w-4xl mx-auto px-4 md:px-10'>
                    <Cards className="grid grid-cols-1 md:grid-cols-2
                                        gap-4
                                        w-full
                                        p-5
                                        rounded-xl">
                        <h3 className='bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>Entre em contato conosco agora mesmo</h3>

                        <Formulario />
                    </ Cards>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>

                   
                        <Cards className="h-32 sm:h-40 lg:h-48">
                            <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`} target='_blank' rel='noopener noreferrer'>
                             <h3 className='h-1/7 bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>Manutenção de Impressoras</h3>
                                <p className='h-30 text-start text-black m-2 text-sm'> Realizamos manutenção preventiva e corretiva em impressoras jato de tinta e
  laser, garantindo melhor qualidade de impressão, maior durabilidade dos
  equipamentos e redução de custos com paradas inesperadas. Agende uma visita
  técnica e mantenha sua impressora sempre em perfeito funcionamento.</p>
                            <img
                            
                            src="src\assets\manutencao-imp.jpg"
                            alt="manutenção de impressoras"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            />
                            </a>
                        </Cards>
                        <Cards className="h-32 sm:h-40 lg:h-48">
                                <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`} target='_blank' rel='noopener noreferrer'>
                                <h3 className='h-1/7 bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>Manutenção de Redes</h3>
                                    <p className="h-30 text-start text-black m-2 text-sm">
                                    Projetamos, configuramos e realizamos manutenção em redes cabeadas e Wi-Fi,
                                    garantindo conexão estável, segura e de alto desempenho. Evite quedas de
                                    internet e problemas de comunicação — conte com um suporte técnico
                                    especializado.
                                    </p>

                                <img

                            src="src\assets\manutencao-redes.jpg"
                            alt="manutenção de redes"
                            loading="lazy"
                            className="w-full h-full object-cover "
                            />
                            </a>
                        </Cards>
                        <Cards className="h-32 sm:h-40 lg:h-48">
                            <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`} target='_blank' rel='noopener noreferrer'>
                            <h3 className='h-1/7 bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>manutenção de microcomputadores e notebooks</h3>
                            <p className="h-30 text-start text-black m-2 text-sm">
                            Fazemos manutenção preventiva e corretiva em desktops e notebooks para
                            melhorar o desempenho, evitar travamentos e prolongar a vida útil dos
                            equipamentos. Mantenha seu computador rápido, seguro e pronto para o dia a
                            dia.
                            </p>

                            <img
                            src="src\assets\manutencao-notebook.jpg"
                            alt="manutenção de microcomputadores"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            />
                            </a>
                        </Cards>
                    
                </div>
            </div>
            <div className=' w-full class-faixa-imp'></div>


            <div className='box-content w-full mt-10  '>
                <div className="flex justify-center">
                        <div className="w-1/2 grid place-items-center bg-purple-800 rounded-tr-full rounded-bl-full border-[2px] border-indigo-400 p-10 mb-6 mt-6 shadow-md shadow-indigo-400/50">
                            <h3 className="text-6xl  z-[9] text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-400">Nossos Parceiros</h3>
                        </div>
                </div>
            <div className='grid grid-cols-4'>
                
                <div className=' m-1 p-2'>
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\hp.jfif"
                            alt="logo hp"
                            loading="lazy"
                            className="w-full h-32 object-cover"
                            />
                    </Cards>
                </div>
                <div className="m-1 p-2">
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\epson.png"
                            alt="logo epson"
                            loading="lazy"
                            className="w-full h-32  object-cover"
                            />
                    </Cards>
                </div>
                <div className="m-1 p-2">
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\canon.png"
                            alt="logo canon"
                            loading="lazy"
                            className="w-full h-32  object-cover"
                            />
                    </Cards>
                </div>
                <div className="m-1 p-2">
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\brother.png"
                            alt="logo brother"
                            loading="lazy"
                            className="w-full h-32 object-cover"
                            />
                    </Cards>
                </div>

                <div className="m-1 p-2">
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\kyocera.png"
                            alt="logo kyocera"
                            loading="lazy"
                            className="w-full h-32 object-cover"
                            />
                    </Cards>
                </div>

                <div className="m-1 p-2">
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\lexmark.png"
                            alt="logo lexmark"
                            loading="lazy"
                            className="w-full h-32 object-cover"
                            />
                    </Cards>
                </div>

                <div className="m-1 p-2">
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\ricoh.png"
                            alt="logo ricoh"
                            loading="lazy"
                            className="w-full h-32 object-cover"
                            />
                    </Cards>
                </div>


                
                <div className="m-1 p-2">
                    <Cards className="h-32 sm:h-40 lg:h-48">
                            <img
                            src="src\assets\konica.png"
                            alt="logo konica"
                            loading="lazy"
                            className="w-full h-32 object-cover"
                            />
                    </Cards>
                </div>

            </div>
          </div>
        </div>
       
    )
}