import { combineReducers } from "redux";
import studentReducer from "./student-information";
const rootReducer=combineReducers({
    studentReducer,
})
export default rootReducer;