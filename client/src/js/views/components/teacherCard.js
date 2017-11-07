import React, { Component } from 'react';
import {
  Card,
  Icon
} from 'antd';

import DetectionHardware from './detectionhardware';

const defaultProps = {
  marginLeft: 40,
  marginTop: 40,
  cardData : [{
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

class TeacherCard extends Component {
  currentTeacherItem(data){
    this.props.intoTeacherDetailPage(data);
  }
  render(){
    return(
      <Card style={{ width: 160, height: 270, marginLeft: this.props.marginLeft, marginTop: this.props.marginTop }}
            bodyStyle={{ padding: 0,background:"#f0f8fd" }} onClick={this.currentTeacherItem.bind(this,this.props.cardDataSource)}>
        <div style={{marginTop:16,paddingBottom:16,borderBottom:"1px solid #cccccc"}}>
          <img alt="defaultAvatar" height="100%" src="/client/images/teacher-default-avatar.png" />
        </div>
        <div style={{background:"#fff",paddingTop:16}}>
          <h3 style={{marginTop:-6}}>{this.props.cardDataSource.userName}</h3>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"relative",marginTop:10}}>
            <Icon type="phone" style={{position:"absolute", paddingRight:110}}/>
            <p>{this.props.cardDataSource.userPhone}</p>
          </div>
          <div style={{height:35, marginTop:10}}>
            <DetectionHardware
              cameraUrl = {this.props.cardDataSource.checkDeviceInfo[2].url}
              cameraText = {this.props.cardDataSource.checkDeviceInfo[2].text}
              headsetUrl = {this.props.cardDataSource.checkDeviceInfo[0].url}
              headsetText = {this.props.cardDataSource.checkDeviceInfo[0].text}
              computerUrl = {this.props.cardDataSource.checkDeviceInfo[3].url}
              computerText = {this.props.cardDataSource.checkDeviceInfo[3].text}
              microphoneUrl = {this.props.cardDataSource.checkDeviceInfo[1].url}
              microphoneText = {this.props.cardDataSource.checkDeviceInfo[1].text}
            />
          </div>
        </div>
      </Card>
    )
  }
}

TeacherCard.propTypes = {
  marginLeft: React.PropTypes.number, // 左边距离
  marginTop: React.PropTypes.number, //上边距离
  cardDataSource: React.PropTypes.object.isRequired // 教师面板相关信息
}
TeacherCard.defaultProps = defaultProps;

module.exports=TeacherCard;
