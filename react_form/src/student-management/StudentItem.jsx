import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actDeleteStudent,actEditStudent } from '../redux/reducers/student-information/actions';
 class StudentItem extends Component {
    handleOnClickDelete=(student)=>{
        this.props.deleteStudent(student);
    }
    handleOnClickEdit=(student)=>{
        this.props.editStudent(student);
    }
    render() {
    let {student}=this.props;
    return (
        <tr >
            <td>{student.id}</td>
            <td>{student.fullname}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.email}</td>
            <td>
            <button className="btn btn-info mr-2" onClick={()=>{this.handleOnClickEdit(student)}}>Edit</button>
          <button className="btn btn-danger" onClick={()=>{this.handleOnClickDelete(student)}}>Delete</button>
            </td>
        </tr>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteStudent:(student)=>{            
            dispatch(actDeleteStudent(student));
        },
        editStudent:(student)=>{            
            dispatch(actEditStudent(student));
        }
    }
}
export default connect(null,mapDispatchToProps)(StudentItem);