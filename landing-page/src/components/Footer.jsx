import React from 'react'
import SocialIcons from './SocialIcons'
import "../App.css"

export default function Footer() {
    return (
        <footer>
            <continer className="footer-container">
                <div className="footer-content-wrapper">
                    <h3>Created by Jason Coawette</h3>
                    <SocialIcons />
                </div>
                <p>© 2022 JC Ventures</p>
            </continer>
        </footer>
    )
}