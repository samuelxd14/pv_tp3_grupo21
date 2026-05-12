import { useState } from "react"
import proyectoService from "../services/proyectoService"

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos()); 
    
    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }


   return (
    <div className="container">
        <h2>Gestión de Proyectos Educativos</h2>
        <section className="form-section">
            <form className="project-form">
                {/* <input aca va lo que ingresamos para buscar*/}
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