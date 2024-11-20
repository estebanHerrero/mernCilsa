

function Registrate() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-10 rounded-lg shadow-md w-96 border border-[#313131] flex flex-col">
                <h2 className="text-2xl font-semibold text-[#313131] mb-12">Registrate</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-[#313131] text-left text-base font-normal mb-2">Nombre</label>
                        <input type="text" id="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-[#313131] leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su nombre" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apellido" className="block text-[#313131] text-left text-base font-normal mb-2">Apellido</label>
                        <input type="text" id="apellido" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su apellido" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#313131] text-left text-base font-normal mb-2">Correo electrónico</label>
                        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su correo electrónico" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-[#313131] text-left text-base font-normal mb-2">Contraseña</label>
                        <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                        placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="flex justify-end">
                        <button className="text-[#313131] border border-[#313131] hover:border-0 tracking-wide font-sans font-medium py-3 px-5 rounded-2xl text-lg hover:bg-[#559933]">Registrate</button>
                    </div>
                </form>
            </div>
            <div className="bg-[#313131] h-96 mx-2 px-2 rounded-2xl"></div>
        </div>
    );
}

export default Registrate;