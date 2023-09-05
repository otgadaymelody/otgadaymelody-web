import React from 'react';
import './App.css';

import './index.css';
import './assets/css/main.css';
import './assets/css/fonts.css';
import './assets/css/layout.css';

import Layout from '@components/layout/Layout';

function App(): React.ReactElement {
  document.location.href = 'https://teletype.in/@otgaday.melody';
  return <div className="App">{/* <Layout /> */}</div>;
}

export default App;
