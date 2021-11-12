import { useEffect, useState } from 'react';
import './App.css';
import UserCardList from './components/UserCardList';

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
    const res = await fetch(`https://search.torre.co/people/_search/`, {
      method: 'POST',
    });
    const { results } = await res.json();
    return results;
  };

  return (
    <div className='App'>
      <UserCardList users={users} />
    </div>
  );
}

export default App;
