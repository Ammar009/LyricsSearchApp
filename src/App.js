import React from 'react';
import Navbar from './Components/Layouts/Navbar';
import Index from './Components/Layouts/Index';
import Lyrics from './Components/Tracks/Lyrics';
import {Provider} from './context';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
      <React.Fragment>
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />          
            </Switch>
          </div>

      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
