import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Pages/Home/Home/Home';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Header/>
   <Switch>
     <Route path='/'>
 <Home></Home>
     </Route>
   </Switch>
   <Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;
