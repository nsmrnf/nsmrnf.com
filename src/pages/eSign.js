import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const eSign = () => (
  <Main
    title="eSign"
    description="eSign validate"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">eSign Validate</Link></h2>
        </div>
      </header>
    </article>
  </Main>
);

export default eSign;
