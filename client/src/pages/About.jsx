import React from 'react';

const About = () => {
  return (
    <div>
      <div className="center-container">
        <h1>About Us</h1>
      </div>
      <div className="center-container">
        <div style={{ width: '30vw', textAlign: 'center', fontSize: '20px' }}>
          Some cute animals really aren&apos;t that cute.
          {' '}
          They&apos;re honestly quite disturbing.
          {' '}
          My mission is to shed some light on the ugly side of things while
          {' '}
          also teaching you about these strange creatures.
        </div>
      </div>
      <div className="center-container">
        <h2>Team</h2>
      </div>
      <div className="center-container">
        <img
          alt="about robert"
          src="https://avatars.githubusercontent.com/u/52551319?v=4"
          style={{
            width: '250px', height: '250px', float: 'left', padding: '1em',
          }}
        />
        <p style={{
          width: '30vw', padding: '1em', textAlign: 'center', fontSize: '1.2em',
        }}
        >
          Robert Hu is a up and coming software engineer who started this journey
          by attending University of California, Santa Cruz. His major was computer science,
          and his passion for software engineering is inherited from his parents who are both
          software engineers by trade. Growing up, he has watched their careers flourish,
          and it inspired him to follow suit and go down the same career path. Robert Hu has
          found great success on his journey thus far. On this project, Robert has acted
          as our lead code architect, and is one of our four founding engineers.
        </p>
      </div>
    </div>

  );
};

export default About;
