import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './navbar/nav';
import Header from './header/header';
import Projects from './projects/projects';
import Solutions from './solutions/solutions';


function App() {


  return (

    <div className="App max-w-6xl mx-auto font-sans">

      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        
      </Routes>

    </div>
  );
}

export default App;
