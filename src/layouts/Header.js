import { Component } from  'react';
import { Menu, Row, Col, Input, Divider, Popover, Icon  } from 'antd';
import Link from 'umi/link';
import PropTypes from 'prop-types';
import styles from './Header.less';

const Search = Input.Search;

export default class Header extends Component {
	static contextTypes = {
	    isMobile: PropTypes.bool.isRequired,
	}

	state = {
	    menuVisible: false,
	};

  	render() {
  		const { menuVisible } = this.state;
	  	const { location } = this.props;
	  	const { isMobile } = this.context;
	  	const menu = (<Menu
  			  style={{ border:'none', fontSize:'16px', lineHeight:'56px' }}
		      selectedKeys={[location.pathname]}
		      mode="horizontal"
		    >
		      <Menu.Item key="/">
		        <Link to="/">首页</Link>
		      </Menu.Item>
		      <Menu.Item key="/posts">
		        <Link to="/posts">文章</Link>
		      </Menu.Item>
		      <Menu.Item key="/topic">
		        <Link to="/topic">话题</Link>
		      </Menu.Item>
		      <Menu.Item key="/course">
		        <Link to="/course">课程</Link>
		      </Menu.Item>
		      <Menu.Item key="/job">
		        <Link to="/job">招聘</Link>
		      </Menu.Item>
		    </Menu>);

	  	return (
		  	<header className={styles.header}>
		  		<Row align="top" type="flex" justify="center" className={styles.headerMain}>
			  		<Col xxl={3} xl={3} lg={3} md={3} sm={3} style={{ padding:'10px 0px'}}>
			  			<img alt="掘金" src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"/>
			  		</Col>
			  		<Col xxl={14} xl={14} lg={14} md={12} sm={11}>
			  			{isMobile && (
				          <Popover
				            overlayClassName="popover-menu"
				            placement="bottomRight"
				            content={menu}
				            trigger="click"
				            visible={menuVisible}
				            arrowPointAtCenter
				            onVisibleChange={this.onMenuVisibleChange}
				          >
				            <Icon
				              className="nav-phone-icon"
				              type="menu"
				              onClick={this.handleShowMenu}
				            />
				          </Popover>
				        )}
				        {!isMobile && menu}
			  		</Col>
			  		<Col xxl={7} xl={7} lg={7} md={9} sm={10} style={{ lineHeight:'59px', textAlign:'right'}}>
			  			<div style={{ display:'inline-block', paddingRight:'10px'}}>
			  				<Search
						      placeholder="input search text"
						      onSearch={value => console.log(value)}
						      enterButton
						      style={{ width: 200 }}
						    />
			  			</div>
					    <Link to="/register">注册</Link>
					    <Divider type="vertical" />
					    <Link to="/register">登录</Link>
			  		</Col>
			  	</Row>
		  	</header>
		);
	}
}
