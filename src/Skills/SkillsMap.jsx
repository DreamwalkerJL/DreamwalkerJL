import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Skills from './Skills';
export default function SkillsMain({deRef, d3Ref, coRef}) {
  const [skills, setSkills] = useState(skillsElArray());
  const skillsEl = skills.map((skill) => <Skills key={skill.id} i={skill.i} deRef={deRef} d3Ref={d3Ref} coRef={coRef}/>);
  function skillsElArray() {
    const Array = [];
    for (let i = 0; i < 3; i++) {
      Array.push({
        i: i,
        id: nanoid(),
      });
    }
    return Array;
  }
  return <div>{skillsEl}</div>;
}
