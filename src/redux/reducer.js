import { combineReducers } from "redux";
import listProductsReducer from "../components/reducer/listStudentsSlice";
import formReducer from "../components/reducer/formSlice";
import controlReducer from "../components/reducer/controlSlice";

const rootReducer = combineReducers({
    listStudents: listProductsReducer,
    form: formReducer,
    control: controlReducer
})

export default rootReducer