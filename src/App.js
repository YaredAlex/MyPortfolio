import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
export const Wrapper = createContext();

function App() {
  const [mode,setMode] = useState(true);
  const modeToggle=()=>{
    setMode(!mode);
    if(mode)
    document.body.style.backgroundColor = "rgba(33,37,41,1)";
    else
    document.body.style.backgroundColor = "white";
    console.log("mode is right now ",mode);
  }
  
  return (
    <Wrapper.Provider value={mode}>
    <BrowserRouter>
    <NavBar modeToggle={modeToggle} mode={mode}/>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <div className="App">
      
      </div>
    </BrowserRouter>
    </Wrapper.Provider>
  );
}

export default App;
