import React from 'react'

const Navbar = () => {
  return (
    <header className='container-fluid '>
      <div className='container'>

          <div className="logo">      
          <img src="./images/shopify-2.jpg" alt="" />
          </div>


        <div className="left_side">
          <nav>
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">About Us</a>
            <a href="#">Our Location</a>
            <a href="#">Games</a>
          </nav>
        </div>


        <div className="right_side">
        <nav>
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">About Us</a>
            <button className='btn btn-success'>start free trail</button>
          </nav>
        </div>

      </div>

    </header>
  )
}

export default Navbar



