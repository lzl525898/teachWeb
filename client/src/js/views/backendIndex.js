import React, { Component } from 'react';
import {
  Row,
  Col,
  Layout,
  Menu,
  Icon,
  Avatar,
  Badge,
  Dropdown } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu, Item } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const styles = {
  logoImg: {
    height: 36,
    marginTop: 12,
    marginLeft: 25,
  },
  header: {
    position:'fixed',
    top:0,
    left: 0,
    width: "100%",
    height: 60,
    background: '#91D08D'
  },
  sider: {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    marginTop:60
  },
  content: {
    background: '#f3f4f8',
    textAlign: 'center',
    marginTop: 60
  },
  contentLayout: {
    marginLeft: 150,
    height: '100%',
    background: '#ffba11'
  },
  menu: {
    width: 150,
    border: 0,
    paddingRight: 1,
    background: '#fafafa'
  },
  avatarMenu: {
    width: 120,
    textAlign:'center'
  }
}

class BackendMain extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render(){
    return(
      <div>
        <div style={{
          height: 50, background:'#fff',
          display: 'flex', alignItems: 'center',
          fontSize: '16px', paddingLeft: 15
        }}>
          中心首页
        </div>
        <div style={{background:'#F3F4F8'}}>
          <div style={{fontSize:'16px', display:'flex',alignItems:"center",
                       marginLeft:20, marginTop:16, marginBottom:5,color:'#363636'}}>
            {this.props.userName}&nbsp;&nbsp;({this.props.userPhone})
          </div>
          <Row style={{marginLeft:20,marginRight:20,background:"#ffba11"}}>
            <Col span={16}>col-12</Col>
            <Col span={1}>col-12</Col>
            <Col span={6}>col-12</Col>
          </Row>
        </div>
      </div>
    )
  }
}

class BackendIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName : localStorage.account
    };
  }
  componentWillMount(){
    const userToken = localStorage.token;
    const userName = localStorage.account;
    if (''==userName || undefined==userName ||
        ''==userToken || undefined==userToken ) {
      this.props.history.push('/manage/login');
    }else{
      this.setState({
        userPhone : this.props.location.state.userPhone
      });
    }
  }
  render(){
    const avatarMenu = (
      <Menu style={styles.avatarMenu}>
        <Menu.Item key='toMain'>
          <Link to="/manage/index">{this.state.userName}</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='toSetting'>
          <Link to=""><Icon type="setting" />账户设置</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='toNotify'>
          <Link to=""><Icon type="bell"/>&nbsp;&nbsp;消息通知</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='toFeedback'>
          <Link to="">意见反馈</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='toExit'>
          <Link to={{
            pathname: "/manage/login",
            state: { exit:true }
          }}>退出</Link>
        </Menu.Item>
      </Menu>
    );
    return(
      <div>
        <div style={styles.header}>
          <img style={styles.logoImg} src='/client/images/web-logo.png' alt='logo'/>
          <div style={{ float : 'right', height: 60, display: 'flex', alignItems:'center'}}>
            <Dropdown overlay={ avatarMenu } placement="bottomCenter">
                <span style={{ marginRight: 40, cursor: 'pointer'}}>
                  <Badge count={0}><Avatar shape="square" icon="user" /></Badge>
                </span>
            </Dropdown>
            <span style={{ marginRight: 15, cursor: 'pointer'}}>
              <Avatar size='small' shape="circle" icon="github" />
            </span>
          </div>
        </div>
        <Layout>
          <Sider width={150} style={styles.sider}>
            <Menu
              mode="inline"
              style={styles.menu}
            >
              <Menu.Item key="main"><span><Icon type="user" />机构主页</span></Menu.Item>
              <Menu.Divider />
              <Menu.Item key="course"><span><Icon type="laptop" />课程管理</span></Menu.Item>
                <Menu.Item key="1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程管理</Menu.Item>
                <Menu.Item key="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程统计</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="resource"><span><Icon type="notification" />资源管理</span></Menu.Item>
                <Menu.Item key="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云盘管理</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="educational"><span><Icon type="notification" />教务管理</span></Menu.Item>
                <Menu.Item key="4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教师管理</Menu.Item>
                <Menu.Item key="5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学生管理</Menu.Item>
                <Menu.Item key="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号速查</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="finance"><span><Icon type="notification" />财务中心</span></Menu.Item>
                <Menu.Item key="7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财务总览</Menu.Item>
                <Menu.Item key="8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单明细</Menu.Item>
              <Menu.Divider />
              <SubMenu
                key="setting"
                title={<span><Icon type="user" />设置中心</span>}
              >
                <Menu.Item key="9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设置中心1</Menu.Item>
                <Menu.Item key="10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设置中心2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={styles.contentLayout}>
            <Content style={{ overflow: 'initial', background: '#ffba11' }}>
              <div style={styles.content}>
                <BackendMain {...this.state} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Web Teach ©2017 Created by luckyforlei
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

module.exports=BackendIndex;
