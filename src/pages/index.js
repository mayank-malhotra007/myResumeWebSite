import * as React from 'react'
import * as styles from '../components/layout.module.css'
import profilePic from '../images/mayank.jpg'

const IndexPage = () => {
  return (

    <div className={styles.container}>
  
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <img src ={profilePic} alt="Mayank Malhotra" className={styles.profileImage} />
        <p>Email: <a href="makmalhotra@outlook.com">makmalhotra@outlook.com</a></p>
        <p>Location: <span className={styles.whiteText}>München, Germany</span></p>
        <p>Github: <a href="github.com" target="_blank" rel="noopener noreferrer">githib.com/mygithub</a></p>
      </div>

      {/* Main */}
      <div className={styles.mainContent}>
          <h1>MAYANK M.</h1>
          
          {/* Experience*/}
          <div className={styles.experience}>
            <h2>Professional Experience</h2>
            
            <h3>Software Developer & Architect, Expleo Germany GmbH (August 2022-Present)</h3>
            <ul>
              <li>Concept owner & software architect for BMW EV Charging project, successfully integrated ISO15118-2/3 in the autosar classic platform stack in November 2024.</li>
              <li>Responsible for software architecture, designing APIs, state machines, sequence diagrams, requirements. (functional and non-functional)</li>
              <li>Application development for autmotive ecu's using Matlab-Simulink.</li>
              <li>Supporting automtoive ecu configuration & integration using DaVinci tools Developer and Configurator.</li>
              <li>Development of Expleo's internal desktop tool based on .NET8, using C# and XAML. MongoDB used as database.Use of REST API's to connect with SharePoint, Jira and Bitbucket.</li>
              <li>Microsoft Azure used to register and configure desktop app, use of OAUTH2 authentication.</li>
              <li>Implementation of CI/CD pipelines using Jenkins to run test scripts. Managing workflows using Jira kanban for SCRUM, GIT VCS.</li>
              <li>Good knowledge of EV charging standards: European & Chinese. Autosar classic and adaptive platform as well as communication bus systems CAN, Ethernet & FlexRay.</li>
              <li>Good knowledge of ASPICE, ISO26262 functional safety, Agile methodology.
              </li>
            </ul>

            <h3>Software Engineer, Cognizant Mobility GmbH (February 2022 to August 2022)</h3>
            <ul>
              <li>Training on automotive application development using DaVinci tools: developer, configurator, running simulations using Canoe and debugging using Lauterbach32 debugger.</li>
              <li>Benchmarking of Gateway ECU to determine efficiency of CAN bus.</li>
              <li>Implementation of MISRA-C rules and ASPICE standards for autmotive ecu development.
              </li>
            </ul>

           <h3>Master Thesis, ZeMa GmbH (January 2021 to February 2022) </h3>
           <ul>
            <li>Developed a keyword extraction system using NLP model BERT Transformer (bidirectional encoder representations from transformer).</li>
            <li>Data gathering, data processing and language model training, testing and evaluation.</li>
            <li>Comparison and benchmarking of different models like LSTMs, GRUs, BERT, RoBERTa, mBERT.</li>
            <li>Python language used for scripting.</li>
           </ul>

           <h3>Product Development Engineer, Landis & Gyr India, (March 2017 — July 2018)</h3>
           <ul>
            <li>Product development of smart electricity and water meters for smart city project.</li>
            <li>Managing portfolio of the product, responsible for product features and functionality.</li>
            <li>Managing documentation of the product, life cycle and roll-out.</li>
            <li>Supporting the product owner, technical team and the marketing team.</li>
            <li>Direct interaction with customers and stakeholders to develop product features.</li>
          </ul>           
          
          <h2>Internships</h2>
          <h3>Front End Development, Click Labs, India, (November 2016 — January 2017)</h3>
            <ul>
              <li>Development of website using AngularJS, Css3, HTML5, jQuery and Javascript.</li>
              <li>Git version control to manage code repo, REST APIs for data exchange</li>
            </ul>

            <h3>Software Development Trainee, Infosys, India, (May 2016 — July 2016)</h3>
            <ul>
              <li>Learning basics of software development, python language, database management using SQL queries.</li>
            </ul>

            <h3>Embedded System Trainee, HCI, India, (January 2016 — May 2016)</h3>         
            <ul>
              <li>Programmimng with micro-controllers such as 8051, 8086, Atmega8, Atmega328.</li>
              <li>Implemented counters, timers, led blinking, serial commutation such as SPI, I2C, UART</li>
            </ul>



          {/* end of experience div*/}   
          </div>


      
      {/* end of main div*/}
      </div>
     
      


    {/* end of container div*/}
    </div>
  )
}

export const Head = () => <title>Resume</title>

export default IndexPage