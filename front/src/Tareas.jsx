import { useState, useEffect } from "react";



function Tareas() {

    const [tasks, setTasks] = useState([]);
   


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/');
                const data = await response.json();
                setTasks(data);
            }catch (error) {
                console.error(' Error fetchin tasks:', error);
            }
        };
        fetchTasks();
    }, []);
        

    return (
        <div className="h-screen bg-gray-200">
            <div className="flex flex-col  h-screen justify-center items-center">
                <div className="mb-12">            
                    <h2 className="text-3xl font-sans text-[#313131]">bootcamp fullstack | Cilsa</h2>
                </div>
                <div className="flex gap-6">
                    <input 
                        type="text" 
                        placeholder="Ingresá el nombre" 
                        className="w-64 p-2 pr-20 outline-[#8FD14F] border border-[#8FD14F]" 
                    />
                    <input 
                        type="text" 
                        placeholder="Ingresá la descripción" 
                        className="w-64 p-2 outline-[#8FD14F] border border-[#8FD14F]" 
                    />
                    <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-xl hover:bg-[#559933]">Agrear tarea</button>
                </div>
                <div className="mt-20">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                <th className="px-6 py-3 bg-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tasks.map((task) => (
                            <tr key={task.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{task.nombre}</td>  
                                <td className="px-6 py-4 whitespace-nowrap">{task.descripcion}</td>
                                <td className="text-right px-2">
                                    <button className="hover:bg-blue-400 mr-4 border border-[#313131] text-[#313131] text-lg hover:border-0 font-sans font-medium py-2 px-5 rounded-2xl">Editar</button>
                                    <button className="hover:bg-red-400 border border-[#313131] text-[#313131] text-lg hover:border-0 font-sans font-medium py-2 px-5 rounded-2xl">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tareas;