import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import './header.less';

@observer
class Header extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  }

  render() {
    const { store } = this.context;
    
    return (
      <div className="header">
        <label  htmlFor="selectAll" className="head-item">
          <input
            id="selectAll"
            type="checkbox"
            checked={store.checkedAll}
            onChange={store.onCheckedAll}
          /> 全选
        </label>
        <div className="head-item flexMore">商品</div>
        <div className="head-item">单价</div>
        <div className="head-item flexMore">数量</div>
        <div className="head-item">小计</div>
        <div className="head-item">操作</div>
      </div>
    )
  }
};

export default Header;