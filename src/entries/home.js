import React from 'react';
import {render} from 'react-dom'
import '../styles/main.css'
import Home from '../pages/containers/home-container'

let app = document.getElementById("app");
render(<Home />,app);