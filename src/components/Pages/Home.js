import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Welcome!</h1>
      <p>
        Click 
        <Link to="/tweets">here</Link>
        to see tweets
        </p>
    </section>
  );
};

export default Home;