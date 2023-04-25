
import { Container, Header, Link } from './App.styled';
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy (()=>import(`./Pages/Home`));
const Tweets = lazy (()=>import(`./Pages/Tweets`));


export const App = () => {
  return (
    <Container>
    <Header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </nav>
    </Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tweets" element={<Tweets/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
   
  );
};