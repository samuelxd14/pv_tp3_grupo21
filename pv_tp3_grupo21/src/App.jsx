import { useState } from 'react'
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';  
import './css/styles.css';
import './css/listaProyectos.css';
import ListaProyectos from './componentes/ListaProyectos';

const App = () => {
  return(
    <div className="app-wrapper"> 
      <main className="content-area"> 
        <Header />
        <Nav />
        <ListaProyectos />
        <Footer />
      </main>
    </div>
  )
}

export default App
