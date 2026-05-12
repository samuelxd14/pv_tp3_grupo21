import { useState } from "react"
import proyectoService from "../services/proyectoService"

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const [buscar, setBuscar] = useState("");
    
    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }

    const handleBuscar = (e) => {
        const valor = e.target.value;
        setBuscar(valor);
        setProyectos(proyectoService.buscarProyecto(valor));
    }


   return (
    <div className="container">
        <h2>Gestión de Proyectos Educativos</h2>
        <section className="form-section">
            <form className="project-form">
                <input type="text" placeholder="Buscar por título..." value={buscar} onChange={handleBuscar} className="input-buscar"/>
                {/* <input aca va lo que ingresamos para buscar*/}
                <button type="button" className="bnt-buscar">Agregar Proyecto</button>
                {/* button para agregar nuevo proyecto */}
            </form>
        </section>
        <section className="grid-proyectos">
            {proyectos.map(p => (
                <article key={p.id} className="card">
                    <div className="card-content">
                        <h3>{p.titulo}</h3>
                        <span
                            className={`badge ${p.estado === "Finalizado"? "done": "process"}`}>{p.estado}
                        </span>
                        <p>
                            <strong>Categoría:</strong> {p.categoria}
                        </p>
                    </div>
                    <button 
                        className="btn-delete" onClick={() => handleEliminar(p.id)}>Eliminar proyecto
                    </button>
                </article>
            ))}
        </section>
    </div>
    );
    
}

export default ListaProyectos;