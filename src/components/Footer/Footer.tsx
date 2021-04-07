import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Selene Park GitBlog")}</p>
                    <p style={{marginTop: "15px"}}></p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;