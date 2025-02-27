import * as React from 'react'
import * as styles from '../components/layout.module.css'
import profilePic from '../images/icon.png'

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
          <h1>MAYANK MALHOTRA</h1>
          
          {/* Experience*/}
          <div className={styles.experience}>
            <h2>Experience</h2>
          </div>
      
      {/* end of main div*/}
      </div>
     
     


    {/* end of container div*/}
    </div>
  )
}

export const Head = () => <title>Resume</title>

export default IndexPage