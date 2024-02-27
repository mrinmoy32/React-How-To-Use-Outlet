import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Featured from "./Featured";
import Recent from "./Recent";
import About from "./About";
import "./App.css";

/*In React Router, <Outlet /> is a component that acts as a placeholder where child routes can be rendered.

When you have nested routes in React Router, the parent route's component can include 
the <Outlet /> component to specify the location where the child routes should be rendered. 
<Outlet /> indicates the location in your component where the content of child routes will be injected.
*/

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="featured" element={<Featured />} />
            <Route path="recent" element={<Recent />} />
          </Route>

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
