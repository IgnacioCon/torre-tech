import UserSkill from './UserSkill';
import './UserCard.css';

const UserSkillsList = ({ skills }) => {
  const topSkills = [...skills].sort((a, b) => b.weight - a.weight).slice(0, 3);
  return (
    <div className='skill-container'>
      {topSkills.map((skill, idx) => (
        <UserSkill key={idx + skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default UserSkillsList;
