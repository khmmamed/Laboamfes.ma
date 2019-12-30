import * as React from 'react';

export interface AboutAppProps {
}

export default class AboutApp extends React.PureComponent<AboutAppProps> {
  public render() {
    let links = ['Notre Approche Qualite', 'Our biography', 'Catalogue des Analyses'].map((item, index) => {
        let classes = `about-nav-item `;

        return (
            <li key={index}
                className={classes}>
                {item}
            </li>
        );
    });

    return (
        <div id="about-block">
            <ul className="about-nav">
                {links}
            </ul>
        </div>
    );
  }
}
