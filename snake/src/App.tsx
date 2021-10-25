import React, { useState } from 'react';
import './style/App.css';

import { Title } from './title';
import { Grid } from './grid';
import { Score } from './score';
import { Button } from './button';

export const App: React.FunctionComponent = () => {
  const [score, setScore] = useState(0);

  console.log("App rendering");
  
  return (
    <div className={'appContainer'} >
      <Title />
      <Grid />
      <div className={'appUtils'}>
        <Score currentScore={score}></Score>
        <Button />
      </div>
    </div>
  );
}
