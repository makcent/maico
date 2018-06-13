import { Component } from  'react';
import { Icon, Form, Input, Button } from  'antd';
import styles from './index.less';

const FormItem = Form.Item;

@Form.create()
export default class Login extends Component {

	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	 }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div style={{ background:'#fff', padding:'20px' }}>
                 <div style={{ marginBottom:'10px'}}>
                    <h2 style={{ fontSize:'14px', fontWeight:'700', color:'#2e3135'}}>掘金 - juejin.im</h2>
                    <p style={{ margin:'0px', lineHeight:'25px'}}>一个帮助开发者成长的社区</p>
                    <p style={{ margin:'0px', lineHeight:'25px'}}>现在注册，送你45元买小册</p>
                 </div>
                  <Form onSubmit={this.handleSubmit} className={styles.login}>
                    <FormItem>
                      {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                      })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                      )}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit" style={{ width:'100%'}}>注册</Button>
                    </FormItem>
                  </Form>
                  <p style={{ margin:'0px'}}>第三方登录：
                      <Icon type="qq" style={{ fontSize:'20px', padding:'0px 5px'}} />
                      <Icon type="wechat" style={{ fontSize:'20px', padding:'0px 5px'}} />
                      <Icon type="github" style={{ fontSize:'20px', padding:'0px 5px'}} />
                  </p>
              </div>
		);
	}
}