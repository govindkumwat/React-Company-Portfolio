import React from 'react'

export const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-12 mx-auto'>
            <div className="card" >
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.header}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
            </div>
            </div>
        </>
    )
}
