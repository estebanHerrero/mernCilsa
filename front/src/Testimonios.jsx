import 'flowbite';


function Testimonios() {
    return (
        <div className="h-screen"> 
            <div className="grid grid-cols-2  text-center">
                <div className="text-[#313131] flex flex-col justify-center items-center">
                    <h1 className="text-xl text-left font-thin">Testimonios</h1>
                    <p className="text-center mt-4 text-2xl font-medium text-[#559933]">"...Mindnote me ha ayudado a organizar mis ideas de manera increíblemente eficiente. Gracias a él, he podido aumentar mi productividad en un 30%..."</p>
                    <p className="text-left">----peterP</p>
                </div>
                <div className="grid-cols-1 justify-self-end">
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-[600px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Testimonios;