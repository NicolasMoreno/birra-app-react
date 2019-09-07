import React from 'react';
import {SideBarContainer} from './containers/SideBarContainer'
import {Button} from 'primereact/button'
import logo from './logo.svg';
import {TaskContainer} from './containers/TaskContainer'

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <TaskContainer/>
    </div>
  );
}

export default App;
