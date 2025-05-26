import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDeta from './BlogDetail';
import BlogDetails from './BlogDetail';
import Page404 from './404';

function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/create'>
              <Create />
            </Route>

            <Route exact path='/blogs/:id'>
              <BlogDetails />
            </Route>

            <Route path='*'>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
