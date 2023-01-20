import { PrivateRoute, UnauthRoute } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  Cart,
  Category,
  CheckOut,
  ForgotPassword,
  Home,
  Login,
  Product,
  SignUp,
} from "./pages";
import { CartContextProvider } from "./contexts/CartContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Default } from "./layouts";

function App() {
  return (
    <Provider store={store}>
      <CartContextProvider>
        <Routes>
          <Route element=<Default />>
            {/* Unauthentication Route */}
            <Route element={<UnauthRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            {/* Authentication Route */}
            <Route element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/check-out" element={<CheckOut />} />
            </Route>
          </Route>
        </Routes>
      </CartContextProvider>
    </Provider>
  );
}

export default App;
