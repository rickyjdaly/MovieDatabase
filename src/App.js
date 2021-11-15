import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Movie from './pages/Movie';

const App = (props) => {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Homepage} exact/>
        <Route path='/movie/:id' component={Movie} exact/>
      </Switch>
    </BrowserRouter>
   );
}
 
export default App;