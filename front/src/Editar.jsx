import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();
    const { idTarea } = useParams();

    const URI = 'http://localhost:3000/Tareas/'

    const update =  async (e) => {
        e.preventDefault();
        await axios.put(URI+idTarea, {
            nombre: nombre, 
            descripcion: descripcion
        })
        navigate('/') 
    }

    useEffect(  ()=> {
        getTareaById()
    }, [])

    const getTareaById = async () => {
        const res = await axios.get(URI+idTarea)
        setNombre(res.data.nombre)
        setDescripcion(res.data.descripcion) 
    }


    return (
        <div>
            <form onSubmit={update}>
                <div className="flex gap-6">
                    <input 
                        type="text" 
                        name="nombre"
                        placeholder="Ingresá el nombre" 
                        className="w-64 p-2 pr-20 outline-[#8FD14F] border border-[#8FD14F]"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                        required 
                    />
                    <input 
                        type="text" 
                        name="descripcion"
                        placeholder="Ingresá la descripción" 
                        className="w-64 p-2 outline-[#8FD14F] border border-[#8FD14F]" 
                        value={descripcion}
                        onChange={ (e) => setDescripcion(e.target.value)}
                        required
                    />
                    <button className='text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-xl hover:bg-[#559933]' type='submit'>Actualizar</button>
                </div>
            </form>
        </div>
    )
}


export default EditTask;