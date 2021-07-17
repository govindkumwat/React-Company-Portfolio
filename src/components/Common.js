import React from 'react'
import { NavLink } from 'react-router-dom'
export const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center justify-content-center header' >
                <div className='container-fluid nav_bg'>
                    <div className='row' >
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                        <div className=" center col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                        <h1>{props.heading} <strong className="brand-name">{props.brand}</strong>
                        </h1>
                        <h2 className='my-3'>
                            {props.desc}
                        </h2>
                        <div className='mt-3'>
                            <NavLink to={props.visit} className="btn-get-started">{props.button}</NavLink>
                        </div>
                        </div>
                        
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src={props.img} className="img-fluid animated" alt="home img" />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
