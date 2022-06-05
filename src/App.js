import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../src/vistas/LandingPage';
import Home from './vistas/Home';
import Detail from './components/Detail';
import Form from './components/Form';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route exact path = '/home' component={Home}/>
        <Route path='/home/detail/:id' component={Detail} />
        <Route path='/create' component={Form} />
        <Route path="*" component={NotFound} />
    </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;
