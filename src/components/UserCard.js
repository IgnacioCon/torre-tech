import UserImage from './UserImage';
import UserDetails from './UserDetails';
import ViewButton from './ViewButton';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className='card'>
      <UserImage userImage={user.picture} />
      <UserDetails
        name={user.name}
        userBio={user.professionalHeadline}
        skills={user.skills}
      />
      <ViewButton user={user} />
    </div>
  );
};

export default UserCard;
