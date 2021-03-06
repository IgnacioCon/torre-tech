import UserBio from './UserBio';
import UserName from './UserName';
import UserSkillsList from './UserSkillsList';

const UserDetails = ({ name, userBio, skills }) => {
  return (
    <div className='user-details'>
      <UserName name={name} />
      <UserBio userBio={userBio} />
      <UserSkillsList skills={skills} />
    </div>
  );
};

export default UserDetails;
