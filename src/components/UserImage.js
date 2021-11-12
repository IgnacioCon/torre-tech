import './UserCard.css';

const UserImage = ({ userImage }) => {
  return <img className='user-img' src={userImage} alt='user' />;
};

export default UserImage;
