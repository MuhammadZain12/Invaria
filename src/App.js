import { Routes,Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Test from './pages/Test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>} exact/>
      <Route path="/test" element={<Test/>}/>
    </Routes>
  );
}

export default App;
