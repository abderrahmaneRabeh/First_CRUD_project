import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebare from './Components/Sidebare';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Addproducts from './Pages/Addproducts';
import Viewproduct from './Pages/Viewproduct';
import Edit from './Pages/Edit';

function App() {
  return (
    <>
      <Navbar name='home'/>
      <div className='row'>
        <div className='col-2 sideGround'><Sidebare /></div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Products' element={<Products />} />
            <Route path='Products/Add' element={<Addproducts />} />
            <Route path='Products/View/:viewId' element={<Viewproduct />} />
            <Route path='About' element={<About />} />
            <Route path='Products/Edit/:editId' element={<Edit />} />
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
