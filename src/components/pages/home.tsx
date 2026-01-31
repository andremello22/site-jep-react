import '../../styles/home_styles.css';
import {brother, canon, epson, hp, kyocera, lexmark, ricoh, konica, manutencao_imp, manutencao_redes, manutencao_notebook} from '../../assets/index.ts';
import { AnimacaoScroll } from '../utils/animacaoScroll.tsx';
import Cards from '../cards';
import Formulario from '../formulario';
import {type formulrio, Contatos } from '../../typtes/interfaces';
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

                   
                      <Cards className="h-auto">
                        <a
                            href={`https://wa.me/55999999999?text=${Contatos.mensagem_wa}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col h-full"
                        >
                            {/* Título */}
                            <h3 className="
                            flex
                            items-center
                            justify-center
                            h-1/4
                            text-xl
                            sm:text-2xl
                            bg-gradient-to-r
                            from-indigo-600
                            to-pink-500
                            text-white
                            p-3
                            rounded-t-md
                            text-center
                            ">
                            Manutenção de Impressoras
                            </h3>

                            {/* Imagem */}
                            <div className="w-full h-40 sm:h-48 overflow-hidden">
                            <img
                                src={manutencao_imp}
                                alt="manutenção de impressoras"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            </div>

                            {/* Texto */}
                            <p className="
                            flex-1
                            text-black
                            text-sm
                            sm:text-base
                            p-4
                            text-justify
                            sm:line-clamp-4
                            lg:line-clamp-5
                            ">
                            Realizamos manutenção preventiva e corretiva em impressoras jato de tinta e
                            laser, garantindo melhor qualidade de impressão, maior durabilidade dos
                            equipamentos e redução de custos.
                            </p>
                        </a>
                        </Cards>
                        <Cards className="h-32 sm:h-40 lg:h-48">
                                <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`} target='_blank' rel='noopener noreferrer'>
                                  <h3 className=" flex
                                    items-center
                                    justify-center
                                    text-xl
                                    h-1/4
                                    sm:text-2xl
                                    bg-gradient-to-r
                                    from-indigo-600
                                    to-pink-500
                                    text-white
                                    p-3
                                    rounded-t-md
                                    text-center
                                    " >Manutenção de Redes</h3>
                                <div className='w-full h-40 sm:h-48 overflow-hidden'>
                                   <img

                                    src={manutencao_redes}
                                    alt="manutenção de redes"
                                    loading="lazy"
                                    className="w-full h-full object-cover "
                                    />
                                </div>
                                    <p className="flex-1
                                    sm:line-clamp-4
                                    lg:line-clamp-5
                                    text-black
                                    text-sm
                                    sm:text-base
                                    p-4
                                    text-justify">
                                    Projetamos, configuramos e realizamos manutenção em redes cabeadas e Wi-Fi,
                                    garantindo conexão estável, segura e de alto desempenho. Evite quedas de
                                    internet e problemas de comunicação — conte com um suporte técnico
                                    especializado.
                                    </p>

                               
                            </a>
                        </Cards>
                        <Cards className="h-32 sm:h-40 lg:h-48">
                            <a href={`https://wa.me/55999999999?text=${ Contatos.mensagem_wa}`} target='_blank' rel='noopener noreferrer'>
                            <h3 className='
                                    h-1/4
                                    sm:text-2xl
                                    bg-gradient-to-r
                                    from-indigo-600
                                    to-pink-500
                                    text-white
                                    p-3
                                    rounded-t-md
                                    text-center'>manutenção de microcomputadores e notebooks</h3>
                            <div className='w-full h-40 sm:h-48 overflow-hidden'>
                            <img
                            src={manutencao_notebook}
                            alt="manutenção de microcomputadores"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            />
                            </div>
                            <p className="
                                    
                                    text-black
                                    sm:line-clamp-4
                                    lg:line-clamp-5
                                    text-sm
                                    sm:text-base
                                    p-4
                                    text-justify">
                            Fazemos manutenção preventiva e corretiva em desktops e notebooks para
                            melhorar o desempenho, evitar travamentos e prolongar a vida útil dos
                            equipamentos. Mantenha seu computador rápido, seguro e pronto para o dia a
                            dia.
                            </p>
                            
                            </a>
                        </Cards>
                    
                </div>
            </div>
                <div className="w-full  sm:px-6">

                    <AnimacaoScroll>
                            <h2
                                className="
                                text-white
                                font-semibold
                                text-center

                                text-xl
                                sm:text-2xl
                                md:text-3xl
                                lg:text-4xl
                                xl:text-5xl

                               
                                sm:p-5
                                md:p-6
                                lg:p-7

                                bg-gradient-to-r
                                from-indigo-600
                                to-pink-500
                                backdrop-blur-sm
                                rounded-tr-full
                                "
                            >
                                A 10 anos no mercado fornecendo soluções inteligentes
                            </h2>
                         </AnimacaoScroll>
                         <AnimacaoScroll>
                            <h2
                                className="
                                text-white
                                font-semibold
                                text-center

                                text-xl
                                sm:text-2xl
                                md:text-3xl
                                lg:text-4xl
                                xl:text-5xl

                                p-4
                                sm:p-5
                                md:p-6
                                lg:p-7

                                bg-purple-800

                                
                                backdrop-blur-sm
                                "
                            >
                                Trabalhamos com as melhores práticas do mercado
                            </h2>
                            </AnimacaoScroll>
                            <AnimacaoScroll>
                            <h2
                                className="
                                block
                                text-white
                                font-semibold
                                text-center

                                text-xl
                                sm:text-2xl
                                md:text-3xl
                                lg:text-4xl
                                xl:text-5xl

                                p-4
                                sm:p-5
                                md:p-6
                                lg:p-7

                                bg-indigo-800
                                rounded-bl-full
                               
                                shadow-lg
                                backdrop-blur-sm
                                "
                            >
                                Conheça os nossos serviços
                            </h2>
                            </AnimacaoScroll>
                        </div>


                <div className="w-full mt-10 px-3 sm:px-6 lg:px-10 mb-10">

                     {/* Título */}
                    <div className="flex justify-center mb-8">
                        <div
                        className="
                            w-full
                            sm:w-3/4
                            md:w-2/3
                            lg:w-1/2

                            grid place-items-center

                            bg-purple-800
                            rounded-tr-full
                            rounded-bl-full

                            border-2
                            border-indigo-400

                            p-4
                            sm:p-6
                            md:p-8

                            shadow-md
                            shadow-indigo-400/50
                        "
                        >
                        <h3
                            className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl

                            font-bold

                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-blue-200
                            to-pink-400
                            text-center
                            
                            "
                        >
                            Nossos Parceiros
                        </h3>
                        </div>
                    </div>

                    {/* Grid Logos */}
                    <div
                        className="
                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-8

                        gap-4
                        sm:gap-6
                        "
                    >

                        {/* CARD PADRÃO */}
                    {   [
                        { img: hp, link: "https://www.hp.com/br-pt", alt: "HP" },
                        { img: epson, link: "https://www.epson.com.br", alt: "Epson" },
                        { img: canon, link: "https://www.canon.com.br", alt: "Canon" },
                        { img: brother, link: "https://www.brother.com.br", alt: "Brother" },
                        { img: kyocera, link: "https://brazil.kyocera.com/", alt: "Kyocera" },
                        { img: lexmark, link: "https://www.lexmark.com/pt_br.html", alt: "Lexmark" },
                        { img: ricoh, link: "https://www.ricoh-americalatina.com/pt-br", alt: "Ricoh" },
                        { img: konica, link: "https://www.konicaminolta.com/br-pt/index.html", alt: "Konica" },
                        ].map((item, index) => (
                        <Cards
                            key={index}
                            className="
            
                            h-28
                            sm:h-32
                            md:h-36
                            lg:h-40

                            flex
                            items-center
                            justify-center
                            "
                        >
                            <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center"
                            >
                            <img
                                src={item.img}
                                alt={`logo ${item.alt}`}
                                loading="lazy"
                                className="
                                max-w-[80%]
                                max-h-[80%]
                                object-contain
                                transition-transform
                                duration-300
                                hover:scale-110
                                "
                            />
                            </a>
                        </Cards>
                        ))}

                    </div>

                    </div>

        </div>
       
    )
}