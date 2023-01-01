import { AccountBar, Header } from "./components";
import { Outlet, Routes, Route } from "react-router-dom";
import { Cart, CheckOut, Home, Login, Product, SignUp } from "./pages";
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
                  <div className="mb-24">
                    <Outlet />
                  </div>
                  <AccountBar />
                </>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/check-out" element={<CheckOut />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </AuthProvider>
  );
}

export default App;
