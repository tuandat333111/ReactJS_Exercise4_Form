import data from '../../../student-management/data.json'
const initialState={
    studentList:data,
    keyword:"",
    studentEdit:null,
}
const studentReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "Search":
            state.keyword=action.payload;              
            return {...state};
        case "Delete":
            let studentList=[...state.studentList];
            state.studentList=studentList.filter((student)=>{
                return student.id!==action.payload.id;
            })
            return {...state};
        case "Submit":           
            if(action.payload.id){               
                const index=state.studentList.findIndex((student)=>{
                    return student.id==action.payload.id;
                })
                console.log(index);
                if(index!==-1){   
                    if(window.confirm("Mã SV đã tồn tại! Bạn có muốn thay đổi thông tin có mã SV là: "+action.payload.id+"?")){
                        let studentList=[...state.studentList];
                        //update    
                       studentList[index]=action.payload;   
                       state.studentList=studentList;
                       return {...state}; 
                    }                        
                }  
                else{
                    //add
                    const student={...action.payload};
                    let studentList=[...state.studentList,student];
                    state.studentList=studentList;
                } 
            }                     
            return {...state};
        case "Edit":
            state.studentEdit=action.payload;
            return {...state};
        default:
            return {...state};
    }
}
export default studentReducer;