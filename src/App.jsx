import useTheme from './hooks/useTheme.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import Certifications from './components/Certifications.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Loader from './components/Loader.jsx';
import About from './components/About.jsx';
export default function App() {
  const { toggle } = useTheme();
  return (<>
  <Loader /><ScrollProgress/>
    <Navbar onTheme={toggle} />
    <main className="wrap" id="top"><Hero /><About/><Skills /><Projects /><Experience /><Education /><Certifications/><Contact /></main><BackToTop/>
    <Footer />
  </>);
}
