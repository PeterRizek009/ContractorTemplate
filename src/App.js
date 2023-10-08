import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './navbar/nav';
import Header from './header/header';



function App() {


  return (

    <div className="App max-w-[1600px] mx-auto font-sans">

      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>

    </div>
  );
}

export default App;
