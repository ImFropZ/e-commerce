import { AccountBar, Header } from "./components";
import { Outlet, Routes, Route } from "react-router-dom";
import { Home, Product } from "./pages";

function App() {
  return (
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
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
