import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Insert from './component/Insert';
import List from './component/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";;

function App() {
  return (
    <Router>
      <div>
      <Header />
      {/* <Home /> */}
      {/* <Insert /> */}
      {/* <List /> */}
      <Switch>
        <Route path="/insert"><Insert /></Route>
        <Route path="/list"><List /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
