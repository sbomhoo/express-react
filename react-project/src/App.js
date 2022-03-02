import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>  <br/>
      <Link to="/about">소개</Link>
      <hr/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;