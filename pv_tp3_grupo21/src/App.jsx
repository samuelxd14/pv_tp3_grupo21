import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import ListaProyectos from './componentes/ListaProyectos';

import './css/styles.css';
import './css/listaProyectos.css';
import './css/header.css';
import './css/nav.css';
import './css/footer.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <main className="content-area">
        <Header />
        <Nav />
        <ListaProyectos />
        <Footer />
      </main>
    </div>
  );
};

export default App;