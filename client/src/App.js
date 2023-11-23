import logo from './logo.svg';
import './App.css';
import Camera from './components/camera/Camera'
import Login from './components/login/Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Provider>
          <Routes>
            <Route element={<Login />} exact path='' />

            <Route exact path="/admin" />
            <Route exact path="/inspector" />
            <Route exact path="/inspectors" />
            <Route exact path="/reports" />


          </Routes>



        </Provider>




      </BrowserRouter>
    </div>
  );
}

export default App;
