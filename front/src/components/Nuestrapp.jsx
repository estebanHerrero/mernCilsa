import nuestrapp from '../assets/app/nuestrapp.png';



function Nuestrapp() {
    return (
        <div className='grid grid-cols-2 pt-32 pb-32'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-5xl text-[#313131] font-sans mx-2">Tu asistente personal para el éxito académico.</h1>
                <div className='flex items-center justify-center'>
                    <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 mr-3 rounded-2xl mt-20 text-3xl hover:bg-[#559933]">Play Store</button>
                    <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl mt-20 text-3xl hover:bg-[#559933]">App Store</button>
                </div>
            </div>
            <div className='grid-cols-1 flex items-center justify-center'>
                <img src={nuestrapp} alt="" className='h-[700px] border-2 border-[#313131] rounded-3xl w-auto shadow-lg' />
            </div>
        </div>
    );
}


export default Nuestrapp;
