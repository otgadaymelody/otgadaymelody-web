import React from 'react';
import './App.css';

import './index.css';
import './assets/css/main.css';
import './assets/css/fonts.css';
import './assets/css/layout.css';

import Layout from '@components/layout/Layout';

function App(): React.ReactElement {
  const searchParams = new URLSearchParams(document.location.search);

  if (searchParams.get('demoVersion') != null) {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }

  window.location.replace('https://vk.com/otgaday.melody');

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
