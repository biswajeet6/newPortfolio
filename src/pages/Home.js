import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  function handleClick() {
    window.open("https://64369dc4d92aed03b800048b--gilded-pasca-9741f8.netlify.app/", "_blank");
  }
  function handleCursor() {
    window.open("https://verdant-froyo-fe26a0.netlify.app/", "_blank");
  }
  function handleTouch() {
    window.open("https://luminous-gecko-e85d2e.netlify.app/", "_blank");
  }
  function handleFooter() {
    window.open("  https://lucky-treacle-015df8.netlify.app", "_blank");
  }
  function handleMaster() {
    window.open("https://6437e847b93619204c4aed0c--tangerine-palmier-de827f.netlify.app/", "_blank");
  }
  function handlePro() {
    window.open("https://64381358fc2e31008f50cb71--frabjous-crisp-5ee258.netlify.app/", "_blank");
  }


  
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Biswajeet</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and transforming complex problems into elegant solutions through code.</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/biswajeet-jena-89b48b170/', '_blank')} />
          <EmailIcon onClick={() => window.open('https://mail.google.com/mail', '_blank')} />
          <GithubIcon onClick={() => window.open('https://github.com/biswajeet6')} />
        </div>
      </div>
      <div className="skills">
      <ol className="list">
          <li className="item">
        <h1> Skills</h1>
        <span>
       The ability to analyse complex technical information.
        </span>
        <span>
        Can analyse, design and implement database structures. Detail oriented and an excellent problem solver. Excellent with GitHub, Sourcetree and Firebase. Quick learner and always keen towards learning more tech stacks.
        </span>
       
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, NextJS, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL, Firebase.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, R, TypeScript, Go</span>
          </li>
          <li className="item">
          <h2>List of Projects</h2>
          <span onClick={handleClick}>
    Sorting Visualiser: https://64369dc4d92aed03b800048b--gilded-pasca-9741f8.netlify.app/
  </span>
  <br/>
  <span onClick={handleCursor}>
 Ecommerce Site: https://verdant-froyo-fe26a0.netlify.app/
  </span>
  <br/>
  <span onClick={handleTouch}>
 Spotify: https://luminous-gecko-e85d2e.netlify.app/
  </span>
  <br/>
  <span onClick={handleFooter}>
 Social Media: https://lucky-treacle-015df8.netlify.app
  </span>
<br/>
<span onClick={handlePro}>
  React Admin Dashboard: https://64381358fc2e31008f50cb71--frabjous-crisp-5ee258.netlify.app/
  </span>
<span onClick={handleMaster}>
  Candy Crush game: https://6437e847b93619204c4aed0c--tangerine-palmier-de827f.netlify.app/
  </span>

          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
