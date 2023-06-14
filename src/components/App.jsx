import React from 'react';
import Clients from './Clients/Clients';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Section from './Section/Section';
import Team from './Team/Team';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <>
      <Section>
        <Header></Header>
      </Section>
      <Section>
        <Hero></Hero>
      </Section>
      <Section title={'OUR SERVICES'}>
        <Services></Services>
      </Section>
      <Section title={'OUR CLIENTS'}>
        <Clients></Clients>
      </Section>
      <Section title={'OUR TEAM'}>
        <Team></Team>
      </Section>
      <Footer></Footer>
    </>
  );
};
