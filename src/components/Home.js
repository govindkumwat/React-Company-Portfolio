import React from 'react'
import { Common } from './Common'
import  web  from '../images/men.svg'
export const Home = () => {
    return (
        <>
           <Common 
           heading='Grow Your Bussiness' 
           brand='JRTechinical' 
           button='Explore' 
           desc='We are the team of experinced React Developers' 
           img={web} 
           visit='/service'/>
        </>
    )
}
