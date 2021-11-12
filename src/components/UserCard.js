import UserImage from './UserImage';
import UserDetails from './UserDetails';

const UserCard = ({ user }) => {
  return (
    <div>
      <UserImage userImage={user.picture} />
      <UserDetails
        name={user.name}
        userBio={user.professionalHeadline}
        skills={user.skills}
      />
    </div>
  );
};

export default UserCard;
