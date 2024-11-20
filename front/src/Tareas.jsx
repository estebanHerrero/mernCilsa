import { useEffect, useState } from "react";
import axios from 'axios';


function Tareas() {

    const [tareas, setTareas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/')
        .then(res => {
            setTareas(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div className="h-screen items-center mt-44 justify-center">
            <div className="flex justify-cetner items-center">            
                <h2 className="text-3xl font-sans text-[#313131]">bootcamp fullstack | Cilsa</h2>
                <div className="w-44 ml-6 text-[#313131] rounded-full font-medium text-3xl">
                    <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-xl hover:bg-[#559933]">Agrear tarea</button>
                </div>
            </div>
            <div className="mt-12">
                <table className="text-[#313131] border border-gray-400 shadow-md table">
                    <thead>
                        <tr className="bg-gray-400">
                            <th className="px-6 py-4 font-medium text-center text-xl text-[#313131]">Nombre</th>
                            <th className="px-6 py-4 font-medium text-center text-xl text-[#313131]">Descripción</th>
                            <th className="px-6 py-4 font-medium text-center text-xl text-[#313131">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tareas.map((data, i) => (
                            <tr key={data.id || i}> {/* Use data.id if available, otherwise use index */}
                                <td className="pr-40 text-left">{data.nombre}</td>
                                <td className="pr-40 text-left">{data.descripcion}</td>
                                <td>
                                <div className="flex justify-between items-center"> {/* Added a flex container */}
                                        <button className="text-[#313131] border border-[#313131] hover:border-0 mr-8 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-lg hover:bg-[#7a9cfa]">Update</button>
                                        <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-lg hover:bg-[#fc2121]">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tareas;