import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Login() {
    
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/Login/', {
                correoElectronico,
                contrasenia,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Inicio de sesión exitoso:', response.data);
            navigate('/Tareas');
        } catch (error) {
            console.error('Login inválido:', error);
            if (error.response) {
                console.error('Error de respuesta:', error.response.data.message);
                alert(error.response.data.message || 'Credenciales inválidas.')
            } else {
                alert('Error de conexión.')
            }
           
        }
    };


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-10 rounded-lg shadow-md w-96 border border-[#313131] flex flex-col">
                <h2 className="text-2xl font-semibold text-[#313131] mb-12">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#313131] text-left text-base font-normal mb-2">Correo electrónico</label>
                        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su correo electrónico"  required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-[#313131] text-left text-base font-normal mb-2">Contraseña</label>
                        <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su contraseña" required />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-lg hover:bg-[#559933]">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="bg-[#313131] h-96 mx-2 px-2 rounded-2xl"></div>
        </div>
    );
}

export default Login;