import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import RegisterAndLogin from './components/RegisterAndLogin';

import Dashboard from './components/Pages/Dashboard';
import Analytics from './components/Pages/Analytics';
import Customers from './components/Pages/Customers';
import Order from './components/Pages/Order';
import Products from './components/Pages/Products';
import AddEdit from './components/componant/AddEdit';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
        <Routes>
          <Route path='/' element={<RegisterAndLogin/>}/>

          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/Analytics' element={<Analytics/>} />
          <Route path='/Customers' element={<Customers/>} />
          <Route path='/Order' element={<Order/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Customers/addedit' element={<AddEdit/>} />

        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
