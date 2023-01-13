import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSearchStudent } from '../redux/reducers/student-information/actions';
class Search extends Component {
    handleOnChange=(event)=>{
        this.props.searchStudent(event.target.value);
        console.log()
    }
    render() {
    return (
        <div className='container px-auto py-3'>
            <div className='col-md-'>
                <label>Tìm kiếm sinh viên</label>
                <input type="text" className="form-control w-50" onChange={this.handleOnChange}/>
            </div>
        </div>
        
    
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        searchStudent:(keyword)=>{            
            dispatch(actSearchStudent(keyword));
        }
    }
}
export default connect(null,mapDispatchToProps)(Search);