import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentItem from './StudentItem'
class Students extends Component {
    renderStudentList=()=>{
        let {studentList,keyword}=this.props;
        studentList=studentList.filter((student)=>{
            return (student.fullname.toLowerCase().indexOf(keyword.toLowerCase())!==-1);
        })
        return studentList.map((student)=>{
            return <StudentItem key={student.id} student={student}/>   
        })
    }
    render() {
    return (
    <div className='container'>        
        <table className="table">
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Mã SV</th>
                    <th>Họ tên</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {this.renderStudentList()}                     
            </tbody>
        </table>
    </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return{
        studentList:state.studentReducer.studentList,
        keyword:state.studentReducer.keyword,
    }
}
export default connect(mapStateToProps,null)(Students);