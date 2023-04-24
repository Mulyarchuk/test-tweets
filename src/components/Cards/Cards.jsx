import React,{useState, useEffect} from "react";
import logo from "../../images/Logo.png";
import picture from "../../images/picture.png";
// import boy from "../../images/Boy.png";
import {
    Card,
    Picture,
    Logo,
    User,
    Btn,
    Name,
    Info,
  } from './Cards.styled';
  
  const Cards = ({ user, changeData }) => {
    const [followers, setFollowers] = useState(user.followers);
    const [isFollowing, setIsFollowing] = useState(user.isFollowing);
    
  
    const onClickBtn = () => {
      const newIsFollowing = !isFollowing;
      setIsFollowing(newIsFollowing);
  
      if (newIsFollowing) {
        setFollowers(followers + 1);
        changeData(user.id, followers + 1, newIsFollowing);
      } else {
        setFollowers(followers - 1);
        changeData(user.id, followers - 1, newIsFollowing);
      }
    };
  
    return (
      <Card>
        <Logo src={logo} alt="logo" />
        <Picture src={picture} alt="background-img" />
        <User src={user.avatar} width="100px" height='100px' alt="avatar" />
        <Name>{user.user}</Name>
        <Info>
          {user.tweets} Tweets
        </Info>
        <Info>
          {new Intl.NumberFormat('en-US').format(followers)}{' '}
          Followers
        </Info>
        <Btn
          type="button"
          onClick={onClickBtn}
          className={isFollowing ? 'active' : ''}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Btn>
      </Card>
    );
  };
  
  export default Cards;