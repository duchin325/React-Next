import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>

    <LeftSection>
      <SectionTitle main center>

        Welcome To, <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        This is just a portfolio prototype made in order to learn some basics of React and Nextjs
      </SectionText>
      <Button onClick = {() => window.location = 'http://google.com'}>
        Learn more
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;