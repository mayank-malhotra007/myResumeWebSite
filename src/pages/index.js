import * as React from 'react'
import * as styles from '../components/layout.module.css'
import profilePic from '../images/icon.png'

const IndexPage = () => {
  return (

    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <img src ={profilePic} alt="Mayank Malhotra" className={styles.profileImage} />
        <p>Email: <a href="makmalhotra@outlook.com">makmalhotra@outlook.com</a></p>
        <p>Location: München, Germany</p>
        <p>Github: <a href="github.com" target="_blank rel=noopener noreferrer">githib.com/mygithub</a></p>
      </div>
      
      <div className={styles.mainContent}>
        <main>
          <h1>
            Mayank Malhotra  
          </h1>  
        </main>
      </div>
    </div>
  )
}

export const Head = () => <title>Resume</title>

export default IndexPage