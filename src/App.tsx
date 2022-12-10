import { AccountBar, Header } from "./components";
import { Outlet, Routes, Route } from "react-router-dom";
import { Cart, CheckOut, Home, Login, Product, SignUp } from "./pages";
import { CartContext } from "./contexts/cartContext";
import { useState } from "react";

function App() {
  const [itemsId, setItemsId] = useState<Array<string>>([]);

  const value = {
    itemsId,
    addCheck: (Id: string) => {
      setItemsId((prev) => {
        return [...prev, Id];
      });
    },
    removeCheck: (Id: string) => {
      setItemsId((prev) => {
        return prev.filter((itemId) => itemId !== Id);
      });
    },
  };

  return (
    <CartContext.Provider value={value}>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Outlet />
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
    </CartContext.Provider>
  );
}

export default App;
