import { useEffect, useState } from 'react';
import Cards from 'components/Cards/Cards';
import LoadMoreBtn from 'components/LoadMore/LoadMore'
import user from 'data/user.json';
// import axios from 'axios';

import { CardsList } from './CardList.styled';


const CardList = () => {
  const [visible, setVisible] = useState(3);
  const handleLoadMore = ()=>{
    setVisible((prevValue)=> prevValue + 3)
  }
  
    const save = (key, value) => {
        try {
          const serializedState = JSON.stringify(value);
          localStorage.setItem(key, serializedState);
        } catch (error) {
          console.error('Set state error: ', error.message);
        }
      };
      
      const load = key => {
        try {
          const serializedState = localStorage.getItem(key);
          return serializedState === null ? undefined : JSON.parse(serializedState);
        } catch (error) {
          console.error('Get state error: ', error.message);
        }
      };
      
      const storage = {
        save,
        load,
      };

  const [users, setUsers] = useState(storage.load('users-list') ?? user);

  useEffect(() => {
    storage.save('users-list', users);
  }, [users]);

  const changeData = (id, followers, isFollow) => {
    const updateUsers = users.map(user => {
      if (user.id === id) {
        user.followers = followers;
        user.isFollowing = isFollow;
      }
      return user;
    });
    setUsers(updateUsers);
  };
  
 
  return (
    <>
    <CardsList>
      {users.slice(0, visible).map(user => (
        <Cards key={user.id} user={user} changeData={changeData} />
      ))}
    </CardsList>
     <LoadMoreBtn loadMore={handleLoadMore} />
    </>
  );
};

export default CardList;

