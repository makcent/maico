import React, { Component } from 'react';
import { Row, Col, List, Avatar, Icon, Card } from  'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import styles from './index.less';
import TagSelect from '../components/TagSelect';
import Login from '../components/CardNote/Login';

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
@connect(({ dispatch, category, topic, loading }) => ({
  dispatch,
  category,
  topic,
  loading
}))
export default class Index extends Component {

  componentDidMount() {
    //加载分类
    this.props.dispatch({
      type: 'category/fetch',
      payload:{
        page:1
      }
    });
    //加载话题
    this.props.dispatch({
      type: 'topic/fetch',
      payload:{
      }
    });
  }

  handleFormSubmit = (value) => {
   //加载话题
   this.props.dispatch({
      type: 'topic/fetch',
      payload:{
        category:value
      }
    });
  };
    render() {
      const { list } = this.props.category;
      const { loading } = this.props;
      return (
        <Row style={{ width:'100%'}}>
          <Col xl={17} lg={17} md={16} sm={16} style={{ background:'#fff', margin:'10px 0px', padding:'10px 0px'}}>
              <TagSelect loading={false} onChange={this.handleFormSubmit} expandable defaultValue="0">
                <TagSelect.Option value="0">推荐</TagSelect.Option>
                {
                  list.map(function(item){
                    return <TagSelect.Option key={item.name} value={item.topicCategoryId}>{item.title}</TagSelect.Option>
                  })
                }
              </TagSelect>
              <List
                itemLayout="vertical"
                dataSource={this.props.topic.list}
                renderItem={item => (
                  <Card bordered={false} loading={loading.models.topic}>
                     <List.Item
                      className={styles.topicList}
                      key={item.title}
                      actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                      extra={<img width={148} height={98} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={ <Link to={`/topic/${item.topicId}`}>{item.title}</Link>}
                        description={item.description}
                      />
                    </List.Item>
                  </Card>
                )}
              />
          </Col>
          <Col xl={7} lg={7} md={8} sm={9} style={{  padding:'10px 0px 10px 20px' }}>
              <Login />
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
