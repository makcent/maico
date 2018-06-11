import React, { Component } from 'react';
import { Row, Col } from  'antd';
import Header from './Header';
import withRouter from 'umi/withRouter';

class Layout extends Component{
  render() {
  	const { location, children } = this.props;
  	return (
	  	<Row align="top" type="flex" justify="center">
	  		<Col xl={24}>
	  			<Header location={location} />
	  		</Col>
	  		<Col xl={18} style={{ marginTop:'70px'}}>
	  			{ children }
	  		</Col>
	  	</Row>
	  );
  }
}

export default withRouter(Layout);