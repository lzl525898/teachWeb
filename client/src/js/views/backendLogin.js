import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  message,
  Checkbox
} from 'antd';

const { Header, Footer, Content } = Layout;

const styles = {
  layoutStyle : {
    height: "100%"
  },
  headerStyle : {
    height: "25%",
    backgroundColor: "#ececec"
  },
  footerStyle : {
    height: "25%",
    backgroundColor: "#ececec"
  },
  contentStyle : {
    height: "50%",
    backgroundColor: "#ececec"
  }
}

const FormItem = Form.Item;

message.config({
  top: 24,
  duration: 1,
});

class BackendLogin extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading : false
    };
  }
  componentDidMount(){
    // 设置上次登录的用户名
    this.props.form.setFieldsValue({
      userName: 'true'===localStorage.remember ? localStorage.account : '',
      remember: 'true'===localStorage.remember ? true : false
    });
  }
  componentWillReceiveProps(nextProps){
    try{
      if (true==this.props.location.state.exit) {
        localStorage.token='';
      }
    }catch(err){
      if (localStorage.token) {
        console.log('非正常退出.不需要清空本地存储');
      }
    }
  }
  handleSubmit(e){
    e.preventDefault();
    var _that = this;
    this.setState({isLoading:true});
    this.props.form.validateFields((err, values)=>{
      if (!err) {
        localStorage.setItem('remember', values.remember);
        localStorage.setItem('account', values.userName);
        var fetchOption = {
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({
            username: values.userName,
            password: values.password
          })
        };
        var result = fetch(window.hostIP+'/api/login', fetchOption);
        result.then(function(response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json()
          } else { // 请求服务器失败
            console.log('请求服务器失败');
            var error = new Error(response.statusText);
            error.response = response
            throw error
          }
        }).then(function(json) {
          _that.setState({isLoading:false});
          if ('success'==json.flag) {
            localStorage.token = json.token;
            _that.props.history.push('/manage/index',
            {
              'userName':values.userName,
              'userPhone':json.info.phone
            });
            console.log('用户名密码正确');
          } else if ('failed'==json.flag) {
            message.error('用户名或密码错误，请重新输入...');
          } else {
            message.error('网络异常...');
          }
        }).catch(function(ex) {
          console.log('failed', ex);
        });
      }else {
        // 输入错误是（未输入账号或密码）
        _that.setState({isLoading:false});
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Layout style={styles.layoutStyle}>
        <Header style={styles.headerStyle}></Header>
          <Content style={styles.contentStyle}>
            <Row style={{height:"100%"}}>
              <Col span={6}></Col>
              <Col span={14} style={{height:"100%"}}>
                <Row style={{height:"100%",minWidth:700,minHeight:350}}>
                  <Col span={12} style={{height:"100%"}}>
                    <img alt="logo" style={{width:"80%",float:"right"}}
                    src="/client/images/logo.png" />
                  </Col>
                  <Col span={1}></Col>
                  <Col span={9} style={{height:"100%"}}>
                      <Form onSubmit={this.handleSubmit.bind(this)} style={{width:"80%",height:"60%",marginTop:"20%"}}>
                        <FormItem>
                          {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账户...' }],
                          })(
                            <Input disabled={true==this.state.isLoading?true:false}
                                   prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                   placeholder="账户"/>
                          )}
                        </FormItem>
                        <FormItem>
                          {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码...' }],
                          })(
                            <Input disabled={true==this.state.isLoading?true:false}
                                   prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                   type="password" placeholder="密码" />
                          )}
                        </FormItem>
                        <FormItem>
                          {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                          })(
                            <Checkbox>记住</Checkbox>
                          )}
                          <a style={{float:"right"}} href="">忘记密码</a>
                          <Button type="primary" htmlType="submit" style={{width:"100%"}} loading={this.state.isLogin}>
                            登录
                          </Button>
                          或<a href="">注册</a>
                        </FormItem>
                      </Form>
                  </Col>
                  <Col span={2}></Col>
                </Row>
              </Col>
              <Col span={4}></Col>
            </Row>
          </Content>
        <Footer style={styles.footerStyle}></Footer>
      </Layout>
    );
  };
}

const BackendLoginForm = Form.create()(BackendLogin);

module.exports=BackendLoginForm;
