import * as React from 'react';
import SliderApp from '../containers/SliderApp'


interface HomeProps {
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  return (
      <section>
          <SliderApp />
      </section>
  );
};

export default Home;
