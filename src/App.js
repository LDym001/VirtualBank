import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Login/> */}
        <Home/>
      </BrowserRouter>
    </div>
  )
}

export default App;
