import React, { Component } from 'react';

import {
  Icon,
  Row,
  Col,
  Select,
  Input,
  Button,
  Form,
  Table
} from 'antd';

import '../../css/tables.css';

const Option = Select.Option;
const FormItem = Form.Item;

class Students extends Component {
  constructor(props){
    super(props);
    this.state={
      tableColumns: [{
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
          render: (text, record) =>(
            <div style={{height:"100%",display:"flex"}}>
              <div style={{flex:1}}>1</div>
              <div style={{flex:1}}>2</div>
              <div style={{flex:1}}>3</div>
              <div style={{flex:1}}>4</div>
            </div>
          )
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
      ],
      tableDataSource: [{
        key: '1',
        name: 0,
        contact: 0,
        selfcheck: 0,
        reported: 0,
        count: 0,
        status: 0,
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
        <div style={{marginLeft:20,marginRight:20,marginTop:20}}>
          <Table
            columns={this.state.tableColumns}
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
