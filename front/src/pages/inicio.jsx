import Beneficios from '../components/Beneficios.jsx';
import ByeChelloP from '../components/ByeChelloP.jsx';
import Nuestrapp from '../components/Nuestrapp.jsx';
import { Link } from 'react-router-dom';
import Testimonios from '../Testimonios.jsx';


function Inicio()  {
    return (
    <div>
        <div className="grid grid-cols-2 row-span-2 pt-32 h-screen">
            <div className="h-screen justify-center items-center">
                <h1 className="text-5xl mt-20 font-sans font-thin tracking-wider text-[#313131]">Disfrutá tu experiencia académica que nosotros te la organizamos.</h1>
                <Link to='Registrate'>
                    <button className="text-[#313131] border-[#313131] hover:border-0 border tracking-wide font-sans font-medium py-3 px-5 rounded-2xl mt-20 text-3xl hover:bg-[#559933]">Registrate</button>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[600px]">
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-[#DFEE06] rounded-2xl"></div>
                    <div className="bg-[#8FD14F] rounded-2xl"></div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="row-span-2 bg-[#9783FD] rounded-2xl"></div>
                </div>
            </div>
        </div>
        <div className="w-full  h-screen justify-center items-center flex"> 
            <h2 className="text-4xl font-sans fonr-semibold text-[#313131]">Mindnote es tu compañero digital para organizar tus estudios  y tareas. Crea tableros personalizados, establece recordatorios y mantené todo bajo control. ¡Aumentá tu productividad y reducí el estrés!</h2>
        </div>
        <ByeChelloP />
        <Beneficios />
        <Testimonios />
        <Nuestrapp />
    </div>
)}


export default Inicio;