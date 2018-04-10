import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import MainItems from './mainItems'

@observer
class Main extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  render() {
    const {store} = this.context;
    return (
      <div className="main">
        {store.list.map((z, i) => <MainItems data={z} key={i}/>)}
      </div>
    );
  }
}

export default Main;