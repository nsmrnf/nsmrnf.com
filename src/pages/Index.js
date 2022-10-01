import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Index = () => (
  <Main
    description={"Nikita Smirnov's personal website."
    + 'co-founder and CEO of Finstarts LTD, and CFO of Buhgaltersky standart LLC.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to Nikita space</Link></h2>
          <p>
            Here you can read about me and reach me
          </p>
        </div>
      </header>
      <p> Contact me here. I do prefer telegram.</p>
      <ContactIcons />
    </article>
  </Main>
);

export default Index;
/*  <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
or you can check out my {' '}
<Link to="/resume">resume</Link>, {' '}
<Link to="/projects">projects</Link>, {' '}
view <Link to="/stats">site statistics</Link>, {' '}
or <Link to="/contact">contact</Link> me.
</p> */
