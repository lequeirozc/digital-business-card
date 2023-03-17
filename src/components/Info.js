import React from 'react';
import Picture from '../images/profile-picture.jpg';
import EmailIcon from '../images/email-icon.svg';
import LinkedinIcon from '../images/linkedin-icon.svg';

export default function Info() {
    
    return (
        <main className='info'>
            <img 
            src={Picture} 
            alt='Profile' 
            className='profile-picture'
            />
            <h1>Leticia Queiroz Carvalho</h1>

            <h3>Frontend Developer</h3>
            <a href='https://lequeirozc.github.io/portfolio/' target='_blank' className='portfolio-link'>lequeirozc.github.io/portfolio/</a>

            <div className='buttons-section'>
                <a href='mailto:lequeirozcvl@gmail.com' target='_blank'><button  className='email-button main-buttons'><img src={EmailIcon} alt='Icon'/>Email</button></a>
                <a href='https://www.linkedin.com/in/lequeirozc/' target='_blank'><button className='linkedin-button main-buttons'><img src={LinkedinIcon} alt='Icon'/>LinkedIn</button></a>
            </div>
        </main>
    )
};
