import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Interest />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </Box>
  );
}

export default App;