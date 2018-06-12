import React, { Component } from 'react';
import { Row, Col, List, Avatar, Icon, Form, Input, Button, Card } from  'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import styles from './index.less';
import TagSelect from '../components/TagSelect';

const FormItem = Form.Item;

const listData = [];
for (let i = 1; i <= 10; i++) {
  listData.push({
    href: `/topic/${i}`,
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
@connect(({ dispatch }) => ({
  dispatch
}))
@Form.create()
export default class Index extends Component {

  componentDidMount() {
    //加载分类
    this.props.dispatch({
      type: 'topic/category/fetch',
    });
    
  }

  handleFormSubmit = (value) => {
    //const { form, dispatch } = this.props;
    // setTimeout 用于保证获取表单值是在所有表单字段更新完毕的时候
    console.info(value);
  };

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
        <Row>
          <Col xl={17} lg={17} md={16} sm={16} style={{ background:'#fff', margin:'10px 0px', padding:'10px 0px'}}>
              <TagSelect onChange={this.handleFormSubmit} expandable defaultValue="cat1">
                <TagSelect.Option value="cat1">推荐</TagSelect.Option>
                <TagSelect.Option value="cat2">前端</TagSelect.Option>
                <TagSelect.Option value="cat3">后台</TagSelect.Option>
                <TagSelect.Option value="cat4">区块链</TagSelect.Option>
                <TagSelect.Option value="cat5">移动开发</TagSelect.Option>
                <TagSelect.Option value="cat6">人工智能</TagSelect.Option>
                <TagSelect.Option value="cat7">无人驾驶</TagSelect.Option>
              </TagSelect>
              <List
                itemLayout="vertical"
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    className={styles.topicList}
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={148} height={98} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
          </Col>
          <Col xl={7} lg={7} md={8} sm={9} style={{  padding:'10px 0px 10px 20px' }}>
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
               <Card className={styles.topicPayment} title="付费问答" extra={<Link to="/">查看全部</Link>} style={{ margin:'15px 0px' }} bodyStyle={{padding:'0px'}}>
                <List
                  size="small"
                  dataSource={data}
                  renderItem={item => (<List.Item style={{ padding:'0px 15px', lineHeight:'45px', overflow:'hidden', height:'45px', alignItems:'baseline', borderBottom:'1px dashed #f6f6f6'}}>{item}</List.Item>)}
                />
              </Card>
              <Card
                bordered={false}
                bodyStyle={{ padding:'0px'}}
                cover={<img alt="example" src="http://p3.pstatp.com/list/300x170/834a0002e0b04a9f5c5b" />}
              >
              </Card>
          </Col>
        </Row>
      );

    }  
}
