import '../../styles/home_styles.css';
import Cards from '../cards';
import Formulario from '../formulario';

export default function Home() {
    return (
        <div className="flex flex-col w-full  ">
            <div className=' bg-blue-900 p-2 faixa-topo border-t-1'>
                
                    <h1 className='font-medium text-2xl'>Bem vindos à J&P impressoras</h1>
                    <p>Trabalhando por você.</p>
                <div className='flex justify-center gap-4 mt-2 '>
                    <span>contatos: </span>
                        <span ><a className=' inline-block
                                font-medium
                                text-white-700
                                transition-all
                                duration-300
                                hover:bg-gradient-to-r
                                hover:from-indigo-600
                                hover:to-pink-500
                                hover:bg-clip-text
                                hover:text-transparent' 
                                href="https://wa.me/55999999999" 
                                target='_blank' 
                                rel='noopener noreferrer'>whatssapp: (21) 9 9999-9999</a></span>
                    <span ><a className=' inline-block
                                font-medium
                                text-white-700
                                transition-all
                                duration-300
                                hover:bg-gradient-to-r
                                hover:from-indigo-600
                                hover:to-pink-500
                                hover:bg-clip-text
                                hover:text-transparent' 
                                 href="tel:55999999999"  
                                 rel='noopener noreferrer'>tel: (21) 9 9999-9999</a></span>
                    <span ><a className=' inline-block
                                font-medium
                                text-white-700
                                transition-all
                                duration-300
                                hover:bg-gradient-to-r
                                hover:from-indigo-600
                                hover:to-pink-500
                                hover:bg-clip-text
                                hover:text-transparent' 
                                 href="mailto:2EYVw@example.com"  
                                 rel='noopener noreferrer'>email: 2EYVw@example.com</a></span>
                </div>


            </div>

            
            <div className=' p-10   '>
                <div className='w-full  justify-center ml-1  p-10'>
                    <Cards>
                         <h3 className='bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>Entre em contato conosco agora mesmo</h3>

                        <Formulario />
                    </ Cards>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10'>

                   
                        <Cards className="h-32 sm:h-40 lg:h-48">
                             <h3 className='bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>Manutenção de Impressoras</h3>

                            <img
                            
                            src="src\assets\manutencao-imp.jpg"
                            alt="manutenção de impressoras"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            />
                        </Cards>
                        <Cards className="h-32 sm:h-40 lg:h-48">
                                <h3 className='bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>Manutenção de Redes</h3>

                                <img

                            src="src\assets\manutencao-redes.jpg"
                            alt="manutenção de redes"
                            loading="lazy"
                            className="w-full h-full object-cover "
                            />
                        </Cards>
                        <Cards className="h-32 sm:h-40 lg:h-48">
                            <h3 className='bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>manutenção de microcomputadores e notebooks</h3>

                            <img
                            src="src\assets\manutencao-notebook.jpg"
                            alt="manutenção de microcomputadores"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            />
                        </Cards>
                    
                </div>
            </div>
            faixa de img
            <div className='border grid grid-cols-4 p-10'>
                <div className='border'>parceiros</div>
                <div className="border">parceiros</div>
                <div className="border">parceiros</div>
                <div className="border">parceiros</div>
            </div>
        </div>
       
    )
}