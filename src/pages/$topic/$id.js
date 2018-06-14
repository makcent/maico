import React, { Component } from 'react';
import { Row, Col, List, Card } from  'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import styles from '../index.less';
import Login from '../../components/CardNote/Login';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

@connect(({ dispatch, category, topic, loading }) => ({
  dispatch,
  category,
  topic,
  loading
}))
export default class Index extends Component {

    componentDidMount() {
      //加载话题
      this.props.dispatch({
        type: 'topic/show',
        payload:{
          id: this.props.match.params.id
        }
      });
    }


    render() {
      const { loading, topic } = this.props;
      return (
        <Row style={{ width:'100%'}}>
          <Col xl={17} lg={17} md={16} sm={16} style={{ background:'#fff', margin:'10px 0px', padding:'10px 0px'}}>
            <Card bordered={false} loading={loading.models.topic} title={topic.detail.title} >
              <div dangerouslySetInnerHTML={{__html: topic.detail.content}}></div>
            </Card>
          </Col>
          <Col xl={7} lg={7} md={8} sm={9} style={{  padding:'10px 0px 10px 20px'}}>
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
