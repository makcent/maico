import { Component } from  'react';
import { Menu, Row, Col, Input, Divider   } from 'antd';
import Link from 'umi/link';
import './Header.less';

const Search = Input.Search;

export default class Header extends Component {
  	render() {
	  	const { location } = this.props;
	  	return (
		  	<Row align="top" type="flex" justify="center" style={{ position:'fixed', top:'0', left:'0', right:'0', zIndex:'999', background:'#fff', borderBottom:'1px solid rgba(178,186,194,.15)', boxShadow:'1px 1px 2px rgba(178,186,194,.15)'}}>
		  		<Col xxl={2} xl={2} lg={2} md={3} sm={3} style={{ padding:'10px 0px'}}>
		  			<img alt="掘金" src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"/>
		  		</Col>
		  		<Col xxl={10} xl={10} lg={13} md={12} sm={11}>
		  			<Menu
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
				    </Menu>
		  		</Col>
		  		<Col xxl={6} xl={6} lg={7} md={9} sm={10} style={{ lineHeight:'59px', textAlign:'right'}}>
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
		  );
	}
}
