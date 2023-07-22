import './css/App.css'
import { ConnectionToPython } from './ConnectionToPython';
import Login from './Login';
import Admin from './Admin';
import SendImageToPython from './SendImageToPython';
import _Image_ from './Image';
import { Provider } from 'react-redux';
import store from './redux/store';
import Profile from './Camera';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Inspectors from './Inspectors';
import  Reports  from './Reports';
import Header from './Header';

function App() {

  return (

    <div className="App">
      <BrowserRouter>
      <Provider store={store}>

        
          <Routes>
            <Route element={<Header />}>
              <Route exact path="/admin" />
              <Route exact path="/inspector" />
              <Route exact path="/inspectors" />
              <Route exact path="/reports" />

            </Route>

          </Routes>
       



      <header className="App-header">
       
         <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/inspector" element={<_Image_ />} />
        <Route exact path="/inspectors" element={<Inspectors />} />
        <Route exact path="/reports" element={<Reports />} />



      </Routes>
        
      </header>
        </Provider>
        </BrowserRouter>

      
    </div>

  );
}

export default App;
