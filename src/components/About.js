import React from 'react'
import { Common } from './Common'
import web from '../images/robo.svg'
export const About = () => {
    return (
        <>
           <Common heading='Welcome on the about page of ' brand='JRDigital' desc='Contact Us for more info' button='Contact Us' visit='/contact' img={web}/>
        </>
    )
}

