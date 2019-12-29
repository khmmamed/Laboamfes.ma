import * as React from 'react';
import SliderApp from '../containers/SliderApp'
import { Header } from './Header';


interface HomeProps {
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
    <>
      <Header />
      <section>
          <SliderApp />
      </section>
    </>
  );
};

export default Home;
