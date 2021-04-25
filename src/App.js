import './App.scss';
import About from './components/about/about.component';
import Header from './components/header/header.component';
import Projects from './components/projects/projects.component';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects/>
    </div>
  );
}

export default App;
