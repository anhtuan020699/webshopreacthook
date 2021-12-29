import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div>
          <div className="container py-5 my-5">
              <div className="row">
                  <div className="col-md-6">
                      <h1 className='text-primary fw-bold mb-4'>About Us </h1>
                      <p className="lead mb-4">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aut, atque maiores ipsum quisquam natus doloremque facilis enim rerum mollitia ipsam quo aliquid vitae recusandae dignissimos nesciunt optio incidunt eum.
                      </p>
                      <Link to="/contact" className="btn btn-outline-primary px-3">Contact Us</Link>
                  </div>
                  <div className="col-md-6">
                      <img src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                  </div>
              </div>
          </div>
        </div>
    )
}

export default About
