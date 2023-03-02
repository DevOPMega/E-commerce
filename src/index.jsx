import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './Routes/App';
import Signin from "./Routes/Signin";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Website(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App/>} />     // Homepage
          <Route path="signin" element={<Signin/>}/>   //Path: /sigin
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);

