import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Store from './pages/store'
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/" element={<Store />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;