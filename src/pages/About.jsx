import React from 'react'

function About() {
  return (
    <div className='about'>
      <h1 className='about__h1'>
         <ion-icon name="information-circle-outline"></ion-icon> About Expenso
      </h1>
      <p className='about__p'>
        Expenso is a personal finance application designed 
        to help users manage their income and expenses in 
        a simple and efficient way. It allows users to 
        record transactions, categorize them and visualize 
        their impact on the balance sheet. The app features 
        dynamic graphs that facilitate the analysis of 
        financial movements and an intuitive interface to 
        perform operations such as adding, editing and 
        deleting transactions. Expenso seeks to provide 
        clarity on the user's financial situation, 
        helping them to make more informed decisions 
        about their money.
      </p>
      <div className="author">
        <span>Developer app: <a className='author-link' href="https://github.com/Monica-R">Mónica R. with ❤</a></span>
        <span>Languages and technologies used:</span>
        <div className='tech-icons'>
          <ion-icon name="logo-css3"></ion-icon>
          <ion-icon name="logo-javascript"></ion-icon>
          <ion-icon name="logo-nodejs"></ion-icon>
          <ion-icon name="logo-react"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
        </div>
      </div>
    </div>
  )
}

export default About