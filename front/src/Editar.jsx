import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Editar() {

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newNombre = event.target.nombre.value;
        const newDescripcion = event.target.descripcion.value;

        try {
            const response = await axios.put(`http://localhost:3000/tareas/${taskId}`, {
                nombre: newNombre,
                descripcion: newDescripcion
            });

            if (response.status === 200) {
                navigate ('/Tareas');
            } else {
                console.error('Error al actualizar la tarea:', response.data);
            }
        }catch (error) {
            console.error('Error al actualizar la tarea:', error);
        }
    };


    const { taskId } = useParams(); 
    const [taskData, setTaskData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/tareas/${taskId}`);
                setTaskData(response.data);
            } catch (error) {
                console.error('Error fetching task:', error);
                setError("Ocurrió un error al cargar la tarea.");
            }
        };

        fetchTask();
    }, [taskId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!taskData) {
        return <div>Cargando...</div>;
    }


    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gray-200">
             <form onSubmit={handleSubmit}>
                <h2 className="text-3xl mb-6 font-sans font-medium text-[#313131]">Editar la tarea</h2>
                    <div className="flex gap-6">
                        <input 
                            type="text" 
                            name="nombre"
                            className="w-64 p-2 pr-20 outline-[#559933]"
                            defaultValue={taskData?.nombre || ''}
                            required 
                        />
                        <input 
                            type="text" 
                            name="descripcion"
                            className="w-64 p-2 outline-[#559933]" 
                            defaultValue={taskData?.descripcion || ''}
                            required
                        />
                        <button className='text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-xl hover:bg-[#559933]' type="submit"
                        >Actualizar</button>
                    </div>
                </form>
        </div>
    );
}


export default Editar;