import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 import Books from './Pages/Books';
 import Add from './Pages/Add';
 import Updata from './Pages/Updata';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/add" element={<Add/>}/>
      <Route path='/updata/:id' element={<Updata/>}/>

      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
