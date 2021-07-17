import './App.css';
import { Switch, Route } from 'react-router';
import { Service } from './components/Service';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Home } from './components/Home';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>

  <Switch>
    
    <Route exact path='/' component={Home}/>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/service' component={Service}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/contact' component={Contact}/>
    <Home/>
    </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
