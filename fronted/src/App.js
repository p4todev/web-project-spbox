import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import Home from './Pages/home'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
