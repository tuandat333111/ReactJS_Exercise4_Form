import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actSubmitStudent } from '../redux/reducers/student-information/actions';
class Modal extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            fullname:"",
            phoneNumber:"",
            email:"",
        }
    }
    handleOnChange=(event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value,
        })
       
    }
    handleonSubmit=(event)=>{
        event.preventDefault();
        this.props.submitStudent(this.state);

        
    }
    UNSAFE_componentWillReceiveProps(nextprops){
        if(nextprops&&nextprops.studentEdit){
            this.setState({
                id:nextprops.studentEdit.id,
                fullname:nextprops.studentEdit.fullname,
                phoneNumber:nextprops.studentEdit.phoneNumber,
                email: nextprops.studentEdit.email,
            })
        }
        else{
            this.setState({
                id:"",
                fullname:"",
                phoneNumber:"",
                email:"",
            })
        }
    }
    render() {
    return (
    <>
    <form className='container' onSubmit={this.handleonSubmit}>
        <h1 className='text-center py-3 bg-dark text-white'>THÔNG TIN SINH VIÊN</h1>  
        <div className='row '>            
            <div className="col-md-6">
                <label>Mã SV</label>
                <input type="text"
                className="form-control" value={this.state.id} name="id" placeholder="" onChange={this.handleOnChange}/>              
            </div>
            <div className="col-md-6">
                <label>Họ Tên</label>
                <input type="text"
                className="form-control" value={this.state.fullname} name="fullname" placeholder="" onChange={this.handleOnChange}/>              
            </div>
            <div className="col-md-6">
                <label>Số điện thoại</label>
                <input type="text"
                className="form-control" value={this.state.phoneNumber} name="phoneNumber" placeholder="" onChange={this.handleOnChange}/>              
            </div>
            <div className="col-md-6">
                <label>Email</label>
                <input type="text"
                className="form-control" value={this.state.email} name="email" placeholder="" onChange={this.handleOnChange}/>              
            </div>
            <div className="col-md-6 my-3">
                <button className='btn btn-success' type='submit'>{this.props.studentEdit?"Sửa thông tin":"Thêm sinh viên"}</button>
            </div>
        </div>
    </form>
        
    </>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        submitStudent:(student)=>{            
            dispatch(actSubmitStudent(student));
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        studentEdit:state.studentReducer.studentEdit,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal);