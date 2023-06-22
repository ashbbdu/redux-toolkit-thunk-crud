import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Navbar from './components/Navbar';
import Read from './pages/Read';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
