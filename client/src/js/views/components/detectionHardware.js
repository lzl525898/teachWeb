import React, { Component } from 'react';
import {
  Tooltip,
} from 'antd';
const defaultProps = {
  cameraUrl: "/client/images/student-camera-a.png",
  cameraText: (
    <div>
      <div>检测结果 : 不正常</div>
      <div>设备名称 : 没有检测到摄像头</div>
    </div>
  ), // React元素
  headsetUrl: "/client/images/student-headset-a.png",
  headsetText: (
    <div>
      <div>检测结果 : 正常</div>
      <div>设备名称 : 扬声器(Realtek High Definition Au)</div>
    </div>
  ),
  computerUrl: "/client/images/student-computer-a.png",
  computerText: (
    <div>
      <div>操作系统 : Windows 7</div>
      <div>服务名称 : EEO-A1392(Auto)</div>
      <div>客户端IP : 1.189.209.2</div>
      <div>检测时间 : 2017-10-11 10:11:11</div>
    </div>
  ),
  microphoneUrl: "/client/images/student-microphone-a.png",
  microphoneText: (
    <div>
      <div>检测结果 : 不正常</div>
      <div>设备名称 : 没有检测到麦克风</div>
    </div>
  )
}

class DetectionHardware extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{height:"100%",display:"flex"}}>
        <Tooltip placement="bottomLeft" title={this.props.headsetText} arrowPointAtCenter={true}>
          <div style={{flex:1}}><img src={this.props.headsetUrl} style={{width:24,height:24}}/></div>
        </Tooltip>
        <Tooltip placement="bottomLeft" title={this.props.microphoneText} arrowPointAtCenter={true}>
          <div style={{flex:1}}><img src={this.props.microphoneUrl} style={{width:24,height:24}}/></div>
        </Tooltip>
        <Tooltip placement="bottomLeft" title={this.props.cameraText} arrowPointAtCenter={true}>
          <div style={{flex:1}}><img src={this.props.cameraUrl} style={{width:24,height:24}}/></div>
        </Tooltip>
        <Tooltip placement="bottomLeft" title={this.props.computerText} arrowPointAtCenter={true}>
          <div style={{flex:1}}><img src={this.props.computerUrl} style={{width:24,height:24}}/></div>
        </Tooltip>
      </div>
    )
  }
}

DetectionHardware.propTypes = {
  cameraUrl: React.PropTypes.string.isRequired,
  cameraText: React.PropTypes.element.isRequired, // React元素
  headsetUrl: React.PropTypes.string.isRequired,
  headsetText: React.PropTypes.element.isRequired,
  computerUrl: React.PropTypes.string.isRequired,
  computerText: React.PropTypes.element.isRequired,
  microphoneUrl: React.PropTypes.string.isRequired,
  microphoneText: React.PropTypes.element.isRequired,
}
DetectionHardware.defaultProps = defaultProps;

module.exports = DetectionHardware;
