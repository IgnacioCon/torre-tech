import UserCard from './UserCard';
import './UserCard.css';

const UserCardList = ({ users }) => {
  return (
    <div className='container'>
      <div className='card-container'>
        {users.map((user) => (
          <UserCard key={user.username} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserCardList;
