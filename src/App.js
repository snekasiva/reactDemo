
import './App.css';
import Home from './Home';
import Topbar from './Topbar';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Demo from './Demo';
import Duplicate from './Duplicate';
import Hello from './Hello';
import Dashboard from './Dashboard';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Hooks1 from './Hooks1';
import Student from './Student';
import Studentform from './Student form';


function App() {
  const data = [{ name: " hiii" }, { name: " hello" }, { name: "byee" }, { name: "byee" }]
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/Dashboard' element={<Dashboard />} />
          
          <Route path='/hooks1' element={<Hooks1 />} /> 
          <Route path='/hello' element={<Hello />} />          
          <Route path='/form' element={<Form />} />          
          <Route path='/student form' element={<Studentform />} />          
          <Route path='/Demo' element={<Demo />} />                               
          <Route path='/Student' element={<Student />} />                
                         
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
