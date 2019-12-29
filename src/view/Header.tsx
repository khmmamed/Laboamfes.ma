import * as React from 'react';
import { Link as ScrollLink, scrollSpy } from 'react-scroll';

export interface HeaderProps {
}

export function Header(props: HeaderProps) {
    let options = {
        duration: 1000,
        offset: -100,
        smooth: true,
        spy: true,
        activeClass: 'nav-active'
    };
    return (
        <div>
            <header id="header">
                <div className="container">
                    <div className="logo-container">
                        <ScrollLink style={{ cursor: 'pointer' }} to="home" {...options} activeClass="">
                            <span className="logo-img" />
                            <span className="logo-text logo-text-part1">LaboAM</span>
                            <span className="logo-text logo-text-part2">Fes</span>
                        </ScrollLink>
                    </div>
                    <nav className="nav-main">
                        <ul>
                            <li><ScrollLink to="Acceuille" {...options}>Acceuille</ScrollLink></li>
                            <li><ScrollLink to="Service" {...options}>Service</ScrollLink></li>
                            <li><ScrollLink to="PourQuoi-Nous" {...options}>PourQuoi-Nous</ScrollLink></li>
                            <li><ScrollLink to="Catalogue" {...options}>Catalogue</ScrollLink></li>
                            <li><ScrollLink to="Equipe" {...options}>Equipe</ScrollLink></li>
                            <li><ScrollLink to="Rendez-Vous" {...options}>Rendez-Vous</ScrollLink></li>
                            <li><ScrollLink to="Contact" {...options}>Contact</ScrollLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
