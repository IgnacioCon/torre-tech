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
      <ViewButton />
    </div>
  );
};

export default UserCard;
