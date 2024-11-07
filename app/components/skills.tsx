import React from 'react';

// Tipe untuk props Skill
interface SkillProps {
  name: string;
  level: number;
}

// Komponen Skill
const Skill: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <div style={styles.skillContainer}>
      <div style={styles.skillName}>{name}</div>
      <div style={styles.skillLevel}>
        {/* Memperbaiki penggunaan interpolasi string */}
        <div style={{ ...styles.skillProgress, width: `${level}%` }} />
      </div>
    </div>
  );
};

// Tipe untuk data skills
interface SkillData {
  name: string;
  level: number;
}

// Komponen Skills
const Skills: React.FC = () => {
  const skills: SkillData[] = [
    { name: 'Microsoft Word', level: 79 },
    { name: 'Microsoft Excel', level: 70 },
    { name: 'Kerja sama Tim', level: 87 },
    { name: 'Manajemen Waktu', level: 80 },
    { name: 'Adaptabilitas', level: 70 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Skills</h2>
      <div style={styles.skillsList}>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

// Styling menggunakan CSS-in-JS
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  skillContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  skillName: {
    fontSize: '16px',
    color: '#444',
  },
  skillLevel: {
    width: '70%',
    backgroundColor: '#e0e0e0',
    height: '8px',
    borderRadius: '4px',
  },
  skillProgress: {
    height: '100%',
    borderRadius: '4px',
    backgroundColor: '#4caf50',
  },
};

export default Skills;
