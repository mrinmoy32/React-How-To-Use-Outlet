import { Outlet, Link } from 'react-router-dom';
// import Team from './Team';
// import History from './History';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <ul>
          {/* <li><Link to="team">Team</Link></li>
          <li><Link to="history">History</Link></li> */}
        </ul>
      </nav>
      {/* <Outlet /> Child routes will be rendered here */}
    </div>
  );
};

export default About;
