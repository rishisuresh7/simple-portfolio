import './App.scss';
import About from './components/about/about.component';
import Experience from './components/experience/experience.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Projects from './components/projects/projects.component';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
