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

import DetectionHardware from './components/detectionhardware';

class Teacher extends Component {
  constructor(props){
    super(props);
    this.state={
      cardDataSource: [{
        userName: 'admin',
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
      }]
    }
  }
  render(){
    return(
      <div>
        <div style={{
          height: 66, background:'#fff',fontSize: '16px'
        }}>
          <Row>
            <Col span={3} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center",borderRight:"1px solid #cccccc"}}>
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
        <div style={{marginLeft:40,marginRight:40,marginTop:40, height: 500}}>
          <Card style={{ width: 160 }} bodyStyle={{ padding: 0,background:"#f0f8fd" }}>
            <div style={{marginTop:16,paddingBottom:16,borderBottom:"1px solid #cccccc"}}>
              <img alt="defaultAvatar" height="100%" src="/client/images/teacher-default-avatar.png" />
            </div>
            <div style={{background:"#fff",paddingTop:16}}>
              <h3 style={{marginTop:-6}}>{this.state.cardDataSource[0].userName}</h3>
              <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"relative",marginTop:10}}>
                <Icon type="phone" style={{position:"absolute", paddingRight:110}}/>
                <p>{this.state.cardDataSource[0].userPhone}</p>
              </div>
              <div style={{height:35, marginTop:10}}>
                <DetectionHardware
                  cameraUrl = {this.state.cardDataSource[0].checkDeviceInfo[2].url}
                  cameraText = {this.state.cardDataSource[0].checkDeviceInfo[2].text}
                  headsetUrl = {this.state.cardDataSource[0].checkDeviceInfo[0].url}
                  headsetText = {this.state.cardDataSource[0].checkDeviceInfo[0].text}
                  computerUrl = {this.state.cardDataSource[0].checkDeviceInfo[3].url}
                  computerText = {this.state.cardDataSource[0].checkDeviceInfo[3].text}
                  microphoneUrl = {this.state.cardDataSource[0].checkDeviceInfo[1].url}
                  microphoneText = {this.state.cardDataSource[0].checkDeviceInfo[1].text}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

module.exports=Teacher;
