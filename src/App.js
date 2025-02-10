import React from 'react';
import "./styles/index.scss";
import HeaderInfos from './components/HeaderInfos';

const App = () => {
  return (
    <div className='app-container'>
      <header>
        <HeaderInfos />
      </header>

    </div>
  );
};

export default App;