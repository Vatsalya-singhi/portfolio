import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import BentoGrid from './components/BentoGrid';

const App = () => {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <AboutMe />
            <Experience />
            <BentoGrid />
        </main>
    )
}

export default App
