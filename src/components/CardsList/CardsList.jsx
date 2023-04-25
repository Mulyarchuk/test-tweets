import { useEffect, useState } from 'react';
import Cards from 'components/Cards/Cards';
import LoadMoreBtn from 'components/LoadMore/LoadMore'
import user from 'data/user.json';
import { CardsList } from './CardList.styled';
import { useLocation, Link } from 'react-router-dom';


const CardList = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(6);
  const handleLoadMore = ()=>{
    setVisible((prevValue)=> prevValue + 6)
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
  });

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
    <Link
        style={{
          padding: `14px 28px`,
          color: `#373737`,
          backgroundColor:`#5cd3a8`,
          borderRadius: `8px`,
          boxShadow: `1px 1px 7px 1px #8ba8bc`,
          transition: `transform 250ms linear`,
        }}
        to="/"
        state={{ from: location }}
      >
        BACK
      </Link>
    <CardsList>
      {users.slice(0, visible).map(user => (
        <Cards key={user.id} user={user} changeData={changeData} />
      ))}
    </CardsList>
    {visible < users.length && <LoadMoreBtn loadMore={handleLoadMore} />}
    </>
  );
};

export default CardList;

