import * as React from 'react';
import SliderApp from '../containers/SliderApp'
import { Header } from './Header';
import AboutUs from './AboutUs'
import Service from './Service'
import ContactUs from './ContactUs'


interface HomeProps {
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <>
      <Header />
      <div>
        <section id="Home">
          <SliderApp />
          <ul className="home-options clearfix">
            <li className="home-options-item">
              <div className="option-item"></div>
              <p className="option-text">Rendez-Vous En ligne</p>
            </li>
            <li className="home-options-item">
              <div className="option-item"></div>
              <h2 className="option-text">Prelevement a domicile</h2>
            </li>
            <li className="home-options-item">
              <div className="option-item"></div>
              <h2 className="option-text">Urgence 24h/7j</h2>
            </li>
            <li className="home-options-item">
              <div className="option-item"></div>
              <h2 className="option-text">Assistance Medicale</h2>
            </li>
          </ul>
        </section>
        <Service />
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
