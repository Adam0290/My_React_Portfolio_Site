import Social from "../common/Social";
export default function Skills() {
  const myskills = ["HTML", "CSS", "JavaScript", "React", "Github"];
  return (
    <div className="contents skills">
      <h1 class="skills_h">My Skills</h1>
      <br />
      <ul>
        {myskills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
      <Social/>
    </div>
    
  );
}
