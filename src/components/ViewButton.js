import { Link } from 'react-router-dom';
import './ViewButton.css';

const ViewButton = ({ user }) => {
  return (
    <Link
      className='view-button'
      to={{
        pathname: '/profile',
        state: { user: user.name, skills: user.skills },
      }}
    >
      View Profile
    </Link>
  );
};

export default ViewButton;
