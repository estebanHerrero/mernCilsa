import byecaos from '../assets/byeChelloP/byecaos.png';
import hellop from '../assets/byeChelloP/hellop.png';
import btnCursos from '../assets/byeChelloP/btnCursos.png';

function ByeChelloP() {
    return (
        <div className="grid grid-cols-2 h-screen mt-32">
            <div className="">
                <h3 className="text-4xl font-sans text-[#313131]">bye caos</h3>
                <div className='flex justify-center'>
                    <img src={byecaos} alt="" />
                </div>
            </div>
            <div className="mt-44">
                <h3 className="text-4xl font-sans text-[#313131]">hello productividad</h3>
                <div className='justify-center'>
                    <img src={btnCursos} alt="" />
                    <img src={hellop} alt="" className='w-full h-auto' />
                </div>
            </div>
        </div>
    );
}

export default ByeChelloP;