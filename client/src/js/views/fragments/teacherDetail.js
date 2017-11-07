import React, { Component } from 'react';
import {
  Tabs,
  Row,
  Col,
  Icon,
  Alert,
  Button,
  Calendar,
} from 'antd';

import moment from 'moment';
import SectionList from '../components/sectionList';

const TabPane = Tabs.TabPane;

class TeacherDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: moment(this.getCurrentDate()),
      selectedValue: moment(this.getCurrentDate()),
    }
  }
  /*
  **日期面板变化回调
  */
  onPanelChange(value){
     this.setState({ value });
  }
  /*
  **点击选择日期回调
  */
  onSelect(value){
    this.setState({
      value,selectedValue: value,
    });
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
    return(
      <div style={{minWidth:860}}>
        <Row>
          <Col span={12} style={{display:"flex",height:160,marginTop: 40}}>
            <div style={{height:170,borderRadius:"20px",border:"1px solid #cccccc",float:"left"}}><img alt="defaultAvatar" height="100%"
                src="/client/images/teacher-default-avatar.png" />
            </div>
            <div style={{float:"left",width:160,width:240,marginLeft:20, display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>
              <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",height:50,marginTop:-10}}>
                <span style={{fontSize:24}}>admin</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<Button style={{height:30}}><Icon type="edit"/>编辑</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;<Button style={{height:30}}><Icon type="lock"/>停用</Button>
              </div>
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <span style={{fontSize:12,fontWeight:"bold",color:"#486a63"}}>手机&nbsp;:&nbsp;&nbsp;</span>
                <span style={{fontSize:12,color:"#486a63"}}>15046009860</span>
              </div>
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <span style={{fontSize:12,fontWeight:"bold",color:"#486a63"}}>性别&nbsp;:&nbsp;&nbsp;</span>
                <span style={{fontSize:12,color:"#486a63"}}>--</span>
              </div>
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <span style={{fontSize:12,fontWeight:"bold",color:"#486a63"}}>地区&nbsp;:&nbsp;&nbsp;</span>
                <span style={{fontSize:12,color:"#486a63"}}>--</span>
              </div>
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <span style={{fontSize:12,fontWeight:"bold",color:"#486a63"}}>简介&nbsp;:&nbsp;&nbsp;</span>
                <span style={{fontSize:12,color:"#486a63"}}>--</span>
              </div>
            </div>
          </Col>
          <Col span={12} style={{display:"flex",justifyContent:"flex-end"}}>
            <div style={{marginTop:40,dispaly:"flex"}}>
              <div style={{border:"1px solid #cccccc",float:"left",height:80,width:195}}>
                <div style={{fontSize:24,fontWeight:"bold",color:"#818e9b",marginTop:7}}>1/1</div>
                <div style={{fontSize:14,fontWeight:300,color:"#818e9b"}}>授课课程进度</div>
              </div>
              <div style={{float:"left",height:80,width:10}}></div>
              <div style={{border:"1px solid #cccccc",float:"left",height:80,width:195}}>
                <div style={{fontSize:24,fontWeight:"bold",color:"#818e9b",marginTop:7}}>1/1</div>
                <div style={{fontSize:14,fontWeight:300,color:"#818e9b"}}>授课课节进度</div>
              </div>
              <div style={{clear:"both",height:10,width:400}}></div>
              <div style={{border:"1px solid #cccccc",clear:"both",height:80,width:400}}>
                <div style={{fontSize:24,fontWeight:"bold",color:"#818e9b",marginTop:7}}>0/0/0/0</div>
                <div style={{fontSize:14,fontWeight:300,color:"#818e9b"}}>出勤/缺勤/迟到/早退</div>
              </div>
            </div>
          </Col>
        </Row>
        <Tabs defaultActiveKey="1" tabBarStyle={{display:'flex',justifyContent:'flex-start',marginTop:25}}>
          <TabPane tab="课节列表" key="1"><SectionList oneDay={false}/></TabPane>
          <TabPane tab="日历课表" key="2">
            <div>
              <Alert message={`当前日期 : ${this.state.selectedValue && this.state.selectedValue.format('YYYY-MM-DD')}`} />
              <Calendar
                  dateFullCellRender={(date)=>{
                    return <div style={{height:40,border:"1px solid #c6c6c6",textAlign:"right"}}>
                              <span style={{marginRight:10}}>{date.format('DD')}</span>
                           </div>
                  }}
                  onPanelChange={this.onPanelChange.bind(this)}
                  onSelect={this.onSelect.bind(this)}
              />
            </div>
            <SectionList oneDay={true} marginTopWithFilter={0}/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

module.exports = TeacherDetail;
