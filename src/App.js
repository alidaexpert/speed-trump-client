import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Component/hooks/AuthProvider/AuthProvider';
import PrivateRoute from './Component/hooks/PrivateRoute/PrivateRoute';
import AboutUs from './Component/Pages/AboutUs/AboutUs';
import Login from './Component/Pages/Authentication/Login/Login';
import Register from './Component/Pages/Authentication/Register/Register';
import CarExplore from './Component/Pages/CarExplore/CarExplore';
import ContactUs from './Component/Pages/ContactUs/ContactUs';
import DashBoard from './Component/Pages/DashBoard/DashBoard/DashBoard';
import CarGallery from './Component/Pages/Home/CarGallery/CarGallery';
import Home from './Component/Pages/Home/Home/Home';
import NotFound from './Component/Pages/NotFound/NotFound';
import NewUser from './Component/Pages/Performance/NewUser/NewUser';
import PurchaseComplete from './Component/Pages/Performance/PurchaseComplete/PurchaseComplete';
import SingleCarExplore from './Component/Pages/SingleCarExplore/SingleCarExplore';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
  <AuthProvider>
  <BrowserRouter>
   <Header/>
   <Switch>
     <Route exact path='/'>
 <Home></Home>
     </Route>
     <Route path='/home'>
 <Home></Home>
     </Route>
     <Route path='/login'>
 <Login></Login>
     </Route>
     <Route path='/register'>
 <Register></Register>
     </Route>
     <Route path='/cars'>
 <CarExplore></CarExplore>
     </Route>
     <PrivateRoute path='/dashboard'>
 <DashBoard></DashBoard>
     </PrivateRoute>
     <PrivateRoute path='/car/:id'>
 <SingleCarExplore></SingleCarExplore>
     </PrivateRoute>
     <Route path='/about_us'>
 <AboutUs></AboutUs>
     </Route>
     <Route path='/contact_us'>
 <ContactUs></ContactUs>
     </Route>
     <Route path='/car_gallery'>
 <CarGallery></CarGallery>
     </Route>
     <PrivateRoute path='/purchase_done'>
 <PurchaseComplete></PurchaseComplete>
     </PrivateRoute>
     <PrivateRoute path='/new_user'>
 <NewUser></NewUser>
     </PrivateRoute>
     <Route path='*'>
 <NotFound></NotFound>
     </Route>
   </Switch>
   <Footer/>
   </BrowserRouter>
  </AuthProvider>
    </div>
  );
}

export default App;
