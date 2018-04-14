import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <p>Demo app built using React with Bulma</p>
                        <p>APIs used: <a href="#">Newsapi</a> and <a href="#">SportDeer</a></p>
                    </div>
                    <div className="column">
                        <p>View more projects at <a href="#">my portfolio</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;