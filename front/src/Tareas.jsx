import { useEffect } from "react";
import axios from 'axios';


function Tareas() {


    useEffect(() => {
        axios.get('http://localhost:3000/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className="h-screen items-center mt-44 justify-center">
            <div className="flex justify-cetner items-center">            
                <h2 className="text-3xl font-sans text-[#313131]">bootcamp fullstack | Cilsa</h2>
                <div className="w-44 ml-6 text-[#313131] rounded-full font-medium text-3xl">
                    <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-lg hover:bg-[#559933]">Agrear tarea</button>
                </div>
            </div>
            <div className="mt-12">
                <table className="bg-[#8FD14F] text-gray-700 border border-gray-300 rounded-2xl shadow-md">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-4 font-medium text-left">Nombre</th>
                            <th className="px-44 py-4 font-medium text-left">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tareas;