import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>Wellcome!</h1>
      <p> 
        <Link 
        style={{
            padding: `14px 28px`,
            color: `#373737`,
            backgroundColor:`#5cd3a8`,
            borderRadius: `8px`,
            boxShadow: `1px 1px 7px 1px #8ba8bc`,
            transition: `transform 250ms linear`,
          }}
        to="/tweets">TWEETS</Link>
        </p>
    </section>
  );
};

export default Home;