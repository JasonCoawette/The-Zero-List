import React from 'react'
import { ReactComponent as XIcon } from '../assets/icons/x_icon.svg';
import { ReactComponent as LinkedinIcon} from '../assets/icons/linkedin_icon.svg';
import { ReactComponent as GithubIcon} from '../assets/icons/github_icon.svg'
import "../App.css"

export default function SocialIcons() {
    return (
        <div className="social-icon-container">
            <a 
                className="social-icon"
                href="https://twitter.com/jasoncoawette" 
                target="_blank" 
                rel="noreferrer">
                <XIcon />
            </a>
            <a 
                className="social-icon"
                href="https://www.linkedin.com/in/jason-coawette" 
                target="_blank" 
                rel="noreferrer">
                <LinkedinIcon />
            </a>
            <a 
                className="social-icon"
                href="https://github.com/JasonCoawette" 
                target="_blank" 
                rel="noreferrer">
                <GithubIcon />
            </a>
        </div>
    );
}