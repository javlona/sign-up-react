import React, { Fragment } from 'react'
;
import {Routes, Route, Link} from 'react-router-dom'
import SignIn from './containers/SignIn'

import './App.css';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/sign-in" element={ SignIn }/>
      </Routes>
    </Fragment>
  );
}

export default App;
