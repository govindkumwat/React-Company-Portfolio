import React from 'react'
import { NavLink } from 'react-router-dom'
export const Contact = () => {
    return (
        <div>
            <div className='my-5 text-center'>
            <h1 className='tab-center'>Contact Us</h1>
        </div>
            <div className='container-fluid nav_bg'>
                <div className='row' >
                    <div className='col-lg-5 col-9 mx-auto'>
                        <form>

                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" />
                            </div>

                         

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea type="textarea" class="form-control" id="message" />
                            </div>
                            <NavLink to='' type="submit" class="btn btn-primary">Submit</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
