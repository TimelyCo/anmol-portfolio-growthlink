import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/4300580.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
           <div className="about-para">
            <p>Hi, I'm Anmol Raturi, a passionate software developer with expertise in MERN stack, data structures, and algorithms. I'm currently pursuing my B.Tech in Computer Science at Graphic Era Hill University,Dehradun,Uttarakhand.</p>
            <p>I specialize in building efficient and scalable web applications using MERN Stack. Hoping to connect with you.</p>
           </div>
           <div className="about-skills">
            <div className="about-skill">
              <p>React and Express</p>
              <hr style={{width:'50%'}}/>
            </div>
            <div className="about-skill">
              <p>C++ and Java</p>
              <hr style={{width:'70%'}}/>
            </div>
            <div className="about-skill">
              <p>JavaScript,Nextjs</p>
              <hr style={{width:'60%'}}/>
            </div>
            <div className="about-skill">
              <p>MonogDb</p>
              <hr style={{width:'50%'}}/>
            </div>
           </div>
        </div>
      </div>
      <div className="about-achievements">
  <div className="about-achievement">
    <h1>
      <a href="https://github.com/TimelyCo" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </h1>
    <p>Check out my GitHub profile</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>
      <a href="https://leetcode.com/u/ANMOLRATURI/" target="_blank" rel="noopener noreferrer">
        LeetCode
      </a>
    </h1>
    <p>View my LeetCode stats</p>
  </div>
  <hr />
  <div className="about-achievement">
    <h1>
      <a href="https://www.linkedin.com/in/anmol-raturi-a8b05b231/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </h1>
    <p>Connect with me on LinkedIn</p>
  </div>
</div>

    </div>
  )
}

export default About
