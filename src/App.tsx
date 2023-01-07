import { AccountBar, Header, PrivateRoute, UnauthRoute } from "./components";
import { Outlet, Routes, Route } from "react-router-dom";
import {
  Cart,
  Category,
  CheckOut,
  Home,
  Login,
  Product,
  SignUp,
} from "./pages";
import { CartContextProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <AuthProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <Routes>
            <Route
              element={
                <>
                  <Header />
                  <div className="mb-[6.5em]">
                    <Outlet />
                  </div>
                  <AccountBar />
                </>
              }
            >
              {/* Unauthentication Route */}
              <Route element={<UnauthRoute />}>
                <Route path="/login" element={<Login />} />
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
      </ProductContextProvider>
    </AuthProvider>
  );
}

export default App;
