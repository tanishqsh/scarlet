import React, { useState } from 'react';
import BottomPeak from '../../components/BottomPeak';
import Frame from '../Frame/Frame';
import StudioConcept from '../StudioConcept/StudioConcept';
import Back from '../../components/Back';

function Home() {
  const [currentState, changeState] = useState('');

  return (
    <div className={'home-container container-fluid'}>
      <StudioConcept currentState={currentState} />
      <BottomPeak changeState={changeState} theme={'primary'} />
      <Frame theme={'primary'} />
      <Back theme={'primary'} changeState={changeState} />
      <div className={'row inner-container'}>
        <div className={'col-sm-2'} />
        <div className={'col-sm-7'}>
          <h1 className={'title'}>
            {' '}
            Conceptualisation & Implementation{' '}
            <span onClick={() => changeState('-active')} className={'alt'}>
              {' '}
              Studio{' '}
            </span>{' '}
          </h1>
          <h3>
            {' '}
            A conceptualisation studio that expertises in advertising, branding
            and product development.{' '}
          </h3>
        </div>
        <div className={'col-sm-3'} />
      </div>
    </div>
  );
}

export default Home;
