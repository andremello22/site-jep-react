import '../../styles/home_styles.css';
import Cards from '../cards';
import Formulario from '../formulario';

export default function Home() {
    return (
        <div className="flex flex-col w-full  ">
            <div className=' bg-blue-900 p-2 faixa-topo border-t-1'>
                
                    <h2>Bem vindos à J&P impressoras</h2>
                    <p>Trabalhando por você.</p>
                <div className='flex justify-center gap-4 mt-2'>
                    <small>contatos: </small>
                    <small><a href="https://wa.me/55999999999" target='_blank' rel='noopener noreferrer'>whatssapp: (21) 9 9999-9999</a></small>
                    <small><a href="tel:55999999999"  rel='noopener noreferrer'>tel: (21) 9 9999-9999</a></small>
                    <small><a href="mailto:2EYVw@example.com"  rel='noopener noreferrer'>email: 2EYVw@example.com</a></small>
                </div>


            </div>
            <div className='  p-10   gap-10'>
                <div className='flex justify-center  p-10'>
                    <Cards>
                         <h3 className='bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-2 rounded-t-md p-2'>Entre em contato conosco agora mesmo</h3>

                        <Formulario />
                    </ Cards>
                </div>
                <div className='border columns-3 p-10 '>
                    <div className='border'>img manut</div>
                    <div className='border'>img redes</div>
                    <div className='border'>img micro</div>
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