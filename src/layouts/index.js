import React, { Component } from 'react';
import { Row } from  'antd';
import { enquireScreen } from 'enquire-js';
import PropTypes from 'prop-types';
import Header from './Header';
import withRouter from 'umi/withRouter';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});
class Layout extends Component{
  static childContextTypes = {
    isMobile: PropTypes.bool,
  };

  getChildContext() {
    return {
      isMobile: this.state.isMobile,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
      enquireScreen((b) => {
        this.setState({
          isMobile: !!b,
        });
      });
  }

  render() {
  	const { location, children, ...restProps } = this.props;
  	return (
  		<div className="layout">
  			<Header location={location} {...restProps} />
		  	<Row align="top" type="flex" justify="center" style={{ maxWidth:'1060px', margin:'0 auto', marginTop:'70px'}}>
		  		{ children }
		  	</Row>
  		</div>
	  );
  }
}

export default withRouter(Layout);