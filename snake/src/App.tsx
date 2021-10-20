import React, { useState } from 'react';

import { Grid } from './grid';
import { Score } from './score';

export const App: React.FunctionComponent = () => {
  const [score, setScore] = useState(0);

  return (
    <div style={{display: 'flex', backgroundColor:'darkgreen', width:'800px', height:'800px'}}>
      <Grid size={100}/>
      <Score currentScore={score}></Score>
    </div>
  );
}
