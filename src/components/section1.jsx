import React from 'react'

const Section1 = () => {
  return (
    <div className='section-1 container-fluid'>

        <div className="left-side-sec1">
          <div className="para">
          <h1>
             If you can dream <br />
              it, you can sell it with Shopify
          </h1>

          <h3>Build your business here. Take it anywhere.</h3>
          </div>

          <div className="sub">
            <input className='form-control w-50' type="email" placeholder='enter your email address' />
            <button className='btn btn-info'>start free trail</button>
          </div>

          <h6>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</h6>
        </div>


          <div className="right-side-sec1">
            <img src="./images/webdisin.webp"  alt="" />
          </div>
    </div>  
  )
}

export default Section1