import React, { Component } from 'react';
import {
  Icon,
  Input,
  Table,
  Select,
  Avatar,
  Popover,
  DatePicker,
} from 'antd';
import moment from 'moment';
import '../../../css/tables.css';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const defaultProps = {
  oneDay: false,
  marginTopWithFilter: 15
};
const Option = Select.Option;
const { RangePicker } = DatePicker;
const itemsContents = [{
    title: '课节名称',
    content: '课节的名称'
  },{
    title: '课程名称',
    content: '该课节所属的课程名称'
  },{
    title: '开课时间',
    content: '课节上课日期'
  },{
    title: '时间',
    content: '课节上课时间'
  },{
    title: '时长',
    content: '课节上课时长'
  },{
    title: '课节状态',
    content: '未开始，上课中，已结束'
  },{
    title: '课节学生数',
    content: '课节正常上课学生的数量'
  },{
    title: '旁听生数',
    content: '课节旁听生的数量'
  },{
    title: '台上人数',
    content: '教室内同时在台上的最大人数，旁听生不会出现在台上。'
  },{
    title: '实际上课时长',
    content: '教师在教室内的累计时长'
  },{
    title: '出勤 迟到 早退',
    content: '出勤状况'
  },{
    title: '平均学生评分',
    content: '所有评分学生的平均评分'
  }
];
const itemsExplain = (
  <div style={{ width: 300,height:400,overflowY:"scroll" }}>
    { itemsContents.map((data, index)=>{
        return (
          <div key={index}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",height:40}}>
              <div style={{background:"#88c7f4",width:5,height:5,borderRadius:5}}></div>
              <div style={{marginLeft:10,color:"#88c7f4"}}>{data.title}</div>
            </div>
            <div style={{margin:10}}>{data.content}</div>
          </div>
        )
      })
    }
  </div>
);

const columns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    width: 60,
    fixed: 'left',
    className: 'column-lesson',
    sorter: (a, b) => a.index - b.index,
    filtered: true
  }, {
    title: <div style={{textAlign:'center'}}>课节名称</div>,
    dataIndex: 'lessonname',
    key: 'lessonname',
    width: 240,
    className: 'column-lesson',
  }, {
    title: <div style={{textAlign:'center'}}>课程名称</div>,
    key: 'couorsename',
    dataIndex: 'couorsename',
    width: 240,
    className: 'column-lesson',
  },{
    title: <div style={{textAlign:'center'}}>开课日期</div>,
    dataIndex: 'startdates',
    key: 'startdates',
    width: 150,
    className: 'column-lesson',
  }, {
    title: <div style={{textAlign:'center'}}>时间</div>,
    dataIndex: 'time',
    key: 'time',
    className: 'column-lesson',
    width: 80
  },{
    title: <div style={{textAlign:'center'}}>时长</div>,
    dataIndex: 'duration',
    key: 'duration',
    width: 80,
    className: 'column-lesson',
  },{
    title: <div style={{textAlign:'center'}}>课节状态</div>,
    dataIndex: 'classstatus',
    key: 'classstatus',
    width: 90,
    className: 'column-lesson',
  },{
    title: <div style={{textAlign:'center'}}>课节学生数</div>,
    dataIndex: 'studentscount',
    key: 'studentscount',
    width: 110,
    className: 'column-lesson',
  },{
    title: <div style={{textAlign:'center'}}>旁听生数</div>,
    dataIndex: 'auditorcount',
    key: 'auditorcount',
    width: 90,
    className: 'column-lesson',
  },{
    title: <div style={{textAlign:'center'}}>台上人数</div>,
    dataIndex: 'platformpeople',
    key: 'platformpeople',
    width: 90,
    className: 'column-lesson',
  },{
    title: <div style={{textAlign:'center'}}>实际上课时长</div>,
    dataIndex: 'actualclasslength',
    key: 'actualclasslength',
    width: 110,
    className: 'column-lesson',
  },{
    title: <div style={{textAlign:'center'}}>出勤</div>,
    dataIndex: 'attendance',
    key: 'attendance',
    width: 80,
    className: 'column-lesson',
    render: (text) => {
      if (text=="缺勤") {
        return <div style={{color:"red"}}>{text}</div>;
      } else {
        return '--';
      }
    }
  },{
    title: <div style={{textAlign:'center'}}>迟到</div>,
    dataIndex: 'late',
    key: 'late',
    width: 80,
    className: 'column-lesson',
    render: (text) => {
      if (text=="迟到") {
        return <div style={{color:"red"}}>{text}</div>;
      } else {
        return '--';
      }
    }
  },{
    title: <div style={{textAlign:'center'}}>早退</div>,
    dataIndex: 'leaveearly',
    key: 'leaveearly',
    width: 80,
    className: 'column-lesson',
    render: (text) => {
      if (text=="早退") {
        return <div style={{color:"red"}}>{text}</div>;
      } else {
        return '--';
      }
    }
  },{
    title: <div style={{textAlign:'center'}}>平均学生评分</div>,
    dataIndex: 'averagestudentscore',
    key: 'averagestudentscore',
    width: 110,
    className: 'column-lesson',
  }];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    index: i + 1,
    lessonname: 'Scratch-01-01',
    couorsename: 'Scratch',
    startdates: '2017-11-11',
    time: '11:11',
    companyName: 'SoftLake Co',
    duration: '40分钟',
    classstatus: '已结束',
    studentscount: '--',
    auditorcount: '--',
    platformpeople: '1v6',
    actualclasslength: '--',
    attendance: '缺勤',
    late: '--',
    leaveearly: '--',
    averagestudentscore: '--'
  });
}

class SectionList extends Component {
  constructor(props){
    super(props);
    this.state = {
      lessonName:'',
      isEmptyWithLesson: true
    };
  }
  // 点击时间过滤器的OK的响应函数
  onClickRangePickerOK(){
    console.log('onClickRangePickerOK');
  }
  // 当时间过滤器发生改变的时候
  onChangeWithDatePicker(dates, dateStrings){
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  // 课节状态选择器失去焦点
  onBlurWithSection(){
    console.log("课节状态选择器失去焦点");
  }
  // 课节状态选择器回调
  onChangeWithSection(value){
    console.log("onChangeWithSection=>"+value);
  }
  // 课节输入点击搜索按钮时触发
  searchWithLesson(){
    this.setState({ isEmptyWithLesson: false });
  }
  // 课节输入点击搜索按钮时触发
  emptyWithLesson(){
    this.setState({ lessonName: '',isEmptyWithLesson:true });
  }
  // 当输入的课节名称有变化时触发
  onChangeLessonName(event){
    if (event.target.value=='') {
        this.setState({
          lessonName: event.target.value,
           isEmptyWithLesson: true
        });
    } else {
        this.setState({ lessonName: event.target.value });
    }
  }
  // 删除或搜索按钮
  searchOrdelete(status){
    if ('search'==status) {
      return <Icon type="search" onClick={this.searchWithLesson.bind(this)} />
    } else {
      return <Icon type="close-circle" onClick={this.emptyWithLesson.bind(this)} />
    }
  }
  render(){
    const { lessonName, isEmptyWithLesson } = this.state;
    const suffix = lessonName ? (isEmptyWithLesson==true ? this.searchOrdelete('search') : this.searchOrdelete('delete') ) : null;
    const lessonFilter = this.props.oneDay==false
    ?
      <div style={{display:"flex",flexDirection:"row"}}>
        <Input placeholder="输入课节名称"
               style={{width:210,marginRight:5}}
               suffix={suffix}
               value={lessonName}
               onChange={this.onChangeLessonName.bind(this)}
        />
        <RangePicker
          style={{width:280}}
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          placeholder={['请选择日期范围']}
          onChange={this.onChangeWithDatePicker.bind(this)}
          onOk={this.onClickRangePickerOK.bind(this)}
        />
        <Select
          mode="multiple"
          placeholder="全部课节状态"
          onBlur={this.onBlurWithSection.bind(this)}
          onChange={this.onChangeWithSection.bind(this)}
          style={{ width: 240, marginLeft:5 }}
        >
          <Option key={'notstart'}>未开始</Option>
          <Option key={'lessonstart'}>上课中</Option>
          <Option key={'lessonend'}>已结束</Option>
        </Select>
      </div>
    : <div></div>
    return(
      <div>
        { lessonFilter }
        <div style={{
          background:"#f7f7f7",height:38,marginTop:this.props.marginTopWithFilter,paddingLeft:10,
          display:"flex",fontSize:12,color:"#262626",alignItems:"center",
          border:"1px solid #cccccc", borderBottom:"0px"
        }}>
          授课课程数(1) 授课课节数(1) 出勤(0) 缺勤(1) 迟到(0) 早退(0)
          <div style={{display:"flex",justifyContent:"flex-end",flex:1}}>
            <Popover placement="left" content={ itemsExplain }>
              <div style={{ backgroundColor: '#88c7f4', marginRight:10, width:20,height:20,borderRadius:20}}>
                <Icon style={{marginTop:4}}type='question' />
              </div>
            </Popover>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          bordered={true}
          size="middle"
          scroll={{ x: "150%", y: false }}
        />
      </div>
    )
  }
}

SectionList.propTypes = {
  oneDay:React.PropTypes.bool.isRequired, // 显示一天（true）或全部（false）
  marginTopWithFilter:React.PropTypes.number // 表格与上面过滤器的间距
}
SectionList.defaultProps = defaultProps;

module.exports = SectionList;
