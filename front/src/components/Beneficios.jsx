


function Beneficios () {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                    <div className="h-236 w-80 rounded-2xl">
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-tranform duration-500" src="https://images.unsplash.com/photo-1564659318400-669837b066ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className="text-3xl font-bold text-white">Rendimiento académico</h1>
                        <p className="text-lg italic text-white mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Alcanza tus metas académicas con mayor facilidad gracias a nuestras herramientas de planificación y seguimiento.</p>
                    </div>
                </div>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                    <div className="h-236 w-80 rounded-2xl">
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-tranform duration-500" src="https://images.unsplash.com/photo-1668417973444-372d294f163f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className="text-3xl font-bold text-white">Reduce la ansiedad</h1>
                        <p className="text-lg italic text-white mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Di adiós al estrés de los exámenes. Mindnote te ayuda a mantenerte organizado y al día con tus tareas.</p>
                    </div>
                </div>
                <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                    <div className="h-236 w-80 rounded-2xl">
                        <img className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-tranform duration-500" src="https://images.unsplash.com/photo-1630659509436-7397fbda30e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                        <h1 className="text-3xl font-bold text-white">Facilita la colaboración</h1>
                        <p className="text-lg italic text-white mt-24 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Trabaja en equipo con tus compañeros y comparte tus notas y tareas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Beneficios;