// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
// import Featured from "./Featured";
// import Recent from "./Recent";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="featured">Featured</Link>
          </li>
          <li>
            <Link to="recent">Recent</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Child routes (of home route i.e. featured and recent) will be rendered here */}
    </div>
  );
};

export default Home;
