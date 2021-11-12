import UserSkill from './UserSkill';

const UserSkillsList = ({ skills }) => {
  console.log(skills);
  return (
    <div>
      {skills.map((skill) => (
        <UserSkill key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default UserSkillsList;
