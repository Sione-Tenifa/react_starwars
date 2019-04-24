import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom' 
import "semantic-ui-css/semantic.min.css";
import {Image} from 'semantic-ui-react'

ReactDOM.render(
  <BrowserRouter>
    {/* <Image src='https://wallpapercave.com/wp/wp2902991.jpg'/> */}
   
    <App />
  </BrowserRouter>,

document.getElementById('root')
);

