import UserCard from './UserCard';

const UserCardList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.username} user={user} />
      ))}
    </div>
  );
};

export default UserCardList;
