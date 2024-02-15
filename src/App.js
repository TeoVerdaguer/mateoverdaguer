import Nav from './components/Nav';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Resume />
      </section>
      <section  className="padding">
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
