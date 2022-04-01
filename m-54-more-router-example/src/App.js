//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grand from './components/GrandPa/Grand';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orders' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grand></Grand>}></Route>
      </Routes>
    </div>
  );
}
export default App;
