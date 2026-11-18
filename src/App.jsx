import useTheme from './hooks/useTheme.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  const { toggle } = useTheme();
  return (<>
    <Navbar onTheme={toggle} />
    <main className="wrap" id="top"><Hero /><Skills /><Projects /><Experience /><Education /><Contact /></main>
    <Footer />
  </>);
}
