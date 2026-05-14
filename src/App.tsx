import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Kits from './components/Kits';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Kits />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
