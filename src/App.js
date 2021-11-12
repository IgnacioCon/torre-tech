import { useEffect, useState } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';
import UserProfile from './components/UserProfile';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  //fetchUsers
  const fetchUsers = async () => {
    try {
      const res = await fetch(`https://search.torre.co/people/_search/`, {
        method: 'POST',
      });
      const { results } = await res.json();
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UserCardList users={users} />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
