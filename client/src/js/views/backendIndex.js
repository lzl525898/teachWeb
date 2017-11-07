import React, { Component } from 'react';
import Chart from 'chart.js';
import {
  Row,
  Col,
  Tabs,
  Layout,
  Menu,
  Icon,
  Avatar,
  Badge,
  Table,
  Button,
  Popover,
  Tooltip,
  Calendar,
  DatePicker,
  Dropdown } from 'antd';

import { Link } from 'react-router-dom';
import moment from 'moment';
import '../../css/tables.css';
import Student from './backendStudent';
import Teacher from './backendTeacher';

const dateFormat = 'YYYY/MM/DD';
const TabPane = Tabs.TabPane;
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
    background: '#88C7F4',
    zIndex:10
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
    minWidth: 760,
    background: '#f3f4f8'
  },
  menu: {
    width: 150,
    border: 0,
    paddingRight: 1,
    background: '#fafafa'
  },
  avatarMenu: {
    width: 120,
    textAlign:'center',
    zIndex:9999
  },
  calendarContainer:{
    background:'#f3f4f8',
    position:'absolute',
    width: 230,
    border: '1px solid #d9d9d9',
    borderRadius: 4,
    top:30,
    right:0,
    zIndex:9
  },
  rightBtns:{
    width: 30,
    height: 30,
    marginLeft:10
  }
}

const courseColumns = [{
  title: <div style={{textAlign:'center'}}>昨日开课数</div>,
  dataIndex: 'courseCount',
  className: 'column-admin'
}, {
  title: <div style={{textAlign:'center'}}>总课程数</div>,
  dataIndex: 'allCount',
  className: 'column-admin'
}, {
  title: <div style={{textAlign:'center'}}>老师数量</div>,
  dataIndex: 'teacherCount',
  className: 'column-admin'
}, {
  title: <div style={{textAlign:'center'}}>学生数量</div>,
  dataIndex: 'studentCount',
  className: 'column-admin'
}, {
  title: <div style={{textAlign:'center'}}>截止日期</div>,
  dataIndex: 'closeData',
  className: 'column-admin'
}];

const courseData = [{
  key: '1',
  courseCount: 0,
  allCount: 1,
  teacherCount: 1,
  studentCount: 1,
  closeData: '2017-09-21'
}];

const orderColumns = [{
  title: <div style={{textAlign:'center'}}>未支付订单</div>,
  dataIndex: 'outOrder',
  className: 'column-admin'
}, {
  title: <div style={{textAlign:'center'}}>成功支付订单</div>,
  dataIndex: 'successOrder',
  className: 'column-admin'
}];

const orderData = [{
  key: '1',
  outOrder: 0,
  successOrder: 0,
}];

const courseLabels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","Orange"];
const courseDatasets = [{
    label: '完成课时数',
    data: [1,4, 3, 5, 1, 6,0],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',

        'rgba(255, 229, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 229, 64, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 3
}];
const courseOptions = {
    tooltips: {
        mode: 'point'
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        stacked: false,
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      }],
      xAxes: [{
        stacked: false,
        gridLines: {
          display: true
        }
      }]
    }
};

const courseType = 'bar';

class BackendMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab: 1,
    }
    // console.log(this.props);
  }
  componentDidUpdate(){
    var ctx = document.getElementById('courseChart'+(this.state.currentTab-1));
    var courseChart = new Chart(ctx, {
    type: courseType,
    data: {
            labels: courseLabels,
            datasets: courseDatasets
        },
        options: courseOptions
    });
  }
  componentWillMount(){
    console.log('BackendMain componentWillMount');
  }
  componentDidMount(){
    var ctx = document.getElementById('courseChart0');
    var courseChart = new Chart(ctx, {
    type: courseType,
    data: {
            labels: courseLabels,
            datasets: courseDatasets
        },
        options: courseOptions
    });
  }
  /*
  **点选时间过滤器的回调
  **
  **dates：时间对象
  **dateStrings：时间字符串
  **
  */
  handleDatePicker(dates, dateStrings){
    console.log('From: ', dateStrings, ', to: ', dateStrings);
  }
  /*
  **当前选择的tabs回调
  **
  **key：当前点选的tab所对应的key
  **
  */
  selectCurrentTabs(key){
    this.setState({currentTab:key});
  }
  /*
  **获取当前日期
  */
  getCurrentDate(){
    var date = new Date();
    var seperator = "/";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
    return currentdate;
  }
  render(){
    const buttonGroups = (
      <Row>
        <Col span={8}>
          <div style={{color:'#333333',fontSize:'16px',fontWeight:'bold',textAlign:'left',marginTop:20,marginLeft:20}}>完成课时数统计</div>
          <div style={{color:'#AAAAAA',fontSize:'12px',textAlign:'left',marginTop:3,marginLeft:20}}>截止2017-09-27 24:00，总计1课时</div>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <div style={{marginTop:20,marginRight:20,display:'flex',justifyContent:'flex-end'}}>
            <Tooltip placement="bottom" title={'折线图切换'}>
              <Button type="primary" style={styles.rightBtns}></Button>
            </Tooltip>
            <Tooltip placement="bottom" title={'柱形图切换'}>
              <Button type="primary" style={styles.rightBtns}></Button>
            </Tooltip>
            <Tooltip placement="bottom" title={'还原'}>
              <Button type="primary" style={styles.rightBtns}></Button>
            </Tooltip>
            <Tooltip placement="bottom" title={'保存为图片'}>
              <Button type="primary" style={styles.rightBtns}></Button>
            </Tooltip>
          </div>
        </Col>
      </Row>
    )
    return(
      <div>
        <div style={{
          height: 66, background:'#fff',
          display: 'flex', alignItems: 'center',
          fontSize: '18px', fontWeight: 'bold' ,paddingLeft: 15
        }}>
          中心首页
        </div>
        <div style={{background:'#F3F4F8'}}>
          <div style={{fontSize:'16px', display:'flex',alignItems:"center",
                       marginLeft:20, marginTop:16, marginBottom:5,color:'#363636'}}>
            {this.props.userName}&nbsp;&nbsp;({this.props.userPhone})
          </div>
          <Row style={{marginLeft:20,marginRight:20}}>
            <Col span={15}>
              <Table
                size="small"
                columns={courseColumns}
                dataSource={courseData}
                bordered={true}
                pagination={false}
              />
            </Col>
            <Col span={1}></Col>
            <Col span={8}>
              <Table
                size="small"
                columns={orderColumns}
                dataSource={orderData}
                bordered={true}
                pagination={false}
              />
            </Col>
          </Row>
        </div>
        <Row style={{marginLeft:20,marginRight:20, marginTop:50}}>
          <Col style={{fontSize:'16px', display:'flex',justifyContent:"flex-start",color:'#363636'}} span={12}>开课趋势图</Col>
          <Col style={{display:'flex',justifyContent:"flex-end"}} span={12}>
            <div style={{float:'right'}}>
              <DatePicker
                  defaultValue={moment(this.getCurrentDate(), dateFormat)}
                  format={dateFormat}
                  style={{width:230}}
                  onChange={this.handleDatePicker.bind(this)}
              />
            </div>
          </Col>
        </Row>
        <div style={{marginLeft:20,marginRight:20}}>
          <Tabs tabBarStyle={{display:'flex',justifyContent:'flex-start'}}
                type="card" onChange={this.selectCurrentTabs.bind(this)} defaultActiveKey='1'>
            <TabPane tab="1天" key="1" style={{background:'#fff',marginTop:-16}} forceRender={false}>
                { buttonGroups }
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}><canvas id="courseChart0" width='100%' height={300}></canvas></Col>
                    <Col span={2}></Col>
                </Row>
            </TabPane>
            <TabPane tab="7天" key="2" style={{background:'#fff',marginTop:-16}} forceRender={false}>
                { buttonGroups }
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}><canvas id="courseChart1" width='100%' height={300}></canvas></Col>
                    <Col span={2}></Col>
                </Row>
            </TabPane>
            <TabPane tab="30天" key="3" style={{background:'#fff',marginTop:-16}} forceRender={false}>
                { buttonGroups }
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}><canvas id="courseChart2" width='100%' height={300}></canvas></Col>
                    <Col span={2}></Col>
                </Row>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

class BackendIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName : localStorage.account,
      curSelectedMenuItemKeys : 'main'
    };
    try{
      // 通过登录跳转进入
      localStorage.setItem('currentPhone', this.props.location.state.userPhone);
    } catch (err) {
      // 通过url路径跳转进入，保留上次登录时的用户手机号
    }
  }
  componentWillMount(){
    const userToken = localStorage.token;
    const userName = localStorage.account;
    if (''==userName || undefined==userName ||
        ''==userToken || undefined==userToken ) {
      this.props.history.push('/manage/login');
    }else{
      this.setState({
        userPhone : localStorage.currentPhone
      });
    }
  }
  componentDidMount(){
    this.setState({
      showContent: <BackendMain {...this.state} />
    })
  }
  /*
  **点选菜单的回调函数
  **
  **item：当前点选被选中时相关数据 {item, key, selectedKeys}
  **
  */
  onSelectMenuItem(info){
    var curKey = info.key;
    var curContent;
    this.setState({curSelectedMenuItemKeys:curKey});
    if ('main'==curKey) {
      curContent = <BackendMain {...this.state} />
    } else if ('course_manage'==curKey) {     //课程管理

    } else if ('course_statistics'==curKey) { // 课程统计

    } else if ('resource_manange'==curKey) {  // 云盘管理

    } else if ('teacher_manage'==curKey) {    // 教师管理
      curContent = <Teacher {...this.state} />
    } else if ('student_manage'==curKey) {    // 学生管理
      curContent = <Student {...this.state} />
    } else if ('account_find'==curKey) {      // 财务总览

    } else if ('order_details'==curKey) {     // 订单明细

    }
    this.setState({
      showContent : curContent
    });
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
                  <Badge count={0}><Avatar shape="square" icon="user"/></Badge>
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
              onSelect={this.onSelectMenuItem.bind(this)}
              selectedKeys={[this.state.curSelectedMenuItemKeys]}
            >
              <Menu.Item key="main"><span><Icon type="user" />机构主页</span></Menu.Item>
              <Menu.Divider />
                <Menu.Item disabled={true} key="course"><span><Icon type="laptop" />课程管理</span></Menu.Item>
                <Menu.Item key="course_manage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程管理</Menu.Item>
                <Menu.Item key="course_statistics">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程统计</Menu.Item>
              <Menu.Divider />
              <Menu.Item disabled={true} key="resource"><span><Icon type="notification" />资源管理</span></Menu.Item>
                <Menu.Item key="resource_manange">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云盘管理</Menu.Item>
              <Menu.Divider />
              <Menu.Item disabled={true} key="educational"><span><Icon type="notification" />教务管理</span></Menu.Item>
                <Menu.Item key="teacher_manage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教师管理</Menu.Item>
                <Menu.Item key="student_manage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学生管理</Menu.Item>
                <Menu.Item key="account_find">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号速查</Menu.Item>
              <Menu.Divider />
              <Menu.Item disabled={true} key="finance"><span><Icon type="notification" />财务中心</span></Menu.Item>
                <Menu.Item key="finance_overview">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财务总览</Menu.Item>
                <Menu.Item key="order_details">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单明细</Menu.Item>
              <Menu.Divider />
              <SubMenu
                key="setting"
                title={<span><Icon type="user" />设置中心</span>}
              >
                <Menu.Item key="9">设置中心1</Menu.Item>
                <Menu.Item key="10">设置中心2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={styles.contentLayout}>
            <Content style={{ overflow: 'initial', background: '#ffba11' }}>
              <div style={styles.content}>
                { this.state.showContent }
              </div>
            </Content>
            <Footer style={{ textAlign: 'center',marginLeft:20,marginRight:20}}>
              Web Teach ©2017 Created by luckyforlei
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

module.exports=BackendIndex;
