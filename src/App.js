import './App.css';
import  Signup  from "./Components/Signup";
import Login from "./Components/Login";
import Reset from"./Components/Reset";
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    
    <Header/>
    {/* <Signup/>
    <Login/>
    <Reset/>  */}
    
    <Routes>
    <Route path='/' element={ <Signup/> }/>
    <Route path='/Signup' element={ <Signup/> }/>
    <Route path='/login' element={ <Login/> }/>
    <Route path='/reset' element={ <Reset/>  }/>
    </Routes>
          
    </BrowserRouter>
  );
}

export default App;
