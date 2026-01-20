import { useState } from 'react';
import '../styles/cabecalho_style.css';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    const [open, setOpen] = useState(false);

    return (
        <header
            id="cabecalho"
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 shadow-md sticky top-0 z-[9999]"
        >
            <div className=" max-w-7xl mx-auto flex justify-between items-center p-0 m-0 px-4 sm:px-6 lg:px-8">

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

                    <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-tight whitespace-nowrap">
                        J&P <span className="font-light text-indigo-100">Impressoras</span>
                    </h1>


                    
                </div>

                

                {/* Navegação */}
                <nav className="flex items-center">
                    {/* Desktop */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-8">
                            <li><Link to="/" className="text-white hover:text-indigo-200 transition-colors font-medium">Home</Link></li>
                            <li><Link to="/servicos" className="text-white hover:text-indigo-200 transition-colors font-medium">Serviços</Link></li>
                            <li><Link to="/sobre" className="text-white hover:text-indigo-200 transition-colors font-medium">Sobre nós</Link></li>
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
                    <li><Link to="/servicos" className="text-white block py-2">Serviços</Link></li>
                    <li><Link to="/sobre" className="text-white block py-2">Sobre nós</Link></li>
                </ul>
            </div>
        </header>
    );
}
