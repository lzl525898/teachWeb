import React, { Component } from 'react';

import {
  Icon,
  Row,
  Col,
  Select,
  Input,
  Button,
  Form,
  Table,
  Tooltip,
} from 'antd';

import DetectionHardware from './components/detectionhardware';

import '../../css/tables.css';

const Option = Select.Option;
const FormItem = Form.Item;

var studentsTableColumns = [{
    title: <div style={{textAlign:'center'}}>学生姓名</div>,
    dataIndex: 'name',
    className: 'column-student',
    width: "10%"
  },{
    title: <div style={{textAlign:'center'}}>联系方式</div>,
    dataIndex: 'contact',
    className: 'column-student',
    width: "16%"
  },{
    title: <div style={{textAlign:'center'}}>自检结果</div>,
    dataIndex: 'selfcheck',
    className: 'column-student',
    width: "24%",
    render: function(text, record){
      return(
        <DetectionHardware
          cameraUrl = {text[2].url}
          cameraText = {text[2].text}
          headsetUrl = {text[0].url}
          headsetText = {text[0].text}
          computerUrl = {text[3].url}
          computerText = {text[3].text}
          microphoneUrl = {text[1].url}
          microphoneText = {text[1].text}
        />
      )
    }
  },{
    title: <div style={{textAlign:'center'}}>所报课程</div>,
    dataIndex: 'reported',
    className: 'column-student',
    width: "10%"
  },{
    title: <div style={{textAlign:'center'}}>出勤率</div>,
    dataIndex: 'attendance',
    className: 'column-student',
    width: "9%"
  },{
    title: <div style={{textAlign:'center'}}>上课数量</div>,
    dataIndex: 'count',
    className: 'column-student',
    width: "10%"
  },{
    title: <div style={{textAlign:'center'}}>状态</div>,
    dataIndex: 'status',
    className: 'column-student',
    width: "15%"
  },{
    title: <div style={{textAlign:'center'}}>评论</div>,
    dataIndex: 'comment',
    className: 'column-student',
    width: "6%"
  }
];

class Students extends Component {
  constructor(props){
    super(props);
    this.state={
      tableDataSource: [{
        key: '1',
        name: '刘彦明',
        contact: '18745105346',
        selfcheck: [{
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
        }],
        reported: 'ScratchJr',
        attendance: '100%',
        count: '0/0',
        status: '已过服务期',
        comment: 0,
      },
      {
        key: '2',
        name: '潘宇晴',
        contact: '18745105346',
        selfcheck: [{
          url:"/client/images/student-headset-a.png",
          text:(
            <div>
              <div>检测结果 : 正常</div>
              <div>设备名称 : 扬声器(Realtek High Definition Au)</div>
            </div>
          )
        },{
          url:"/client/images/student-microphone-a.png",
          text:(
            <div>
              <div>检测结果 : 正常</div>
              <div>设备名称 : 没有检测到麦克风</div>
            </div>
          )
        },{
          url:"/client/images/student-camera-a.png",
          text:(
            <div>
              <div>检测结果 : 正常</div>
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
        }],
        reported: 'ScratchJr',
        attendance: '100%',
        count: '0/0',
        status: '已过服务期',
        comment: 0,
      }]
    }
  }
  /*
  **查找学生的表单提交处理方法
  **
  **e：信号源
  **
  */
  findStudentHandleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.note) {
          console.log(values.note);
        } else {
          console.log('未定义');
        }
        console.log('Received values of form: ', values);
      }
    });
  }
  /*
  **select点选回调
  **
  **value：当前点选的item值
  **
  */
  selectHandleChange(value){
    console.log(value);
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <div style={{
          height: 66, background:'#fff',fontSize: '16px'
        }}>
        <Row>
          <Col span={3} style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"center",borderRight:"1px solid #cccccc"}}>
            <Icon type="team" style={{fontWeight:100}}/>&nbsp;&nbsp;学生管理
          </Col>
          <Col span={21}>
            <Row>
              <Col span={10}></Col>
              <Col span={14}>
                <Form
                  onSubmit={this.findStudentHandleSubmit.bind(this)}
                  style={{display: 'flex', alignItems: 'center',height: 66,justifyContent:"flex-end",width:"100%",height:66}}>
                  <FormItem style={{margin:0, padding:0, marginRight:5}}>
                    {getFieldDecorator('status', {
                        rules: [{ required: false }],
                        initialValue:"select"
                      })(
                      <Select
                        style={{width:200}}
                        onChange={this.selectHandleChange.bind(this)}
                      >
                        <Option value="select">请选择</Option>
                        <Option value="present">正在服务期</Option>
                        <Option value="past">已过服务期</Option>
                      </Select>
                    )}
                  </FormItem>
                  <FormItem  style={{margin:0, padding:0, marginRight:5}}>
                    {getFieldDecorator('note', {
                      rules: [{ required: false }],
                    })(
                      <Input
                        placeholder="请输入学生姓名或手机号"
                        style={{width:240}}/>
                    )}
                  </FormItem>
                  <FormItem  style={{margin:0, padding:0, marginRight:20}}>
                    <Button style={{width:130, background:"#88c7f4"}} htmlType="submit">
                      查找
                    </Button>
                  </FormItem>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        </div>
        <div style={{marginLeft:20,marginRight:20,marginTop:20, height: 500}}>
          <Table
            columns={ studentsTableColumns }
            dataSource={this.state.tableDataSource}
            bordered={true}
          />
        </div>
      </div>
    )
  }
}

const wrappedStudents = Form.create()(Students);
module.exports=wrappedStudents;
