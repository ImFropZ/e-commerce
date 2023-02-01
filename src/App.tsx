import { Loading, PrivateRoute, UnauthRoute } from "./components";
import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Default } from "./layouts";
import { lazy, Suspense } from "react";
import { Profile } from "./pages";

const Cart = lazy(() => import("./pages/Cart"));
const Category = lazy(() => import("./pages/Category"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <Provider store={store}>
      <CartContextProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Default />}>
              {/* Unauthentication Route */}
              <Route element={<UnauthRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/category/:name" element={<Category />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              {/* Authentication Route */}
              <Route element={<PrivateRoute />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/check-out" element={<CheckOut />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </CartContextProvider>
    </Provider>
  );
}

export default App;
