import { useState, useEffect } from "react";



function Tareas() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ nombre: "", descripcion: ""});
   
 

    const [error, setError] = useState(null);
    const [isAddingTask, setIsAddingTask] = useState(false);

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const addTask = async (event) => {
        event.preventDefault();
        setIsAddingTask(true);

        try {
            const response = await fetch('http://localhost:3000/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask),
            });

            if (!response.ok) {
                throw new Error(`Error agregando tarea: ${response.statusText}`);
            }

            const newTaskData = await response.json();
            setTasks([ ...tasks, newTaskData]);
            setNewTask({ nombre: "", descripcion: "" });
            setError(null);
        }catch (error) {
            console.error("Error agregando tarea:", error);
            setError("Ocurrió un error mientras se agregaba la nueva tarea.");
        } finally {
            setIsAddingTask(false);
        }
    };
        
   
    const handleDeleteTask = async (taskId) => {
        try {
          const response = await fetch(`http://localhost:3000/tareas/${taskId}`, {
            method: "DELETE",
          });
      
          if (!response.ok) {
            throw new Error(`Error eliminando la tarea: ${response.statusText}`);
          }
      
          setTasks(tasks.filter((task) => task.idTarea !== taskId)); 
          setError(null);
        } catch (error) {
          console.error("Error eliminando la tarea:", error);
          setError("Ocurrió un error mientras se eliminaba la tarea.");
        }
      };

    return (
        <div className="h-screen bg-gray-200">
            <div className="flex flex-col  h-screen justify-center items-center">
                <div className="mb-12">            
                    <h2 className="text-3xl font-sans text-[#313131]">bootcamp fullstack | Cilsa</h2>
                </div>
                <form onSubmit={addTask}>
                    <div className="flex gap-6">
                        <input 
                            type="text" 
                            name="nombre"
                            placeholder="Ingresá el nombre" 
                            className="w-64 p-2 pr-20 outline-[#8FD14F] border border-[#8FD14F]"
                            value={newTask.nombre}
                            onChange={handleInputChange}
                            required 
                        />
                        <input 
                            type="text" 
                            name="descripcion"
                            placeholder="Ingresá la descripción" 
                            className="w-64 p-2 outline-[#8FD14F] border border-[#8FD14F]" 
                            value={newTask.descripcion}
                            onChange={handleInputChange}
                            required
                        />
                        <button className={`text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-xl hover:bg-[#559933] ${isAddingTask ? "disabled opacity-50 cursor-not-allowed" : "" }`}
                        disabled={isAddingTask}
                        >{isAddingTask ? "Agregando..." : "Agregar tarea"}</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
                <div className="mt-20">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tasks.map((task) => (
                            <tr key={task.idTarea}>
                                <td className="px-6 py-4 whitespace-nowrap">{task.nombre}</td>  
                                <td className="px-6 py-4 whitespace-nowrap">{task.descripcion}</td>
                                <td className="text-right px-2">
                                    <button className="hover:bg-blue-400 mr-4 border border-[#313131] text-[#313131] text-lg hover:border-0 font-sans font-medium py-2 px-5 rounded-2xl">Editar</button>
                                    <button className="hover:bg-red-400 border border-[#313131] text-[#313131] text-lg hover:border-0 font-sans font-medium py-2 px-5 rounded-2xl"
                                    onClick={() => handleDeleteTask(task.idTarea)}
                                    >Eliminar</button>
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