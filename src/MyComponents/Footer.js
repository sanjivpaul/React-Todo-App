import React from 'react'
import '../MyComponentsCss/Footer.css'

export const Footer = () => {

// we can add style this way
  // let footerStyle = {
  //   position: "absolute",
  //   top: "100vh",
  //   width: "100%"
  // }

  return (
    <section className='FooterSection'>
          <footer className='bg-dark text-light py-3'>
      <p className="text-center">
        MyTodosList.com &copy; all rights reserved.
      </p>
    </footer>
    </section>

  )
}
