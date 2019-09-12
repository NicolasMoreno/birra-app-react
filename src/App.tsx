import React from 'react';
import {HomeContainer} from './containers/HomeContainer'
import { createBrowserHistory } from "history";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <HomeContainer history={createBrowserHistory()}/>
    </div>
  );
}

export default App;
