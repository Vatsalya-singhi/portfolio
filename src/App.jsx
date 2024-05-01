import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

const App = () => {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <AboutMe />
            <Experience />
        </main>
    )
}

export default App
