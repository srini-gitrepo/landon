import React from 'react';
import footerLinksData from './data/footer_links.json';

const Footer = () => {
    return (
        <footer className="scene">
            <article className="content">
                <div id="socialmedia">
                    <ul className="group">
                        {footerLinksData.map((link) => (
                            <li>
                                <a href={link.href}>
                                    <img
                                        className={link.class}
                                        src={link['img-src']}
                                        alt={link['alt-text']}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </footer>
    );
};

export default Footer;
