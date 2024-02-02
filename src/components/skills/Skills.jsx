import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Database from './Database';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Database />
        </div>
    </section>
  )
}

export default Skills;
