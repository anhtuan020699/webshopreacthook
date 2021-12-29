import React from 'react'

const Contact = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 >Have Some Question ?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6  d-flex justify-content-center">
                        <img src="https://images.unsplash.com/photo-1560264418-c4445382edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Contact" width="400px" />
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
