import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import List from './screens/List';
import Join from './screens/Join';
import LearnMore from './screens/learnmore';
import Home from './screens/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Login from './screens/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
