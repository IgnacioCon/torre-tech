import { useState, useEffect } from 'react';

const UserProfile = () => {
  const username = 'contrerasign';
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchUser();
      setUser(userFromServer);
      console.log(userFromServer);
    };
    getUser();
  }, []);

  //fetch User
  const fetchUser = async () => {
    try {
      const res = await fetch(`https://bio.torre.co/api/bios/torrenegra`, {
        method: 'GET',
      });
      console.log(await res.json());

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>User</p>
    </div>
  );
};

export default UserProfile;
