import { Routes, Route } from 'react-router-dom';
import Auth from '@Pages/Auth';
import NotFound from '@Pages/NotFound';
import Shop from '@Pages/Shop'
import './App.scss';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
