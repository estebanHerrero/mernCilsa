import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5173/Login', {email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-10 rounded-lg shadow-md w-96 border border-[#313131] flex flex-col">
                <h2 className="text-2xl font-semibold text-[#313131] mb-12">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#313131] text-left text-base font-normal mb-2">Correo electrónico</label>
                        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su correo electrónico" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-[#313131] text-left text-base font-normal mb-2">Contraseña</label>
                        <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su contraseña" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-end">
                        <Link to='/Tareas'>
                            <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-lg hover:bg-[#559933]">Enviar</button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className="bg-[#313131] h-96 mx-2 px-2 rounded-2xl"></div>
        </div>
    );
}

export default Login;