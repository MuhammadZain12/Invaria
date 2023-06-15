import { Routes,Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
    </Routes>
  );
}

export default App;
