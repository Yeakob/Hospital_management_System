import React from 'react';
import Homepage from './Homepage';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Cover from './Cover';
import Login from './Login';
import Sign from './Sign';
import PrivateRoute from './PrivateRoute';
import PostDetails from './components/PostDetails/PostDetails';



const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoute/> }>
          <Route element={<Homepage/>} path="/posts" exact/>
          <Route element={<Homepage/>} path="/posts/search" />
          <Route element={<PostDetails/>} path="/posts/:id" />
          </Route>
          <Route element={<Sign/>} path="/signin" exact/>
          <Route element={<Login/>} path="/login" exact/>
          <Route element={<Cover/>} path="/" exact/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
