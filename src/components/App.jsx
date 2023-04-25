
import { Container } from './App.styled';
// import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Tweets from './Pages/Tweets';
import Home from './Pages/Home';


// const Home = lazy (()=>import(`./Pages/Home`));
// const Tweets = lazy (()=>import(`./Pages/Tweets`));


export const App = () => {
  return (
    <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tweets" element={<Tweets/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
   
  );
};