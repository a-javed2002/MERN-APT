import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages';
import InternalServerError from './pages/500';
import NotFoundPage from './pages/404';
import LoginPage from './pages/login';
import {ToastContainer} from 'react-toastify';
import DetailAnimal from './pages/Animals/detail';
import CreateAnimal from './pages/Animals/create';
import ShowAnimal from './pages/Animals/show';
import EditAnimal from './pages/Animals/edit';
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/notFound' element={<NotFoundPage/>}></Route>
        <Route path='/error' element={<InternalServerError/>}></Route>
        <Route path='/animal/create' element={<CreateAnimal/>}></Route>
        <Route path='/animal/show' element={<ShowAnimal/>}></Route>
        <Route path='/animal/edit' element={<EditAnimal/>}></Route>
        <Route path='/animal/detail' element={<DetailAnimal/>}></Route>
      </Routes>
    </>
  );
}

export default App;
