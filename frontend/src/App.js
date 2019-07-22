import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './componets/Login';
import Register from './componets/Register';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/register/" component={Register}/>
    </Router>
  );
}

export default App;
