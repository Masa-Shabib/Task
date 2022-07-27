import './App.css';
import React from 'react';
import Main from './views/Main';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserInfo from './components/UserInfo';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path="/users" element={<Navigate to="/"></Navigate>} />
          <Route path={"/users/:id"} element={<UserInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
