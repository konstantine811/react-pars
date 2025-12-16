import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home";
import Oracle from "./pages/Oracle";
import { RoutePath } from "./config/route-config";

function App() {
  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-yellow-900/30 selection:text-yellow-100">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] from-indigo-950/20 via-transparent to-transparent opacity-40 blur-3xl"></div>

        <div className="absolute w-full h-full bg-black"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.ORACLE} element={<Oracle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
