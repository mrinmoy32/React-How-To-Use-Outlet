import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="team">Team</Link>
          </li>
          <li>
            <Link to="history">History</Link>
          </li>
        </ul>
      </nav>
      <Outlet />{" "}
      {/* Child routes (of about route i.e. team and History) will be rendered here */}
    </div>
  );
};

export default About;
