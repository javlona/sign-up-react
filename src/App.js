import React, { Fragment } from 'react'
import signInImg from './assets/Frame.png';
import {Link} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/sign-in" element={signInImg}/>
      </Routes>
    </Fragment>
  );
}

export default App;
