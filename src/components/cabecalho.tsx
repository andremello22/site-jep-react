import { useState } from 'react';
import '../styles/cabecalho_style.css';
import { Link } from 'react-router-dom';
import {Contatos} from "../components/typtes/interfaces";

export default function Cabecalho() {
    const [open, setOpen] = useState(false);
    const contatos = Contatos
    return (
        <>
        <header
            id="cabecalho"
            className=" w-full p-3  bg-gradient-to-r from-indigo-600 to-pink-500 shadow-md sticky top-0 z-[9999]"
        >
            <div className="  max-w-7xl mx-auto flex justify-around items-center p-4px-4 sm:px-6 lg:px-8  h-20">

                {/* Logo e Nome */}
                <div className="flex items-center gap-4 min-w-fit flex-shrink-0">
                    <Link to="/" aria-label="Ir para a página inicial">
                        <img
                            src="./src/assets/logo.png"
                            alt="Logo da J&P Impressoras"
                            loading="lazy"
                            className="w-28 h-14 sm:w-32 sm:h-16 lg:w-40 lg:h-20 object-contain p-1"
                               
                        />
                    </Link>

                   


                    
                </div>

                

                {/* Navegação */}
                <nav className="flex justify-between items-center pl-4 pr-4">
                    {/* Desktop */}
                    <div className="hidden lg:block pl-4 pr-4">
                        <ul className="flex items-center gap-8 pl-4 pr-4">
                            <li className='pl-4 pr-8'><Link to="/" className="text-white hover:text-indigo-200 transition-colors font-medium">Home</Link></li>
                            <li className='pl-4 pr-8'><Link to="/pages/servicos" className="text-white hover:text-indigo-200 transition-colors font-medium">Serviços</Link></li>
                            <li className='pl-4 pr-8'><Link to="/pages/sobre" className="text-white hover:text-indigo-200 transition-colors font-medium">Sobre nós</Link></li>
                        </ul>
                    </div>

                    {/* Botão Mobile */}
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menu de navegação"
                        aria-expanded={open}
                        aria-controls="menu-mobile"
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Menu Mobile */}
            <div
                id="menu-mobile"
                className={`${open ? 'block' : 'hidden'} lg:hidden bg-indigo-700 border-t border-white/10`}
            >
                <ul className="flex flex-col p-4 space-y-4 text-center">
                    <li><Link to="/" className="text-white block py-2">Home</Link></li>
                    <li><Link to="/pages/servicos" className="text-white block py-2">Serviços</Link></li>
                    <li><Link to="/pages/sobre" className="text-white block py-2">Sobre nós</Link></li>
                </ul>
            </div>
        </header>
        <div className='w-full h-[3px] bg-gradient-to-r from-pink-600 to-indigo-500'></div>
         <div className=' bg-blue-900 p-2 faixa-topo  shadow-md shadow-indigo-900/50'>
                       
                                <h1 className='font-medium text-2xl'>Bem vindos à J&P impressoras</h1>
                                <p>Trabalhando por você.</p>
                                <p>Conheça os nossos serviços, entre em contato com a nossa equipe 
                                    para mais informações e orçamentos.</p>
                                
                            <div className='flex justify-center gap-4 mt-2 '>
                                <span>contatos: </span>
                                    <span ><a className=' inline-block
                                            underline
                                            text-md
                                            text-white-700
                                            transition-all
                                            duration-300
                                            hover:bg-gradient-to-r
                                            hover:from-indigo-600
                                            hover:to-pink-500
                                            hover:bg-clip-text
                                            hover:text-transparent' 
                                            href={contatos.wa} 
                                            target='_blank' 
                                            rel='noopener noreferrer'>whatssapp: {contatos.wa}</a></span>
                                <span ><a className=' inline-block
                                            underline
                                            text-md
                                            text-white-700
                                            transition-all
                                            duration-300
                                            hover:bg-gradient-to-r
                                            hover:from-indigo-600
                                            hover:to-pink-500
                                            hover:bg-clip-text
                                            hover:text-transparent' 
                                            href={contatos.cel}
                                            rel='noopener noreferrer'>{contatos.cel}</a></span>
                                <span ><a className=' inline-block
                                            underline
                                            text-md
                                            text-white-700
                                            transition-all
                                            duration-300
                                            hover:bg-gradient-to-r
                                            hover:from-indigo-600
                                            hover:to-pink-500
                                            hover:bg-clip-text
                                            hover:text-transparent' 
                                            href={contatos.link_email}  
                                            rel='noopener noreferrer'>email: {contatos.email}</a></span>
                            </div>
        
        
                    </div>
        
        
        </>
    );
}
