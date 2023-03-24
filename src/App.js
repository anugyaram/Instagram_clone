import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
