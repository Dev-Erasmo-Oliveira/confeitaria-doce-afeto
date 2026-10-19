import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductCategories from './components/ProductCategories';
import About from './components/About';
import Gallery from './components/Gallery';
import CustomOrders from './components/CustomOrders';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Benefits />
        <ProductCategories />
        <About />
        <Gallery />
        <CustomOrders />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
