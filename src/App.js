import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Component/hooks/AuthProvider/AuthProvider";
import AboutUs from "./Component/Pages/AboutUs/AboutUs";
import Login from "./Component/Pages/Authentication/Login/Login";
import Register from "./Component/Pages/Authentication/Register/Register";
import CarExplore from "./Component/Pages/CarExplore/CarExplore";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import DashBoard from "./Component/Pages/DashBoard/DashBoard/DashBoard";
import SingleManageProduct from "./Component/Pages/DashBoard/SingleManageProduct/SingleManageProduct";
import CarGallery from "./Component/Pages/Home/CarGallery/CarGallery";
import Home from "./Component/Pages/Home/Home/Home";
import NotFound from "./Component/Pages/NotFound/NotFound";
import NewUser from "./Component/Pages/Performance/NewUser/NewUser";
import PurchaseComplete from "./Component/Pages/Performance/PurchaseComplete/PurchaseComplete";
import SingleCarExplore from "./Component/Pages/SingleCarExplore/SingleCarExplore";
import Footer from "./Component/Shared/Footer/Footer";
import Header from "./Component/Shared/Header/Header";
import MyProfile from "./Component/Pages/DashBoard/MyProfile/MyProfile";
import MyOrder from "./Component/Pages/DashBoard/MyOrder/MyOrder";
import Review from "./Component/Pages/DashBoard/Review/Review";
import Pay from "./Component/Pages/DashBoard/Pay/Pay";
import ManageAllOrders from "./Component/Pages/DashBoard/ManageAllOrders/ManageAllOrders";
import ManageProduct from "./Component/Pages/DashBoard/ManageProduct/ManageProduct";
import AddAnProduct from "./Component/Pages/DashBoard/AddAnProduct/AddAnProduct";
import MakeAdmin from "./Component/Pages/DashBoard/MakeAdmin/MakeAdmin";
import PrivateRoutes from "./Component/hooks/PrivateRoute/PrivateRoutes";
import AnonymousRoute from "./Component/hooks/AnonymousRoute/AnonymousRoute";
import AdminRoute from "./Component/hooks/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Home />} path="/home" />
            <Route element={<AboutUs />} path="/about_us" />
            <Route element={<ContactUs />} path="/contact_us" />
            <Route element={<CarGallery />} path="/car_gallery" />

            {/* Anonymous ROUTES  */}
            <Route element={<AnonymousRoute />}>
              <Route element={<Login />} path="/login" />
              <Route element={<Register />} path="/register" />
            </Route>

            {/* PRIVATE ROUTES  */}
            <Route element={<PrivateRoutes />}>
            <Route element={<CarExplore />} path="/cars" />
              <Route element={<SingleCarExplore />} path="/car/:id" />
              <Route element={<PurchaseComplete />} path="/purchase_done" />
              <Route
                element={<SingleManageProduct />}
                path="/manage_product/:id"
              />
              <Route element={<NewUser />} path="/new_user" />

              {/* DashBoard  */}
              <Route element={<DashBoard />} path="/dashboard/">
                <Route exact element={<MyProfile />} path="profile" />
                <Route element={<MyOrder />} path="my_order" />
                <Route element={<Review />} path="post_review" />
                <Route element={<Pay />} path="payment" />

                {/* Admin ROUTES  */}
                <Route element={<AdminRoute />}>
                  <Route
                    element={<ManageAllOrders />}
                    path="manage_all_order"
                  />
                  <Route element={<ManageProduct />} path="manage_product" />
                  <Route element={<AddAnProduct />} path="add_an_product" />
                  <Route element={<MakeAdmin />} path="make_admin" />
                </Route>
              </Route>
            </Route>

            {/* not found pages  */}
            <Route element={<NotFound />} path="*" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
