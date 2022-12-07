import { AccountBar, Header } from "./components";
import { Outlet, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

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
      </Route>
    </Routes>
  );
}

export default App;
