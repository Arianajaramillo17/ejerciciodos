import './App.css';
import { Routes, Route } from "react-router-dom";
import Body from './components/Body';
import ContentTwo from './components/ContentTwo';
function App() {
  return (
    <Routes>
    <Route path="/" element={< Body/>}></Route>
    <Route path='/Conoce-a-los-congresistas' element={<ContentTwo/>} ></Route>
    </Routes>
  );
}

export default App;
