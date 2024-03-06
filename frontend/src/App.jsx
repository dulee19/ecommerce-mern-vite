import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
