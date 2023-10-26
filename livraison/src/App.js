import './App.css';


import Menu from './core/Menu';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/HomePage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ActiveMe } from './user/ActiveMe';




const App=()=> {
  return (
    <div className="App">
       <BrowserRouter>
          <Menu/>
          <Routes>
             <Route path='/'  element={<Home/>}  />
             <Route path='/signin'  element={<Signin/>}  />
             <Route path='/signup'  element={<Signup/>}  />
             <Route path='/activate-email/:token'  element={<ActiveMe/>}  />

          </Routes>
       </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;
