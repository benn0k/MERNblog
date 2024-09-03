import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            <div className="homepage-wrap">
              <div className="content-wrapper">
                <Post />
                <Post />
                <Post />
              </div>
              <div className="sidebar">
                <img src="https://tpc.googlesyndication.com/simgad/13004029155576538860"></img>
              </div>
            </div>
          </main>
        }
      />
      <Route
        path={`/login`}
        element={
          <main>
            <Header />
            <div>login</div>{" "}
          </main>
        }
      />
    </Routes>
  );
}

export default App;
