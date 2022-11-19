import React from 'react'

const Navbar = () => {
  return (
    <header className='strip container-fluid '>
      <div className='container'>
        <div className="left_side">
          <img src="./images/shopify-2.jpg" alt="" />

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



