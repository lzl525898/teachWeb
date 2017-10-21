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
      },
      {
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
      },
      {
        key:3,
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
      },
      {
        key:4,
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
      },
      {
        key:5,
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
      },
      {
        key:6,
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
      },
      {
        key:7,
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
      },
      {
        key:8,
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
        <div style={{marginLeft:40,marginRight:40,marginTop:40, height: 500, display:"flex", flexWrap:"wrap"}}>
          {
            this.state.cardDataSource.map((data, index)=>{
              if (0==(index%6)) {
                return <TeacherCard key={data.key} cardDataSource={data} marginLeft={0} />
              } else if (0!=(index%6) && (index%6)<6) {
                return <TeacherCard key={data.key} cardDataSource={data}/>
              }
            })
          }
        </div>
      </div>
    )
  }
}

module.exports=Teacher;
