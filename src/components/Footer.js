import React from 'react';
import InstaIcon from '../images/instagram-icon.svg';
import GitHubIcon from '../images/github-icon.svg';
import LinkedInIcon from '../images/linkedin-icon.svg';


export default function Footer() {
    return (
        <footer>
            <a href='https://www.instagram.com/lequeirozc/'  target="_blank"><img src={InstaIcon} alt='Instagram'/></a>
            <a href='https://github.com/lequeirozc'  target="_blank"><img src={GitHubIcon} alt='GitHub'/></a>
        </footer>
    );
};