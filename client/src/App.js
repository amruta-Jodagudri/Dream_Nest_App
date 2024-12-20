import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateListing from './pages/CreateListing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/create-listing' element={<CreateListing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
