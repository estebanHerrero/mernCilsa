import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



function Tareas() {

    const [filter, setFilter] = useState({});
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ nombre: "", descripcion: ""});
    const [error, setError] = useState(null);
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [selectedTasks, setSelectedTasks] = useState({});


    const handleCheckboxChange = async (taskId) => {
        setSelectedTasks((prevSelectedTasks) => ({
          ...prevSelectedTasks,
          [taskId]: !prevSelectedTasks[taskId], 
        }));
        
        const newState = selectedTasks[taskId] ? 'Finalizada' : 'Pendinte';
        const updatedTasks = tasks.map(task => {
            if (task.idTarea === taskId) {
              return { ...task, estado: newState }; 
            }
            return task;
          });
          
          setTasks(updatedTasks);


        try {
            console.log('Updating task:', taskId, newState);
            const response = await axios.put(`http://localhost:3000/tareas/${taskId}`, {
                estado: newState,
            });
            if (response.status === 200) {
               
                setTasks(tasks.map(task => {
                  if (task.idTarea === taskId) {
                    return { ...task, estado: newState };
                  }
                  return task;
                }));
            console.log('El estado de la tarea se actualizó exitosamente:', response.data);
            }else {
                console.error('Error al actualizar el estado de la tarea:', response.data);
            }
        }catch (error) {
        console.error('Error al actualizar el estado de la tarea:', error);
      }
    };

  

    
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/tareas/');
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
            const response = await fetch('http://localhost:3000/Tareas', {
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
                            className="w-64 p-2 pr-20 outline-[#559933]"
                            value={newTask.nombre}
                            onChange={handleInputChange}
                            required 
                        />
                        <input 
                            type="text" 
                            name="descripcion"
                            placeholder="Ingresá la descripción" 
                            className="w-64 p-2 outline-[#559933]" 
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
                <div className="flex mt-4 gap-4">
                    <button 
                        className={`px-4 py-2 text-[#313131]  text-sm ${filter === 'todas' ? 'text-[#559933]' : 'bg-gray-200'}`}
                        onClick={() => setFilter('todas')}
                    >
                        Todas
                    </button>
                    <button 
                        className={`px-4 py-2 text-[#313131] text-sm ${filter === 'Pendiente' ? 'text-[#559933]' : 'bg-gray-200'}`}
                        onClick={() => setFilter('Pendiente')}
                    >
                        Pendientes
                    </button>
                    <button 
                        className={`px-4 py-2  text-[#313131] text-sm ${filter === 'Finalizada' ? 'text-[#559933]' : 'bg-gray-200'}`}
                        onClick={() => setFilter('Finalizada')}
                    >
                        Finalizadas
                    </button>
                </div>
                <div className="mt-20">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th className="px-6 py-3 bg-gray-300 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {tasks.filter((task) => {
                            if (filter === 'todas') {
                                return true; 
                            } else if (filter === 'Pendiente') {
                                return task.estado === 'Pendiente'; 
                            } else {
                                return task.estado === 'Finalizada'; 
                            }
                            }).map((task) => (
                            <tr key={task.idTarea} className={selectedTasks[task.idTarea] ? 'bg-[#559933]' : ''}>
                                <td className="px-6 py-4 whitespace-nowrap">{task.nombre}</td>  
                                <td className="px-6 py-4 whitespace-nowrap">{task.descripcion}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <select
                                        value={selectedTasks[task.idTarea] ? 'Finalizada' : 'Pendiente'}
                                        onChange={(e) => {
                                        handleCheckboxChange(task.idTarea); 
                                        }}>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="Finalizada">Finalizada</option>
                                    </select>
                                </td>
                                <td className="text-right px-2">
                                    <Link to="/Editar">
                                        <button className="hover:bg-blue-400 mr-4 border border-[#313131] text-[#313131] text-lg hover:border-0 font-sans font-medium py-2 px-4 rounded-2xl" 
                                    >Editar</button>
                                    </Link>
                                    <button className="hover:bg-red-400 mr-4 border border-[#313131] text-[#313131] text-lg hover:border-0 font-sans font-medium py-2 px-4 rounded-2xl"
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