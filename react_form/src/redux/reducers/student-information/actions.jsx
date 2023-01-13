import { Submit,Delete,Edit,Search } from "./contants";
export const actSubmitStudent=(student)=>{
    return {
        type: Submit,
        payload: student
    }
}
export const actDeleteStudent=(student)=>{
    return{
        type: Delete,
        payload: student,
    }
}
export const actEditStudent=(student)=>{
    return{
        type: Edit,
        payload: student,
    }
}
export const actSearchStudent=(student)=>{
    return{
        type: Search,
        payload: student,
    }
}