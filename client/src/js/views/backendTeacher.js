import React, { Component } from 'react';
import {
 Row,
 Col,
 Icon,
 Button,
 Input,
 Form,
 Card,
} from 'antd';

import TeacherCard from './components/teacherCard';
import TeacherDetail from './fragments/teacherDetail';

class Teacher extends Component {
  constructor(props){
    super(props);
    this.state={
      cardDataSource: [{
        key:1,
        userName: 'admin1',
        userPhone: '15046009860',
        checkDeviceInfo: [{
          url:"/client/images/student-headset-a.png",
          text:(
            <div>
              <div>检测结果 : 正常</div>
              <div>设备名称 : 扬声器(Realtek High Definition Au)</div>
            </div>
          )
        },{
          url:"/client/images/student-microphone-b.png",
          text:(
            <div>
              <div>检测结果 : 不正常</div>
              <div>设备名称 : 没有检测到麦克风</div>
            </div>
          )
        },{
          url:"/client/images/student-camera-b.png",
          text:(
            <div>
              <div>检测结果 : 不正常</div>
              <div>设备名称 : 没有检测到摄像头</div>
            </div>
          )
        },{
          url:"/client/images/student-computer-a.png",
          text:(
            <div>
              <div>操作系统 : Windows 7</div>
              <div>服务名称 : EEO-A1392(Auto)</div>
              <div>客户端IP : 1.189.209.2</div>
              <div>检测时间 : 2017-10-11 10:11:11</div>
            </div>
          )
        }]
      },{
        key:2,
        userName: 'admin2',
        userPhone: '15046009860',
        checkDeviceInfo: [{
          url:"/client/images/student-headset-a.png",
          text:(
            <div>
              <div>检测结果 : 正常</div>
              <div>设备名称 : 扬声器(Realtek High Definition Au)</div>
            </div>
          )
        },{
          url:"/client/images/student-microphone-b.png",
          text:(
            <div>
              <div>检测结果 : 不正常</div>
              <div>设备名称 : 没有检测到麦克风</div>
            </div>
          )
        },{
          url:"/client/images/student-camera-b.png",
          text:(
            <div>
              <div>检测结果 : 不正常</div>
              <div>设备名称 : 没有检测到摄像头</div>
            </div>
          )
        },{
          url:"/client/images/student-computer-a.png",
          text:(
            <div>
              <div>操作系统 : Windows 7</div>
              <div>服务名称 : EEO-A1392(Auto)</div>
              <div>客户端IP : 1.189.209.2</div>
              <div>检测时间 : 2017-10-11 10:11:11</div>
            </div>
          )
        }]
      }],
      isIntoDetail: false, // 是否进入详情页
      selectTeacher: '', // 当前点选的教师
    }
  }
  // 跳转
  breadcrumbWithTeacher(object){
    if ('teacher'==object.page) { // 点选教师列表页
      this.setState({
          isIntoDetail: false,
      });
    } else { // 点选指定教师的详情页
      console.log(object);
    }
  }
  // 进入教师详情页后，修改页面显示状态
  intoTeacherDetailPage(data){
    this.setState({
      isIntoDetail: true,
      selectTeacher: data.userName,
    });
  }
  render(){
    // 如果为true则隐藏，进入详情页面
    const handleWithTeacher = this.state.isIntoDetail==false
    ?
      (
        <div>
          <div style={{
            height: 66, background:'#fff',fontSize: '16px'
          }}>
            <Row>
              <Col span={3} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center",borderRight:"1px solid #cccccc"}}
                   onClick={this.breadcrumbWithTeacher.bind(this,{"page":"teacher","info":"null"})}>
                  <img src="/client/images/teacher-avatar.png" style={{width:20}}/>&nbsp;&nbsp;教师管理
              </Col>
              <Col span={3} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center"}}>
              </Col>
              <Col span={18} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"flex-end"}}>
                <Input placeholder="输入老师姓名或手机号码" style={{width:200,height:32,marginRight:5}}/>
                <Button style={{width:120, height:32,marginRight:5,background:"#88c7f4"}}>查找</Button>
                <Button style={{width:150, height:32,marginRight:20,background:"#88c7f4"}}>添加老师</Button>
              </Col>
            </Row>
          </div>
          <div style={{marginLeft:40,marginRight:40, minHeight: 500, display:"flex", flexWrap:"wrap"}}>
            {
              this.state.cardDataSource.map((data, index)=>{
                  return <TeacherCard
                            key={data.key} cardDataSource={data}
                            intoTeacherDetailPage={this.intoTeacherDetailPage.bind(this,data)}
                         />
              })
            }
          </div>
        </div>
      )
    : (
      <div>
        <div style={{
          height: 66, background:'#fff',fontSize: '16px'
        }}>
          <Row>
            <Col span={3} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center",borderRight:"1px solid #cccccc"}}
                 onClick={this.breadcrumbWithTeacher.bind(this,{"page":"teacher","info":"null"})}>
                <img src="/client/images/teacher-avatar.png" style={{width:20}}/>&nbsp;&nbsp;<a>教师管理</a>
            </Col>
            <Col span={3} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center",borderRight:"1px solid #cccccc"}}
                onClick={this.breadcrumbWithTeacher.bind(this,{"page":"detail","info":this.state.selectTeacher})}>
                {this.state.selectTeacher}
            </Col>
            <Col span={3} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center",borderRight:"1px solid #cccccc"}}
                onClick={this.breadcrumbWithTeacher.bind(this,{"page":"detail","info":this.state.selectTeacher})}>
                教室详情
            </Col>
            <Col span={15} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center"}}>
            </Col>
          </Row>
        </div>
        <div style={{marginLeft:40,marginRight:40, minHeight: 500}}>
          <TeacherDetail />
        </div>
      </div>
    )
    return(
      <div>
        { handleWithTeacher }
      </div>
    )
  }
}

module.exports=Teacher;
