//CSS
import "./App.css";

//Lib
import { Routes, Route } from "react-router-dom";

//Components
import Layout from "./Layout";
import Index from "./Pages/Index";
import Sidebar from "./components/Sidebar";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div className="homepage-wrap">
              <div className="content-wrapper">
                <Index />
              </div>
              <Sidebar />
            </div>
          }
        />
        <Route path={`/login`} element={<LoginPage />} />
        <Route path={`/register`} element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
