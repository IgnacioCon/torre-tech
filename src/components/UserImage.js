const UserImage = ({ userImage }) => {
  return (
    <div>
      <img src={userImage} alt='user' height='50px' width='50px' />
    </div>
  );
};

export default UserImage;
