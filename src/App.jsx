import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';

const App = () => {
    return (
        <main id="main">
            <Navbar />
            <Hero />
            <AboutMe />
            <Experience />
            <BentoGrid />
            <Projects />
        </main>
    )
}

export default App
