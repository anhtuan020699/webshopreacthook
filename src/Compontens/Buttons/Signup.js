import React from 'react'

const Signup = () => {
  return (
    <>

      <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span className="fa fa-user-plus ms-1"></span> Signup
      </button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModal">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">Register</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
