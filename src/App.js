import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import Items from './models/items';
import Provider from './models/provider';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


import './index.less'

const store = new Items();

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <div className="wrap">
          <h1>React+Mobx购物车示例</h1>
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App;